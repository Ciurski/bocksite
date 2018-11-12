from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListCompetitor.as_view()),
    path('<int:pk>/', views.DetailCompetitor.as_view()),
]
