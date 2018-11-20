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
        fields = ('id', 'url', 'username', 'email', 'competitor')

    def create(self, validated_data):
        competitor_data = validated_data.pop('competitor')
        user = User.objects.create(**validated_data)
        try:
            competitor = Competitor.objects.get(license = competitor_data['license'])
        except Competitor.DoesNotExist:
            return False
        import pdb; pdb.set_trace()
        if competitor:
            if competitor.user == None:
                competitor.user = user
                competitor.name = competitor_data.get('name')
                competitor.surname = competitor_data.get('surname')
                competitor.profile_pic = competitor_data.get('profile_pic')
                competitor.save()
            else:
                return user
        else:
            Competitor.objects.create(user=user, **competitor_data)

        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        competitor_data = validated_data.get('competitor')

        competitor = Competitor.objects.get(license = competitor_data['license'])
        if competitor:
            competitor.name = competitor_data.get('name')
            competitor.surname = competitor_data.get('surname')
            competitor.profile_pic = competitor_data.get('profile_pic')
            competitor.save()
        else:
            Competitor.objects.create(user=instance, **competitor_data)

        return instance

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
