import { Modal } from 'bootstrap';
import { useRef } from 'react';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top bg-white text-facebook">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <i className="fab fa-facebook fs-1"></i>
          </a>
          <div className="navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <a href="/" className="nav-link">
                  <i className="fas fa-home fs-2"></i>
                </a>
              </li>
              <li className="nav-item mx-5">
                <a href="/" className="nav-link">
                  <i className="fas fa-user-friends fs-2"></i>
                </a>
              </li>
              <li className="nav-item mx-5">
                <div className="nav-link" role="button">
                  <i className="fas fa-sign-out-alt fs-2"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="navbar-brand" role="button">
            <img
              src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              width="40"
              className="rounded-circle"
              alt="user"
            />
          </div>
        </div>
      </nav>

      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile Picture</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mt-4 mb-5 d-flex justify-content-center">
                <input type="file" className="d-none" />
                <img
                  src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  width="200"
                  className="rounded-circle"
                  alt="user"
                  role="button"
                />
              </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
