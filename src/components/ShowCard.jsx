function ShowCard({ show }) {
  return (
    <div className="show-card">
      <img src={show.poster} alt={show.title} />
      <h3>{show.title}</h3>
      <p>{show.year} • ⭐ {show.rating}</p>
      <span>{show.genre}</span>
    </div>
  );
}

export default ShowCard;