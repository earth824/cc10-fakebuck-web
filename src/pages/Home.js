import logo from '../assets/images/facebook-icon.svg';

function Home() {
  return (
    <nav className="header navbar navbar-expand-sm navbar-dark bg-facebook-dark py-0">
      <div className="container-fluid align-items-center">
        <div className="ms-1 py-2 flex-grow-1">
          <a className="navbar-brand" href="/#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler shadow-none ms-3 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-center flex-grow-1"
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

        <div className="header-item dropdown d-flex justify-content-end flex-grow-1 me-1">
          <button
            className="header-item-btn btn rounded-circle shadow-none"
            data-bs-toggle="dropdown"
          >
            <i className="fas fa-caret-down"></i>
          </button>
          <ul className="header-item-menu dropdown-menu dropdown-menu-end dropdown-menu-dark bg-facebook-dark px-2">
            <li>
              <a
                className="dropdown-item p-2 d-flex align-items-center"
                href="/#"
              >
                <img
                  className="rounded-circle me-3"
                  src="https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg"
                  width="60"
                  height="60"
                  alt="user"
                />
                <div className="d-flex flex-column">
                  <span className="fsr-125 fw-bold">Song Hye Kyo</span>
                  <span className="text-muted">See your profile</span>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider mx-2 border-2" />
            </li>
            <li>
              <button
                className="dropdown-item d-flex align-items-center p-2"
                type="button"
              >
                <i className="fas fa-sign-out-alt me-3 fs-5 rounded-circle bg-facebook-dark-1 p-2" />
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Home;
