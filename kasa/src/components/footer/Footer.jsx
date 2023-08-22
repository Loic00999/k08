import "./Footer.scss";
import logo from "../../assets/logo/img_logo_footer_01.svg";

export default function Header() {
  return (
    <div className="footer">
      <div>
        <img className="footer__logo" src={logo} alt="logo kasa" />
      </div>
      <div className="footer__div-text">
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
