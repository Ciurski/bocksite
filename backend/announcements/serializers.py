from rest_framework import serializers
from .models import Announcement

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'content', 'timestamp')
        model = Announcement
