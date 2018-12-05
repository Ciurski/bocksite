from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Contest, Result
from .serializers import ContestSerializer, ResultSerializer
# Create your views here.

class ListContest(generics.ListCreateAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer

class DetailContest(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer

class ListResult(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class DetailResult(generics.RetrieveUpdateDestroyAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
