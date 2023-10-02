import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/img_logo_desktop_01.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img className="header-container__logo--img" src={logo} alt="logo kasa"/>
      </div>
      <div className="navbar">
        <div>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "" : isActive ? "active" : ""}>
            <p className="navbar__link" id="welcome">Accueil</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/About" className={({ isActive, isPending }) => isPending ? "" : isActive ? "active" : ""}>
            <p className="navbar__link" id="about">À Propos</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
