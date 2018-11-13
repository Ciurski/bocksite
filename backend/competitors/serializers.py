from rest_framework import serializers
from .models import Competitor

class CompetitorSerializer(serializers.ModelSerializer):
        class Meta:
            fields = ('id', 'email', 'license', 'name', 'surname', 'profile_pic')
            model = Competitor
