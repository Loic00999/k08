import "./BannerHome.scss";
import banner from "../../assets/banner/img_banner_01.svg";

export default function bannerHome() {
  return (
    <div className="banner">
      <div>
        <img className="banner__img" src={banner} alt="banner home" />
      </div>
      <div className="banner__div-text">
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}
