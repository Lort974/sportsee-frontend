// Importez le hook useRouteError de react-router-dom
import { useRouteError } from "react-router-dom"

// Ce composant affiche une page d'erreur
const PageError = () => {
    // Utilisez le hook useRouteError pour récupérer l'erreur de routage
    const error = useRouteError()

    // Renvoie une page d'erreur avec un message d'erreur et un code d'erreur
    return <>
        <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__title">
                    <span className="dashboard__header__title--hello">Erreur </span>
                    <span className="dashboard__header__title--name">404</span>
                </div>
                <div className="dashboard__header__baseline">
                    Introuvable
                </div>
            </div>
        </div>
    </>
}

// Exportez PageError comme composant par défaut
export default PageError
