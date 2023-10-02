import "./NotFound.scss";
import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <div className="main-container">
      <p className="main-container__title">404</p>
      <p className="main-container__text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"}>
        <p className="main-container__back-to-home">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
}
