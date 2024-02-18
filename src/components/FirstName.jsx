// Importez les hooks et les services nécessaires
import { useUserData } from '../components/Fetch'
import Model from '../services/model'

// Ce composant affiche le prénom d'un utilisateur spécifique
export const FirstName = ({userId}) => {
    // Utilisez le hook personnalisé useUserData pour récupérer les données de l'utilisateur
    const data = useUserData(userId, "")

    let firstName
    // Vérifiez si les données existent et sont bien structurées
    if (data && data.data && data.data.data && data.data.data.userInfos) {
        // Si c'est le cas, utilisez la fonction Model pour transformer les données en un format approprié pour le prénom
        firstName = Model(data, "firstName")
    }
    else {
        // Si les données ne sont pas disponibles, utilisez une chaîne vide comme prénom par défaut
        firstName = "..."
    }
    // Renvoie le prénom
    return firstName
}

// Exportez FirstName comme composant par défaut
export default FirstName
