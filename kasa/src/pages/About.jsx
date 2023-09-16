import Banner from "../components/banner/Banner";
import "../components/collapsible/Collapsible.scss";
import Collapsible from "../components/collapsible/Collapsible";
import dataAbout from "../data/about.json";
import bannerAbout from "../assets/banner/img_banner_02.svg";

export default function about() {
  return (
    <div className="gallery-container">
      <Banner banner={bannerAbout} alt="About banner" text="" />
      <div className="collapsible__container--about">
        {dataAbout.map((content) => (
          <Collapsible
            key={content.id}
            title={content.title}
            content={content.content}
            className={"collapsible--about"}
          />
        ))}
      </div>
    </div>
  );
}
