import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

// Interface pour un utilisateur
export interface User {
  username: string;
  email?: string;
  password: string;
  role?: string;
}

// Interface pour les réponses de l'API
export interface AuthResponse {
  access: string;
  refresh: string;
  role: string;
}

// Fonction pour s'inscrire
export const register = async (user: User): Promise<void> => {
  try {
    await axios.post(`${API_URL}/register/`, user);
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Erreur lors de l'inscription");
  }
};


// Fonction pour se connecter
export const login = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login/`, { username, password });
  if (response.data.access) {
    localStorage.setItem("token", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    localStorage.setItem("role", response.data.role);
  }
  return response.data;
};

// Fonction pour récupérer le token
export const getToken = (): string | null => localStorage.getItem("token");

// Fonction pour se déconnecter
export const logout = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh");
  localStorage.removeItem("role");
};
