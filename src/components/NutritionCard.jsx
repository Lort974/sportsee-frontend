import caloriesIcon from "../assets/calories-icon.svg"
import proteinIcon from "../assets/protein-icon.svg"
import carbsIcon from "../assets/carbs-icon.svg"
import fatIcon from "../assets/fat-icon.svg"
import { useUserData } from '../components/Fetch'
import Model from '../services/model'

const NutritionCard = ({userId, category}) => {
    const data = useUserData(userId, "")
    let value = 0

    if (data && data.data && data.data.data && data.data.data.keyData) {
        value = Model(data, "nutritionCard", category)
    }

    let icon = ""
    let description = ""
    let unit = ""
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

export default NutritionCard