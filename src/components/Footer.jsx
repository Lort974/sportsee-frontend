import footerIconOne from "../assets/footer-nav-1.svg"
import footerIconTwo from "../assets/footer-nav-2.svg"
import footerIconThree from "../assets/footer-nav-3.svg"
import footerIconFour from "../assets/footer-nav-4.svg"

const Footer = () => {
    return <footer>
        <nav className="footer__nav">
            <ul className="footer__nav__menu">
                <li className="footer__nav__menu__elt">
                    <img src={footerIconOne} alt="Méditation" className="footer__nav__menu__elt__pic" />
                </li>
                <li className="footer__nav__menu__elt">
                    <img src={footerIconTwo} alt="Natation" className="footer__nav__menu__elt__pic" />
                </li>
                <li className="footer__nav__menu__elt">
                    <img src={footerIconThree} alt="Vélo" className="footer__nav__menu__elt__pic" />
                </li>
                <li className="footer__nav__menu__elt">
                    <img src={footerIconFour} alt="Musculation" className="footer__nav__menu__elt__pic" />
                </li>
            </ul>
        </nav>
        <div className="copyright">
            Copyright, SportSee 2020
        </div>
    </footer>
}

export default Footer