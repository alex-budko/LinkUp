
from django.urls import path
from .views import UserCreateList, EventsCreateList, RegistrationCreateList, EventRetrieveUpdateDestroy, EventSearchList, eventTagColors

urlpatterns = [
    path('users/', UserCreateList.as_view()),
    path('users/<int:pk>/', UserCreateList.as_view()),
    # path('users/events/past',)
    # path('users/events/current',)
    # path('users/events/signedup',)
    path('events/', EventsCreateList.as_view()),
    path('events/<int:pk>/', EventRetrieveUpdateDestroy.as_view()),
    path('events/search/', EventSearchList.as_view()),
    path('tags/', eventTagColors),
    # path('register/', )
]