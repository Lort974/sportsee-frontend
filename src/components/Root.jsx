// Importez les composants et les hooks nécessaires
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

// Ce composant sert de racine pour votre application
const Root = () => {
    // Il rend le Header, le Footer et tout composant enfant qui serait rendu à l'intérieur de l'Outlet
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

// Exportez Root comme composant par défaut
export default Root
