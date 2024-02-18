// Importez les hooks et les composants nécessaires
import { createBrowserRouter, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Root from "../components/Root"
import PageError from "../pages/PageError"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"

// Ce composant redirige vers la page d'accueil avec l'ID utilisateur approprié dans l'URL
const RedirectToHome = () => {
    // Utilisez les hooks useNavigate et useLocation pour accéder à la navigation et à l'emplacement
    const navigate = useNavigate()
    const location = useLocation()
    // Initialisez l'état pour l'ID de l'utilisateur
    const [userId, setUserId] = useState(null)

    // Utilisez useEffect pour mettre à jour l'ID de l'utilisateur et naviguer vers la nouvelle URL lorsque le composant est monté
    useEffect(() => {
        const id = location.pathname === "/" ? 12 : isNaN(parseInt(location.pathname.split("/")[1])) ? 0 : parseInt(location.pathname.split("/")[1])
        setUserId(id)
        navigate(`/${id}`)
    }, [])

    // Si l'ID de l'utilisateur est null, affichez un message de chargement
    if (userId === null) {
        return <div>Loading...</div>
    }

    // Sinon, affichez le composant Home avec l'ID de l'utilisateur approprié
    return <><Header /><Home userId={userId} /><Footer /></>
}

// Créez le routeur avec les chemins appropriés et les éléments de route
const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectToHome />,
        errorElement: <><Header /><PageError /><Footer /></>,
        children: [
            {
                path: ":id",
                element: <RedirectToHome />,
                errorElement: <><Header /><PageError /><Footer /></>
            }
        ]
    }
])

// Exportez le routeur comme export par défaut
export default router
