// Importez les icônes, les hooks et les services nécessaires
import caloriesIcon from "../assets/calories-icon.svg"
import proteinIcon from "../assets/protein-icon.svg"
import carbsIcon from "../assets/carbs-icon.svg"
import fatIcon from "../assets/fat-icon.svg"
import { useUserData } from '../components/Fetch'
import Model from '../services/model'

// Ce composant affiche une carte de nutrition pour un utilisateur spécifique
const NutritionCard = ({userId, category}) => {
    // Utilisez le hook personnalisé useUserData pour récupérer les données de l'utilisateur
    const data = useUserData(userId, "")
    let value = 0

    // Vérifiez si les données existent et sont bien structurées
    if (data && data.data && data.data.data && data.data.data.keyData) {
        // Si c'est le cas, utilisez la fonction Model pour transformer les données en un format approprié pour la carte de nutrition
        value = Model(data, "nutritionCard", category)
    }

    let icon = ""
    let description = ""
    let unit = ""
    // Utilisez un switch pour déterminer l'icône, la description et l'unité en fonction de la catégorie
    switch(category) {
        case "calorieCount":
        icon = caloriesIcon
        description = "Calories"
        unit = "kCal"
        break;
        case "proteinCount":
        icon = proteinIcon
        description = "Protéines"
        unit = "g"
        break;
        case "carbohydrateCount":
        icon = carbsIcon
        description = "Glucides"
        unit = "g"
        break;
        case "lipidCount":
        icon = fatIcon
        description = "Lipides"
        unit = "g"
        break;
    }

    // Renvoie une carte de nutrition avec l'icône, la valeur, la description et l'unité appropriées
    return <div className="dashboard__body__nutrition__elt">
        <img src={icon} alt="Icône protéines" className="dashboard__body__nutrition__elt__pic" />
        <div className="dashboard__body__nutrition__elt__details">
            <div className="dashboard__body__nutrition__elt__details__value">
                {value+unit}
            </div>
            <div className="dashboard__body__nutrition__elt__details__description">
                {description}
            </div>
        </div>
    </div>
}

// Exportez NutritionCard comme composant par défaut
export default NutritionCard
