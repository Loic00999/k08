import "./Infos.scss";

export default function infos({title, location}) {
  return (
    <div className="housing-profile__infos">
      <div className="housing-profile__infos--title">
        <h1>{title}</h1>
      </div>
      <div className="housing-profile__infos--location">
        <h2>{location}</h2>
      </div>
    </div>
  );
}
