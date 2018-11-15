from django.urls import path
from django.conf.urls import url, include
from . import views

urlpatterns = [
        path('contest/', views.ListContest.as_view()),
        path('contest/<int:pk>/', views.DetailContest.as_view()),
        path('result/', views.ListResult.as_view()),
        path('result/<int:pk>/', views.DetailResult.as_view()),
]
