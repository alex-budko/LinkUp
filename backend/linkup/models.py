import uuid

from django.db import models

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

class UserManager(BaseUserManager):
    def create(self, name, username, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            username=username
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, username, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            username=username
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, username, name, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
            username=username
        )

        user.is_admin = True
        user.save()

        return user


class User(AbstractBaseUser):
    uid = models.AutoField(primary_key=True, unique=True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=265,
        unique=True,
    )
    username = models.CharField(max_length=265, unique=True, blank=False)
    name = models.CharField(max_length=265, unique=False, blank=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

class Event(models.Model):
    eid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=265, blank=False, unique=True)
    latitide = models.FloatField(blank=False, help_text="Floating point degrees. Negative is South, positive is North.")
    longitude = models.FloatField(blank=False, help_text="Floating point degrees. Negative is West, positive is East.")
    # location = gis_models.PointField(blank=False)
    organizer = models.ForeignKey(User
, on_delete=models.CASCADE)

class Registration(models.Model):
    rid = models.AutoField(primary_key=True)
    eid = models.OneToOneField(Event, on_delete=models.CASCADE)
    uid = models.OneToOneField(User
, on_delete=models.CASCADE)
    start = models.DateTimeField()
    end = models.DateTimeField()

    class Meta:
        unique_together = ('eid', 'uid',)

class Session(models.Model):
    sid = models.AutoField(primary_key=True)
    uid = models.ForeignKey(User
, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, editable=False)