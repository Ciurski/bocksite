from rest_framework import serializers
from .models import Contest, Result

class ContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest
        fields = ('start_time', 'end_time', 'description', 'title', 'competitors', 'pic')


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ('contest', 'competitor', 'jury_confirmed', 'pcz', 'kczbo',
        'kczo', 'pd', 'kd', 'pp', 'kp', 'kcp', 'pcp', 'char')
        
