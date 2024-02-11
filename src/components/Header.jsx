import logo from "../assets/logo.svg"

const Header = () => {
    return <>
        <header>
            <div className="logo">
                <img src={logo} alt="Logo SportSee" className="logo__pic" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav__menu">
                    <li className="header__nav__menu__elt">
                        Accueil
                    </li>
                    <li className="header__nav__menu__elt">
                        Profil
                    </li>
                    <li className="header__nav__menu__elt">
                        Réglage
                    </li>
                    <li className="header__nav__menu__elt">
                        Communauté
                    </li>
                </ul>
            </nav>
        </header>
    </>
}

export default Header