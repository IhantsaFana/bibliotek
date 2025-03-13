import { useEffect, useState } from 'react';
import { fetchReservations, annulerReservation } from '../services/auth';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        loadReservations();
    }, []);

    const loadReservations = async () => {
        const data = await fetchReservations();
        setReservations(data);
    };

    const handleCancel = async (idReservation) => {
        await annulerReservation(idReservation);
        loadReservations(); // Mettre à jour la liste
    };

    return (
        <div>
            <h2>Réservations</h2>
            {reservations.length === 0 ? (
                <p>Aucune réservation en cours</p>
            ) : (
                <ul>
                    {reservations.map((res) => (
                        <li key={res.id_reservation}>
                            Ouvrage: {res.ouvrage.titre} | Statut: {res.statut} 
                            <button onClick={() => handleCancel(res.id_reservation)} style={{ marginLeft: '10px' }}>
                                Annuler
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Reservations;
