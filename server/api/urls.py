from django.urls import path
from .views import OuvrageList

urlpatterns = [
    path('ouvrages/', OuvrageList.as_view(), name='ouvrages-list'),
]
