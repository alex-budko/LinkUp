from .models import Event, User, Registration
from .serializers import EventSerializer, UserSerializer, RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .structs import EventTags

from django.db.models import Q
class UserCreateList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventsCreateList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventTagList(generics.ListAPIView):
    def get_queryset(self):
        # tag = self.kwargs['tags']
        # print(self.request.GET)
        tags = self.request.query_params.getlist('tags')
        query = Q()
        for tag in tags:
            try: 
                EventTags(tag)
                query &= Q(tags__contains=tag)
            except:
                pass
        return Event.objects.filter(query)

    serializer_class = EventSerializer

class EventSearchList(generics.ListAPIView):
    def get_queryset(self):
        q_parameters = self.request.query_params.getlist('q')
        query = Q()
        for q in q_parameters:
            query &= Q(title__contains=q) | Q(description__contains=q)
            # return Event.objects.filter(Q(title__contains=q) | Q(description__contains=q))
        return Event.objects.filter(query)

    serializer_class = EventSerializer

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

        token['username'] = user.username
        token['name'] = user.name
        token['email'] = user.email


        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer