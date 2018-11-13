from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListAnnouncement.as_view()),
    path('<int:pk>/', views.DetailAnnouncement.as_view()),
]
