from django.db import models

# Create your models here.
class Utilisateur(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mot_de_passe = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=[('Étudiant', 'Étudiant'), ('Professeur', 'Professeur'), ('Bibliothécaire', 'Bibliothécaire')])
    date_inscription = models.DateField(auto_now_add=True)

class Ouvrage(models.Model):
    titre = models.CharField(max_length=255)
    auteur = models.CharField(max_length=150)
    categorie = models.CharField(max_length=100)
    annee_publication = models.IntegerField()
    quantite_disponible = models.IntegerField(default=1)

class Reservation(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    ouvrage = models.ForeignKey(Ouvrage, on_delete=models.CASCADE)
    date_reservation = models.DateField(auto_now_add=True)
    date_retour_prevu = models.DateField()
    statut = models.CharField(max_length=20, choices=[('En attente', 'En attente'), ('Confirmée', 'Confirmée'), ('Annulée', 'Annulée')])

class Notification(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    message = models.TextField()
    date_envoi = models.DateTimeField(auto_now_add=True)
