import { useState, useEffect } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../datas/mockDatas"
import { fetchUserData } from '../services/api';


/*************************** */
/**PASSER PAR LES MOCK DATAS */
/*************************** */

/*// Ce hook personnalisé est utilisé pour récupérer les données utilisateur à partir de données fictives (mockDatas)
export const useUserData = (userId, dataType, category) => {
    
    let data

    // Utilisez un switch pour déterminer quel ensemble de données utiliser en fonction du type de données
    switch (dataType) {
        case "":
        // Si le type de données est une chaîne vide, utilisez USER_MAIN_DATA
        data = USER_MAIN_DATA.find(user => user.id === userId);
        break

        case "activity":
        // Si le type de données est "activity", utilisez USER_ACTIVITY
        data = USER_ACTIVITY.find(user => user.userId === userId);
        break

        case "average-sessions":
        // Si le type de données est "average-sessions", utilisez USER_AVERAGE_SESSIONS
        data = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
        break

        case "performance":
        // Si le type de données est "performance", utilisez USER_PERFORMANCE
        data = USER_PERFORMANCE.find(user => user.userId === userId);
        break
    }
    // Emballez les données dans un objet pour correspondre à la structure de données attendue
    data = {data}

    // Créez une liste de tous les ID d'utilisateur
    const allUserIds = USER_MAIN_DATA.map(user => user.id)

    // Vérifiez si l'ID de l'utilisateur est dans la liste des ID d'utilisateur. S'il ne l'est pas, définissez l'erreur sur true
    const error = allUserIds.includes(userId) ? false : true

    // Comme nous utilisons des données fictives, le chargement est toujours false
    const loading = false

    // Retournez les données, l'erreur et l'état de chargement
    return { data, error, loading }
}
*/

/****************** */
/**PASSER PAR L'API */
/****************** */

// Ce hook personnalisé est utilisé pour récupérer les données utilisateur
export const useUserData = (userId, dataType) => {
    // Initialise l'état pour les données, le chargement et les erreurs
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Utilise useEffect pour exécuter du code après chaque rendu
    useEffect(() => {
        // Définit une fonction asynchrone pour récupérer les données
        const fetchData = async () => {
            try {
                // Appelle la fonction fetchUserData pour récupérer les données
                const result = await fetchUserData(userId, dataType);
                // Met à jour l'état des données avec le résultat
                setData(result);
            } catch (error) {
                // Si une erreur se produit, met à jour l'état de l'erreur
                setError(error);
            } finally {
                // Quoi qu'il arrive, arrête le chargement
                setLoading(false);
            }
        };

        // Appelle la fonction fetchData
        fetchData();
    }, [userId]); // Exécute le code chaque fois que userId change

    // Retourne les données, l'état de chargement et l'erreur
    return { data, loading, error };
}
