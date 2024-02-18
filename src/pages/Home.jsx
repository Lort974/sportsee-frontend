// Importez les composants et les hooks nécessaires
import NutritionCard from "../components/NutritionCard"
import ActivityCard from "../components/ActivityCard"
import AverageSessionsCard from "../components/AverageSessionsCard"
import PerformanceCard from "../components/PerformanceCard"
import ScoreCard from "../components/ScoreCard"
import FirstName from "../components/FirstName"
import { useParams } from "react-router-dom"
import PageError from "./PageError"
import { useUserData } from "../components/Fetch"

// Ce composant affiche la page d'accueil pour un utilisateur spécifique
const Home = ({userId}) => {
    // Utilisez le hook personnalisé useUserData pour récupérer les données de l'utilisateur
    const { data: userData, loading, error } = useUserData(userId, "");

    // Si les données sont en cours de chargement, affichez un message de chargement
    if (loading) {
        return <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__title">
                    <span className="dashboard__header__title--hello">Chargement </span>
                    <span className="dashboard__header__title--name">...</span>
                </div>
                <div className="dashboard__header__baseline">
                    Merci de patienter
                </div>
            </div>
        </div>
    }

    // Si une erreur s'est produite, affichez un message d'erreur
    if (error) {
        return <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__title">
                    <span className="dashboard__header__title--hello">Une erreur s'est produite : </span>
                </div>
                <div className="dashboard__header__baseline">
                    {error.message ? error.message : "Utilisateur introuvable"}
                </div>
            </div>
        </div>
    }

    // Si les données de l'utilisateur n'existent pas, affichez une page d'erreur
    if (!userData) {
        return <PageError />
    }

    // Sinon, affichez la page d'accueil avec les données de l'utilisateur
    return <>
        <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__title">
                    <span className="dashboard__header__title--hello">Bonjour </span>
                    <span className="dashboard__header__title--name">{<FirstName userId={userId} />}</span>
                </div>
                <div className="dashboard__header__baseline">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
            <div className="dashboard__body">
                <div className="dashboard__body__charts">
                    <div className="dashboard__body__charts__weigth">
                        <ActivityCard userId={userId} />
                    </div>
                    <div className="dashboard__body__charts__activity">
                        <div className="dashboard__body__charts__activity__elt dashboard__body__charts__activity__elt--session-time">
                            <AverageSessionsCard userId={userId} />
                        </div>
                        <div className="dashboard__body__charts__activity__elt dashboard__body__charts__activity__elt--performance">
                            <PerformanceCard userId={userId} />
                        </div>
                        <div className="dashboard__body__charts__activity__elt">
                            <ScoreCard userId={userId} />
                        </div>
                    </div>
                </div>
                <div className="dashboard__body__nutrition">
                    <NutritionCard userId={userId} category="calorieCount" />
                    <NutritionCard userId={userId} category="proteinCount" />
                    <NutritionCard userId={userId} category="carbohydrateCount" />
                    <NutritionCard userId={userId} category="lipidCount" />
                </div>
            </div>
        </div>
    </>
}

// Exportez Home comme composant par défaut
export default Home
