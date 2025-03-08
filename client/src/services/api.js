import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Récupérer les ouvrages
export const fetchOuvrages = async () => {
    const response = await axios.get(`${API_URL}/ouvrages/`);
    return response.data;
};

// Récupérer les réservations
export const fetchReservations = async () => {
    const response = await axios.get(`${API_URL}/reservations/`);
    return response.data;
};

// Réserver un ouvrage
export const reserverOuvrage = async (idUtilisateur, idOuvrage) => {
    const response = await axios.post(`${API_URL}/reservations/`, {
        id_utilisateur: idUtilisateur,
        id_ouvrage: idOuvrage,
        date_retour_prevu: new Date().toISOString().split('T')[0] // Date retour automatique
    });
    return response.data;
};

// Annuler une réservation
export const annulerReservation = async (idReservation) => {
    const response = await axios.post(`${API_URL}/reservations/${idReservation}/annuler/`);
    return response.data;
};
