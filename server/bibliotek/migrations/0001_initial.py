# Generated by Django 5.1.6 on 2025-03-08 10:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ouvrage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=255)),
                ('auteur', models.CharField(max_length=150)),
                ('categorie', models.CharField(max_length=100)),
                ('annee_publication', models.IntegerField()),
                ('quantite_disponible', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Utilisateur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('mot_de_passe', models.CharField(max_length=255)),
                ('role', models.CharField(choices=[('Étudiant', 'Étudiant'), ('Professeur', 'Professeur'), ('Bibliothécaire', 'Bibliothécaire')], max_length=20)),
                ('date_inscription', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_reservation', models.DateField(auto_now_add=True)),
                ('date_retour_prevu', models.DateField()),
                ('statut', models.CharField(choices=[('En attente', 'En attente'), ('Confirmée', 'Confirmée'), ('Annulée', 'Annulée')], max_length=20)),
                ('ouvrage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bibliotek.ouvrage')),
                ('utilisateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bibliotek.utilisateur')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('date_envoi', models.DateTimeField(auto_now_add=True)),
                ('utilisateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bibliotek.utilisateur')),
            ],
        ),
    ]
