from .models import Event, User, Registration
from .serializers import EventSerializer, UserSerializer, RegisterSerializer
from rest_framework import generics

from rest_framework.permissions import IsAuthenticated

from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .structs import EventTags, EventTagColors

from django.db.models import Q
class UserCreateList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventsCreateList(generics.ListCreateAPIView):
    PAGE_SIZE = 5
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        page_number = self.request.query_params.get('page', 0)

        return Event.objects.all()[int(page_number) * self.PAGE_SIZE: (int(page_number) + 1) * self.PAGE_SIZE]

    serializer_class = EventSerializer

class EventSearchList(generics.ListAPIView):
    def get_queryset(self):
        q_description = self.request.query_params.getlist('q')
        q_tags = self.request.query_params.getlist('tags')

        query = Q()
        for q in q_description:
            query &= Q(title__contains=q) | Q(description__contains=q)
        
        for tag in q_tags:
            try:
                EventTags(tag)
                query &= Q(tags__contains=tag)
            except:
                pass
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

        token['name'] = user.name
        token['email'] = user.email

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["GET"])
def eventTagColors(request):
    if request.method == "GET":
        return Response(EventTagColors().json())

@api_view(["GET"])
def eventTags(request):
    if request.method == "GET":
        return Response(EventTags().json())