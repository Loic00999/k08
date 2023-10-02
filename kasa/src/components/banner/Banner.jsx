import "./Banner.scss";

export default function Banner({banner, alt, text}) {
  return (
    <div className="banner">
      <div className="banner__container">
        <img className="banner__container__img" src={banner} alt={alt}/>
      </div>
      <div className="banner__div-text">
        <p className="banner__text">{text}</p>
      </div>
    </div>
  );
}
