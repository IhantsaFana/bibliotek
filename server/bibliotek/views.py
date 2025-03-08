from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets, status
from .models import Utilisateur, Ouvrage, Reservation
from .serializers import UtilisateurSerializer, OuvrageSerializer, ReservationSerializer

class UtilisateurViewSet(viewsets.ModelViewSet):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class OuvrageViewSet(viewsets.ModelViewSet):
    queryset = Ouvrage.objects.all()
    serializer_class = OuvrageSerializer


class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def create(self, request, *args, **kwargs):
        """ Vérifier la disponibilité de l'ouvrage avant réservation """
        ouvrage_id = request.data.get('id_ouvrage')
        ouvrage = Ouvrage.objects.get(id=ouvrage_id)

        if ouvrage.quantite_disponible > 0:
            ouvrage.quantite_disponible -= 1
            ouvrage.save()
            return super().create(request, *args, **kwargs)
        else:
            return Response({"error": "Ouvrage non disponible"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def annuler(self, request, pk=None):
        """ Annuler une réservation et remettre le livre en stock """
        reservation = self.get_object()
        ouvrage = reservation.ouvrage
        ouvrage.quantite_disponible += 1
        ouvrage.save()
        reservation.delete()
        return Response({"message": "Réservation annulée"}, status=status.HTTP_200_OK)