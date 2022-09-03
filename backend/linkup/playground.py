from models import Event
from django.conf import settings

settings.configure()
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "linkup.settings")

# user = models.User(
#     email="kevin@gmail.com",
#     username = "kevin",
#     name = "Kevin Yang",
#     password = "password",
#     objects = models.User.objects
# )

# user.save()

event = Event(
    title="Trash Cleanup",
    latitide = 37.78,
    longitude = -122.41,
    description = "Clean up the trash",
    start_time = "2019-01-01T00:00:00",
    end_time = "2019-01-01T00:00:00",
    tags = "Trash-Cleanup"
)

event.save()


