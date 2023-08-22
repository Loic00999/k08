import BannerHome from "../components/banners/BannerHome";
import Gallery from "../components/gallery/Gallery";

export default function Home() {
  return (
    <div className="gallery-container">
      <BannerHome/>
      <Gallery/>
    </div>
  );
}
