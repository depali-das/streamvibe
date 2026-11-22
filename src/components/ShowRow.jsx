import ShowCard from "./ShowCard";

function ShowRow({ title, shows }) {
  return (
    <div className="row-section">
      <h2>{title}</h2>
      <div className="show-row">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}

export default ShowRow;