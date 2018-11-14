from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    url(r'users/', include(router.urls)),
    url(r'users/^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', views.ListCompetitor.as_view()),
    path('<int:pk>/', views.DetailCompetitor.as_view()),
]
