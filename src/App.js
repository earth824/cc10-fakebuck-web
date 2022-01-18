import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Friend from './pages/Friend';
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Toast } from 'bootstrap';

function App() {
  const { user, error } = useContext(AuthContext);

  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
    }
  }, [error]);

  return (
    <>
      {/* <div className="d-flex justify-content-center align-items-center offcanvas-backdrop show">
        <div
          className="spinner-border text-warning"
          style={{ width: '4rem', height: '4rem' }}
        ></div>
        <span className="text-warning ms-3">Please Wait </span>
      </div> */}

      <div className="position-relative">
        <div className="toast-container position-absolute p-3 top-0 start-50 translate-middle-x">
          <div
            className="toast align-items-center text-white bg-danger border-0"
            role="alert"
            ref={toastEl}
          >
            <div className="d-flex">
              <div className="toast-body">{error}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        {!user ? (
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/friend" element={<Friend />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
