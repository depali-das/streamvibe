import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowRow from "./components/ShowRow";
import { shows } from "./data/shows";
import "./App.css";

function App() {
  const trendingShows = shows.filter((s) => s.genre === "Trending");
  const comedyShows = shows.filter((s) => s.genre === "Comedy");
  const dramaShows = shows.filter((s) => s.genre === "Drama");

  return (
    <div>
      <Navbar />
      <Hero />
      <ShowRow title="Trending Now" shows={trendingShows} />
      <ShowRow title="Comedy" shows={comedyShows} />
      <ShowRow title="Drama" shows={dramaShows} />
    </div>
  );
}

export default App;