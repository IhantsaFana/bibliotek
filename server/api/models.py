from django.db import models

# Create your models here.
class Ouvrage(models.Model):
    titre = models.CharField(max_length=255)
    auteur = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    quantite = models.IntegerField(default=1)

    def __str__(self):
        return self.titre
