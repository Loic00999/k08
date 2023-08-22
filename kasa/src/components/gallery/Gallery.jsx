import "./Gallery.scss";
import Thumbnail from "../../components/thumbnail/Thumbnail";

export default function gallery() {
  return (
    <div className="gallery">
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
    </div>
  );
}
