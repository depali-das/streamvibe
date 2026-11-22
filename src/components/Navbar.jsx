function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        STREAM<span>VIBE</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">My List</a></li>
      </ul>

      <div className="nav-actions">
        <button className="search-btn">⌕</button>
        <button className="profile-btn">D</button>
      </div>
    </nav>
  );
}

export default Navbar;