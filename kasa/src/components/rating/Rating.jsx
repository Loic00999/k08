import starActive from "../../assets/star_active.svg";
import starInactive from "../../assets/star_inactive.svg";

export default function Rating({ ratingHouse }) {
  
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="label__rating">
      {range.map((star, index) =>
        ratingHouse >= star ? (
          <img key={index} src={starActive} alt="rating" />
        ) : (
          <img key={index} src={starInactive} alt="rating" />
        )
      )}
    </div>
  );
}
