import { useRouteError, NavLink } from "react-router-dom/dist"

const PageError = () => {
    const error = useRouteError()

    return <>
        <div>
            <div className="pageError__title">
                404
            </div>
            <div>
                "Oups! La page que vous demandez n'existe pas."
            </div>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    </>
}

export default PageError