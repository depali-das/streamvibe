function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Featured</span>
        <h1>The Last Signal</h1>
        <p>
          A gripping story that everyone is talking about. When the city loses
          all connection, one signal can change everything. Watch the trailer
          now and dive into the world of StreamVibe.
        </p>
        <div className="hero-meta">
          <span>⭐ 8.4</span>
          <span>2025</span>
          <span>Trending</span>
        </div>
        <div className="hero-buttons">
          <button className="play-btn">▶ Play Now</button>
          <button className="info-btn">More Info</button>
        </div>
      </div>

      <div className="hero-video-box">
        <video controls src="/hero.mp4" className="hero-video"></video>
      </div>
    </section>
  );
}

export default Hero;