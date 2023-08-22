import "./Header.scss";
import logo from "../../assets/logo/img_logo_desktop_01.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img className="header-container__logo--img" src={logo} alt="logo kasa"/>
      </div>
      <div className="navbar">
        <p className="navbar__link" id="welcome">Accueil</p>
        <p className="navbar__link" id="about">À Propos</p>
      </div>
    </div>
  );
}
