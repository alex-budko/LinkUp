from rest_framework import serializers

from .models import User, Event, Registration
from .structs import EventTagsEntry, EventTagColors

class UserSerializerCreate(serializers.ModelSerializer):
    # uid = serializers.ReadOnlyField(source='uid')
    class Meta:
        model = User
        fields = ['name', 'username', 'password', 'email', 'hours']

class UserSeralizersReturn(serializers.ModelSerializer):
    # hours = serializers.ReadOnlyField(source='hours')
    class Meta:
        model = User
        fields = ['name', 'username', 'email', 'uid', 'hours']
    
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['eid', 'title', 'location', 'organizer', 'description', 'tags', 'capacity', 'attendees', 'attendees_count', 'tags']
    
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