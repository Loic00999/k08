import { useParams } from "react-router-dom";
import "./Housing.scss";
import "../components/collapsible/Collapsible.scss";
import Carousel from "../components/carousel/Carousel";
import Infos from "../components/infos/Infos";
import Host from "../components/host/Host";
import Tags from "../components/tags/Tags";
import Rating from "../components/rating/Rating";
import Collapsible from "../components/collapsible/Collapsible";
import houses from "../data/logements.json";

export default function Housing() {
  const { id } = useParams();
  const house = houses.find((content) => content.id === id);

  return (
    <div className="housing-container">
      <Carousel pictures={house.pictures} title={house.title} />
      <div className="housing-profile">
        <Infos key={house.id} title={house.title} location={house.location} />
        <Host name={house.host.name} picture={house.host.picture} />
      </div>
      <div className="label">
        <Tags tags={house.tags} />
        <Rating ratingHouse={house.rating} />
      </div>
      <div className="collapsible__container--housing">
        <Collapsible title={"Description"} className={"collapsible--housing"} content={house.description}/>
        <Collapsible title={"Équipements"} className={"collapsible--housing"} content={house.equipments}/>
      </div>
    </div>
  );
}
