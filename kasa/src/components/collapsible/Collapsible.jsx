import {useState} from "react";
import collapseVector from "../../assets/img_collapse_vector_01.svg";

export default function Collapsible({ id, title, content, className}) {

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div key={id} className={className}>
      <div className="collapsible__title">
        <h3 className="collapsible__title--paragraph">{title}</h3>
        <div className="collapsible__vector" onClick={handleClick}>
          <img
            className={`${
              !isActive
                ? "collapsible__vector--close"
                : "collapsible__vector--open"
            }`}
            src={collapseVector}
            alt="collapse vector close"
          />
        </div>
      </div>
      <div className="collapsible__content">
        {isActive && (
          !Array.isArray(content) ? (<p className="collapsible__content--paragraph">{content}</p>) : (content.map((element, index)=>(<li key={index}>{element}</li>)))
        )}
      </div>
    </div>
  );
}
