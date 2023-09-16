import {useState} from "react";
import "./Carousel.scss";
import arrowLeft from "../../assets/img_arrow_left_01.svg";
import arrowRight from "../../assets/img_arrow_right_01.svg";

export default function Carousel({pictures, title}) {
 
  const [index, setIndex] = useState(0);
  const sliderLength = pictures.length;
  const slide = pictures[index];

  function handleNextClick() {
    setIndex(index === sliderLength - 1 ? 0 : index + 1);
  }
  function handlePreviousClick() {
    setIndex(index === 0 ? sliderLength - 1 : index - 1);
  }

  return (
    <div id="carousel" className="carousel">
     <img key={slide} className="carousel__cover" src={slide} alt={title}/>
     <div className="carousel__arrows">
        {sliderLength > 1 && (
          <div id="arrow-left" className="carousel__arrows--arrow" onClick={handlePreviousClick}>
            <img src={arrowLeft} alt="Previous pic"/>
          </div>
        )}
        {sliderLength > 1 && (
          <div id="arrow-right" className="carousel__arrows--arrow" onClick={handleNextClick}>
            <img src={arrowRight} alt="Next pic"/>
          </div>
        )}
      </div>
      <div className="carousel__slide--numbers">
        {sliderLength > 1 && (
          <p id="paging">({index + 1}/{sliderLength})</p>
        )}
      </div>
    </div>
  );
}
