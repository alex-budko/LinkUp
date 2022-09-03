from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

class UserAccountManager(BaseUserManager):
    def create(self, name, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
        )

        user.is_admin = True
        user.save()

        return user


class UserAccount(AbstractBaseUser):
    
    email = models.EmailField(
        verbose_name='email address',
        max_length=265,
        unique=True,
    )

    name = models.CharField(max_length=265, primary_key=True, unique=True, blank=False)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def has_perm(self):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin

    def get_full_name(self):
        return self.name
    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email
