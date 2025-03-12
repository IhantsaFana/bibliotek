from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ouvrage
from .serializers import OuvrageSerializer

class OuvrageList(APIView):
    def get(self, request):
        ouvrages = Ouvrage.objects.all()
        serializer = OuvrageSerializer(ouvrages, many=True)
        return Response(serializer.data)
