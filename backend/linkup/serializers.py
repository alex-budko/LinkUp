from rest_framework import serializers

from .models import User, Event, Registration
from .structs import EventTagsEntry, EventTagColors

class UserSerializerCreate(serializers.ModelSerializer):
    # uid = serializers.ReadOnlyField(source='uid')
    class Meta:
        model = User
        fields = ['name', 'password', 'email', 'hours']

class UserSeralizersReturn(serializers.ModelSerializer):
    # hours = serializers.ReadOnlyField(source='hours')
    class Meta:
        model = User
        fields = ['name', 'email', 'uid', 'hours']
    
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['eid', 'title', 'location', 'organizer', 'description', 'capacity', 'attendees', 'attendees_count', "date"]
    
    # def validate_tags(self, value):
    #     """
    #     Check that the tag list is valid.
    #     """
    #     if len(value) == 0:
    #         return value
    #     try:
    #         EventTagsEntry.decode(value)
    #     except ValueError:
    #         raise serializers.ValidationError("Invalid tags")
    #     return value
    
    def validate_capacity(self, value):
        """
        Check that the capacity is valid.
        """
        if value < 0:
            raise serializers.ValidationError("Invalid capacity")
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