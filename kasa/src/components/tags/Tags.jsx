import "./Tags.scss";

export default function Tags({tags}) {
  return (
    <div className="label__tags">
      {tags.map((tag, index) => {
        return <div key={index} className="label__tags--content">{tag}</div>;
      })}
    </div>
  );
}
