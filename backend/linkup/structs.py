from enum import Enum
from typing import List

import json

class EventTags(str, Enum):
    TRASH_CLEANUP = "Trash-Cleanup"
    FOOD_DRIVE = "Food-Drive"
    LAWN_MOWING = "Lawn-Mowing"
    PLANTING_TREES = "Planting-Trees"
    GARDENING = "Gardening"
    TUTORING = "Tutoring"
    VOLUNTEER = "Volunteer"

    def __str__(self):
        return self.value

    def __repr__(self):
        return self.value

    def values(self):
        return [x.value for x in EventTags]

class EventTagColors(dict):
    def __init__(self):
        super().__init__()
        self.update({
            EventTags.TRASH_CLEANUP: "#FF0000",
            EventTags.FOOD_DRIVE: "#00FF00",
            EventTags.LAWN_MOWING: "#0000FF"
        })
    
    def json(self):
        return_str = "{"
        for key, value in self.items():
            return_str += f"\"{key}\": \"{value}\","
        return_str = return_str[:-1] + "}"
        return return_str

    
class EventTagsEntry(list[EventTags]):
    def __init__(self, tags):
        for tag in tags:
            self.append(tag)
    
    def decode(encoded_tags):
        tags: List[EventTags] = []
        raw_tags = encoded_tags.split(",")

        for tag in raw_tags:
            try:
                tags += [EventTags(tag)]
            except ValueError:
                raise ValueError("Invalid tag: " + tag)
        return EventTagsEntry(tags)
    
    def encode(self):
        encoded_str = ""
        for tag in self:
            print(tag)
            encoded_str += tag.value + ","
        return encoded_str[:-1]

    def __str__(self):
        return self.encode()

class EventInfo:
    def __init__(self, event_name, event_tag):
        self.event_name = event_name
        self.event_tag = event_tag