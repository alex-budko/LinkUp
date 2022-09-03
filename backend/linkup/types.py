from django import forms
from django.db import models

class Location:
    def __init__(self, latitude, longitude):
        self.latitude = latitude
        self.longitude = longitude

class LocationField(forms.MultiValueField):
    def __init__(self, *args, **kwargs):
        fields = (
            models.FloatField(max_value=90, min_value=-90),
            models.FloatField(max_value=90, min_value=-90)
        )
        super().__init__(*args, **kwargs)


    def compress(self, data_list):
        latitude, longitude = data_list
        return Location(latitude, longitude)