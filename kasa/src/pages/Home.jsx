import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";
import bannerHome from "../assets/banner/img_banner_01.svg";

export default function Home() {
  return (
    <div className="gallery-container">
      <Banner banner={bannerHome} alt="Home banner" text="Chez vous, partout et ailleurs"/>
      <Gallery/>
    </div>
  );
}
