import "./Thumbnail.scss";
import { Link } from "react-router-dom";

export default function Thumbnail({id, title, cover, tags}) {
  return (
    <Link to={`/Housing/${id}`}>
      <div className="thumb">
        <img className="thumb__img" src={cover} alt={tags} />
        <p className="thumb__text">{title}</p>
      </div>
    </Link>
  );
}
