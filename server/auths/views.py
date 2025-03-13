from django.contrib.auth import get_user_model, authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

Utilisateur = get_user_model()

@api_view(['POST'])
def register(request):
    """Créer un nouvel utilisateur avec validation"""
    data = request.data

    # Vérification si le username ou l'email existe déjà
    if Utilisateur.objects.filter(username=data['username']).exists():
        return Response({"error": "Ce nom d'utilisateur est déjà pris"}, status=status.HTTP_400_BAD_REQUEST)
    
    if Utilisateur.objects.filter(email=data['email']).exists():
        return Response({"error": "Cet email est déjà utilisé"}, status=status.HTTP_400_BAD_REQUEST)

    # Création de l'utilisateur
    user = Utilisateur.objects.create_user(
        username=data['username'],
        email=data['email'],
        password=data['password'],
        role=data.get('role', 'Lecteur')  # Valeur par défaut : Lecteur
    )
    
    return Response({"message": "Compte créé avec succès !"}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def login(request):
    """Authentifier un utilisateur et retourner un token JWT"""
    data = request.data
    user = authenticate(username=data['username'], password=data['password'])

    if user is None:
        return Response({"error": "Identifiants invalides"}, status=status.HTTP_401_UNAUTHORIZED)

    # Générer le token JWT
    refresh = RefreshToken.for_user(user)
    
    return Response({
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "role": user.role
    }, status=status.HTTP_200_OK)
