from django.shortcuts import render
from django.contrib.auth.models import User, Group
# Create your views here.
from rest_framework import generics, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
#from rest_framework.request import Request
from .models import Competitor
from .serializers import CompetitorSerializer, UserSerializer, GroupSerializer

class ListCompetitor(generics.ListCreateAPIView):
    queryset = Competitor.objects.all()
    serializer_class = CompetitorSerializer

class DetailCompetitor(generics.RetrieveUpdateDestroyAPIView):
    queryset = Competitor.objects.all()
    serializer_class = CompetitorSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

    def create(self, request, format=None):
        """
        if new competitor create - if egzisting make relation
        """
        data = request.data
        import pdb; pdb.set_trace()
        serializer_context = {'request': request}
        serializer = UserSerializer(data=data, context=serializer_context)
        if serializer.is_valid():
            user = serializer.save()
            competitors = Competitor.objects.all()
            for competitor in competitors:
                if user.username == competitor.license:
                    competitor.user = user
                    competitor.save()
                    user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
