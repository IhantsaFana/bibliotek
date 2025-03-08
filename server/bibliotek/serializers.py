from rest_framework import serializers
from .models import Utilisateur, Ouvrage, Reservation

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = '__all__'

class OuvrageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ouvrage
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
