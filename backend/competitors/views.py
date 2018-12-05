from django.shortcuts import render
from django.contrib.auth.models import User, Group
from django.contrib.auth.decorators import login_required
# Create your views here.
from rest_framework import generics, viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

#from rest_framework.request import Request
from .models import Competitor
from .serializers import CompetitorSerializer, UserSerializer, GroupSerializer

class ListCompetitor(generics.ListCreateAPIView):
    queryset = Competitor.objects.all()
    serializer_class = CompetitorSerializer

class DetailCompetitor(generics.RetrieveAPIView):
    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    queryset = Competitor.objects.all()
    serializer_class = CompetitorSerializer

class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class DetailUser(generics.RetrieveUpdateDestroyAPIView):
        """
        API endpoint that allows users to be viewed or edited.
        """
        def get_permissions(self):
            """
            Instantiates and returns the list of permissions that this view requires.
            """
            permission_classes = [IsAuthenticated]
            return [permission() for permission in permission_classes]
        queryset = User.objects.all().order_by('-date_joined')
        serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
