from django.db import models

# Create your models here.
class Livre(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
