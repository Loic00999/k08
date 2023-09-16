import "./Gallery.scss";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import houses from "../../data/logements.json";

export default function gallery() {
  return (
    <div className="gallery">
      {houses.map((house) => (
        <Thumbnail key={house.id} id={house.id} title={house.title} cover={house.cover} tags={house.tags}/>
      ))}
    </div>
  );
}
