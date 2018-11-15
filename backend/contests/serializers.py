from rest_framework import serializers
from .models import Contest, Result

class ContestSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('start_time', 'end_time', 'description', 'title', 'competitors')
        model = Contest
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('contest', 'competitor', 'jury_confirmed', 'pcz', 'kczbo',
        'kczo', 'pd', 'kd', 'pp', 'kp', 'kcp', 'pcp', 'char')
        model = Result
