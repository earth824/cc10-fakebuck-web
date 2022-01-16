import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [profileImg, setProfileImg] = useState(
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  );

  const [newProfileImg, setNewProfileImg] = useState(null);

  const el = useRef();
  const inputEl = useRef();

  const handleClickProfile = () => {
    const modal = new Modal(el.current);
    modal.toggle();
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top bg-white text-facebook">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="fab fa-facebook fs-1"></i>
          </Link>
          <div className="navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home fs-2"></i>
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/friend" className="nav-link">
                  <i className="fas fa-user-friends fs-2"></i>
                </Link>
              </li>
              <li className="nav-item mx-5">
                <div className="nav-link" role="button">
                  <i className="fas fa-sign-out-alt fs-2"></i>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="navbar-brand"
            role="button"
            onClick={handleClickProfile}
          >
            <img
              src={profileImg}
              width="40"
              className="rounded-circle"
              alt="user"
            />
          </div>
        </div>
      </nav>

      <div className="modal" ref={el}>
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
                <input
                  type="file"
                  className="d-none"
                  ref={inputEl}
                  onChange={e => setNewProfileImg(e.target.files[0])}
                />
                <img
                  src={
                    newProfileImg
                      ? URL.createObjectURL(newProfileImg)
                      : profileImg
                  }
                  width="200"
                  height="200"
                  className="rounded-circle"
                  alt="user"
                  role="button"
                  onClick={() => inputEl.current.click()}
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
