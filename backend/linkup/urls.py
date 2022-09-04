
from django.urls import path
from .views import UserCreateList, EventsCreateList, RegistrationCreateList, EventRetrieveUpdateDestroy, EventSearchList, eventTagColors, userHours, RegistrationEventsCreateList, UserLeaderboardList, UserList

urlpatterns = [
    path('users/', UserCreateList.as_view()),
    path('users/<int:pk>/', UserList.as_view()),
    # path('users/hours/', userHours),
    path('users/leaderboard/', UserLeaderboardList.as_view()),
    path('users/events/', RegistrationEventsCreateList.as_view()),
    # path('users/events/past',)
    # path('users/events/current',)
    # path('users/events/signedup',)
    path('events/', EventsCreateList.as_view()),                    # Create event endpoint
    path('events/<int:pk>/', EventRetrieveUpdateDestroy.as_view()), # Event details by eid
    path('events/search/', EventSearchList.as_view()),              # Search for events by keyword
    path('register/', RegistrationCreateList.as_view()),     # Register for event
    path('tags/', eventTagColors),
    # path('register/', )
]