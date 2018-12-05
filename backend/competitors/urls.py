from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views



urlpatterns = [
    path('users/', views.ListUser.as_view()),
    path('users/^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('users/<int:pk>/', views.DetailUser.as_view()),
    path('', views.ListCompetitor.as_view()),
    path('<int:pk>/', views.DetailCompetitor.as_view(), name='user-detail'),
]
