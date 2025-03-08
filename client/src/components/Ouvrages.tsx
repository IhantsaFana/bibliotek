import React, { useEffect, useState } from 'react';
import { fetchOuvrages, reserverOuvrage } from '../services/api';

const Ouvrages = () => {
    const [ouvrages, setOuvrages] = useState([]);
    const idUtilisateur = 1; // À remplacer par l'ID de l'utilisateur connecté

    useEffect(() => {
        loadOuvrages();
    }, []);

    const loadOuvrages = async () => {
        const data = await fetchOuvrages();
        setOuvrages(data);
    };

    const handleReserve = async (idOuvrage) => {
        await reserverOuvrage(idUtilisateur, idOuvrage);
        loadOuvrages(); // Mettre à jour la liste
    };

    return (
        <div>
            <h2>Liste des Ouvrages</h2>
            <ul>
                {ouvrages.map((ouvrage) => (
                    <li key={ouvrage.id_ouvrage}>
                        {ouvrage.titre} - {ouvrage.auteur} ({ouvrage.annee_publication}) 
                        - 📚 Disponibles: {ouvrage.quantite_disponible}
                        {ouvrage.quantite_disponible > 0 && (
                            <button onClick={() => handleReserve(ouvrage.id_ouvrage)} style={{ marginLeft: '10px' }}>
                                Réserver
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ouvrages;
