from .models import Event, User, Registration
from .serializers import EventSerializer, UserSerializer, RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .structs import EventTags

import operator

from django.db.models import Q
class UserCreateList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventsCreateList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventTagList(generics.ListAPIView):
    def get_queryset(self):
        tag = self.kwargs['tags']
        sys.stderr.write(tag)
        # tags = self.request.queryparams.getlist('tags', '')
        query = Q()
        for tag in tags:
            if tag in EventTags:
                query &= Q(event__icontains = tags)

        self.queryset = Event.objets.get(query)
        return self.queryset

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