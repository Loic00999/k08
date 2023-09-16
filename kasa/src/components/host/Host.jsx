import "./Host.scss";

export default function Host({name, picture}) {
  return (
    <div className="housing-profile__host">
      <div className="housing-profile__host--name">
        <h3>{name}</h3>
      </div>
      <div className="housing-profile__host--picture">
        <img src={picture} alt={name}/>
      </div>
    </div>
  );
}
