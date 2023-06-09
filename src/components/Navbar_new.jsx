const Navbar_new = () => {
  return (
    <nav className="p-2 navbar navbar-expand-sm navbar-light bg-light ml-auto">
      <a href="#" className="navbar-brand mb-0 h1">
        James Penton
      </a>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        className="navbar-toggler"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a href="#" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a href="#tours" className="nav-link active">
              Projects
            </a>
          </li>

          <li className="nav-item active">
            <a
              download="James Penton's CV"
              target="_blank"
              className="nav-link active"
              href="../src/assets/James Penton Web Dev CV Version 3.0.pdf"
            >
              Download my CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar_new;
