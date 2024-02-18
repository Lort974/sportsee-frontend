import { useRouteError } from "react-router-dom"

const PageError = () => {
    const error = useRouteError()

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

export default PageError