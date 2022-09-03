from rest_framework import serializers

from .models import User, Event, Registration
from .structs import EventTagsEntry, EventTagColors

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['name', 'username', 'password', 'email']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
    
    def validate_tags(self, value):
        """
        Check that the tag list is valid.
        """
        if len(value) == 0:
            return value
        try:
            EventTagsEntry.decode(value)
        except ValueError:
            raise serializers.ValidationError("Invalid tags")
        
        return value

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'
 
    # def validate_latitide(self, value):
    #     """
    #     Check that the latitude is valid.
    #     """
    #     try:
            
    #     except ValueError:
    #         raise serializers.ValidationError("Invalid location")
        
    #     return value