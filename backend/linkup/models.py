import uuid

from django.db import models

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

from datetime import timedelta

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

    @property
    def hours(self):
        registrations = Registration.objects.filter(uid=self.uid).all()
        total_time = timedelta(0)

        for registration in registrations:
            if registration.end is not None and registration.start is not None:
                total_time += registration.end - registration.start

        return total_time.days*24 + total_time.seconds/3600
    
class Event(models.Model):
    eid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=265, blank=False, unique=True)
    location = models.CharField(max_length=265, blank=False)
    organizer = models.ForeignKey(User
, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    tags = models.TextField(blank=True) # comma separated list of tags. Use structs.EventTagsEntry
    capacity = models.IntegerField(blank=False)
    # init_code = models.IntegerField(blank=False, unique=True)
        

class Registration(models.Model):
    rid = models.AutoField(primary_key=True)
    eid = models.OneToOneField(Event, on_delete=models.CASCADE)
    uid = models.OneToOneField(User
, on_delete=models.CASCADE)
    start = models.DateTimeField()
    end = models.DateTimeField()

    unique_together = [['uid', 'eid']]

class Session(models.Model):
    sid = models.AutoField(primary_key=True)
    uid = models.ForeignKey(User
, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, editable=False)