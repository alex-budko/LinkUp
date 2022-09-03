
from django.urls import path, re_path
from .views import UserCreateList, EventsCreateList, RegistrationCreateList, EventRetrieveUpdateDestroy, EventTagList, EventSearchList

urlpatterns = [
    path('users/', UserCreateList.as_view()),
    path('events/', EventsCreateList.as_view()),
    path('events/<int:pk>/', EventRetrieveUpdateDestroy.as_view()),
    path('events/tags/', EventTagList.as_view()),
    path('events/search/', EventSearchList.as_view()),
    # path('register/', )
]