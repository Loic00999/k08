import "./Thumbnail.scss";
import thumbnailDefault from "../../assets/thumbnail_default_01.svg";

export default function Thumbnail() {
  return (
    <div className="thumb">
      <img className="thumb__img" src={thumbnailDefault} alt="thumbnail" />
      <p className="thumb__text">Titre de la location</p>
    </div>
  );
}
