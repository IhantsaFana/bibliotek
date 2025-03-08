from django.shortcuts import render
from rest_framework import viewsets
from .serelizers import LivreSerializer
from .models import Livre
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class LivreViewSet(viewsets.ModelViewSet):
    queryset = Livre.objects.all()
    serializer_class = LivreSerializer
    permission_classes = [IsAuthenticated]