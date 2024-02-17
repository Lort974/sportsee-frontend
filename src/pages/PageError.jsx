const PageError = () => {
    return <>
        <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__title">
                    <span className="dashboard__header__title--hello">Chargement...</span>
                </div>
                <div className="dashboard__header__baseline">
                    Si rien ne se passe, le service est peut-être indisponible. Réessayez plus tard.
                </div>
            </div>
        </div>
    </>
}

export default PageError