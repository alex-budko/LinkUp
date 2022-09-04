from .models import Event, User, Registration
from .serializers import EventSerializer, UserSerializerCreate, RegisterSerializer, UserSeralizersReturn

from rest_framework import generics

from rest_framework.permissions import IsAuthenticated

from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .structs import EventTags, EventTagColors

from django.db.models import Q

from datetime import timedelta

class UserCreateList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerCreate

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSeralizersReturn

class EventsCreateList(generics.ListCreateAPIView):
    PAGE_SIZE = 5
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        page_number = self.request.query_params.get('page', 0)

        return Event.objects.all()[int(page_number) * self.PAGE_SIZE: (int(page_number) + 1) * self.PAGE_SIZE]
    
    def create(self, request):
        raw_tags = request.data.get('tags')
        
        if len(raw_tags) > 0:
            try:
                raw_tags = raw_tags[1:-1].split(',')
                string_tag = ''
                for tag in raw_tags:
                    tag = tag.replace('"', '')
                    string_tag += tag + ","
                request.data['tags'] = string_tag[:-1]
                print(request.data['tags'])
            except:
                pass

        return super().create(request)
    
    # def create(self, request, *args, **kwargs):

        # return super().create(request, *args, **kwargs, code=)

    serializer_class = EventSerializer

class RegistrationEventsCreateList(generics.ListCreateAPIView):
    def get_queryset(self):
        uid = self.request.query_params.get('uid', None)
        time = self.request.query_params.get('time', None)
        if uid is None:
            return []
        if time is None:
            return Registration.objects.filter(uid=uid)
        elif time == 'past':
            return Registration.objects.filter(uid=uid).exclude(start__isnull=True, end__isnull=True)
        elif time == 'future':
            print('future')
            return Registration.objects.filter(uid=uid, start__isnull=True, end__isnull=True)
        elif time == "current":
            print('current')
            return Registration.objects.filter(uid=uid, end__isnull=True)
    
    serializer_class = RegisterSerializer

class EventSearchList(generics.ListAPIView):
    def get_queryset(self):
        q_description = self.request.query_params.getlist('q')
        q_tags = self.request.query_params.getlist('tags')
        
        query = Q()
        for q in q_description:
            query &= Q(title__contains=q) | Q(description__contains=q | Q(location__contains=q))

        for tag in q_tags:
            try:
                EventTags(tag)
                query &= Q(tags__contains=tag)
            except:
                pass
            # return Event.objects.filter(Q(title__contains=q) | Q(description__contains=q))
        return Event.objects.filter(query)

    serializer_class = EventSerializer

class UserLeaderboardList(generics.ListAPIView):
    def get_queryset(self):
        # return User.objects.order_by('hours')
        all_users = User.objects.all()
        leaderboard = []
        for user in all_users:
            hours = userHours(user.uid, bypass=True)
            leaderboard.append((hours, user.uid))
        leaderboard.sort(reverse=True)
        return [x[1] for x in leaderboard]

    serializer_class = UserSerializerCreate

class RegistrationCreateList(generics.ListCreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegisterSerializer
    
    # def list(self, request):
    #     # Note the use of `get_queryset()` instead of `self.queryset`
    #     queryset = self.get_queryset()
    #     serializer = UserSerializer(queryset, many=True)
    #     return Response(serializer.data)

class EventRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['name'] = user.name
        token['email'] = user.email
        token['uid'] = user.uid

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["GET"])
def eventTagColors(request):
    if request.method == "GET":
        return Response(EventTagColors().json())

@api_view(["GET"])
def userHours(request, bypass=False):
    if not bypass:
        uid = request.GET.get('uid')
        if uid is None:
            return Response({'error': 'uid is required'})
    else:
        uid = request
    registrations = Registration.objects.filter(uid=uid).all()
    
    total_time = timedelta(0)

    for registration in registrations:
        if registration.end is not None and registration.start is not None:
            total_time += registration.end - registration.start
    return Response(total_time.days*24 + total_time.seconds/3600)

@api_view(["GET"])
def eventMemberCount(request):
    eid = request.GET.get('eid')
    if eid is None:
        return Response({'error': 'eid is required'})

    registrations = Registration.objects.filter(eid=eid).all()
    return Response(len(registrations))