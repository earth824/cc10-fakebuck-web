import { Modal } from 'bootstrap';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import defaultProfile from '../assets/images/blank.png';
import axios from '../config/axios';
import Spinner from './Spinner';

function Header() {
  const [profileImg, setProfileImg] = useState(defaultProfile);
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const { logout } = useContext(AuthContext);

  const el = useRef();
  const inputEl = useRef();

  const handleClickProfile = () => {
    const modal = new Modal(el.current);
    setModal(modal);
    modal.show();
  };

  const handleClickUpdate = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('profileImg', newProfileImg);

    axios.patch('/users/profile-img', formData).then(res => {
      setNewProfileImg(null);
      setProfileImg(res.data.profileImg);
      modal.hide();
      setLoading(false);
    });
  };

  return (
    <>
      {loading && <Spinner />}
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
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => logout()}
                >
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
                onClick={() => setNewProfileImg(null)}
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClickUpdate}
                  disabled={!newProfileImg}
                >
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
