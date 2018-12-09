from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Contest, Result
from .serializers import ContestSerializer, ResultSerializer
from django.utils import timezone
# Create your views here.

class ListContest(generics.ListCreateAPIView):
    serializer_class = ContestSerializer
    def get_queryset(self):
        if self.request.method == 'GET':
            queryset = Contest.objects.all()
            parameter = self.request.GET.get('q', None)
            if parameter == 'closest':
                now = timezone.now()
                queryset = queryset.filter(start_time__gte=now).order_by('start_time')
            return queryset


class DetailContest(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer

class ListResult(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class DetailResult(generics.RetrieveUpdateDestroyAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
