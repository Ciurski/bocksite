from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Competitor
from .serializers import CompetitorSerializer

class ListCompetitor(generics.ListCreateAPIView):
    queryset = Competitor.objects.all()
    serializer_class = CompetitorSerializer

class DetailCompetitor(generics.RetrieveUpdateDestroyAPIView):
    queryset = Competitor.objects.all()
    serializer_class = CompetitorSerializer
