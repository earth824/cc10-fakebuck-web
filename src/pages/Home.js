import logo from '../assets/images/facebook-icon.svg';

function Home() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-facebook-dark py-0">
      <div className="container-fluid align-items-center">
        <a className="navbar-brand ms-1 py-2 flex-grow-1" href="/#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fsr-15">
            <a className="nav-link active px-4" href="/#">
              <i className="fas fa-home"></i>
            </a>
            <a className="nav-link px-4" href="/#">
              <i className="fas fa-user-friends"></i>
            </a>
          </div>
        </div>
        <div className="d-sm-flex d-none justify-content-end flex-grow-1 me-1">
          <button
            className="header-dropdown-item btn rounded-circle shadow-none"
            type="button"
          >
            <i className="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Home;
