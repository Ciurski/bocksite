from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import Competitor

class CompetitorSerializer(serializers.ModelSerializer):
        class Meta:
            model = Competitor
            fields = ('id', 'license', 'name', 'surname', 'profile_pic')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    competitor = CompetitorSerializer(many=False)
    
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups', 'competitor')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class CompetitorSerializer(serializers.ModelSerializer):
        class Meta:
            model = Competitor
            fields = ('id', 'user', 'email', 'license', 'name', 'surname', 'profile_pic')
