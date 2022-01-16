import styles from './Login.module.css';

function Register() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-7">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            className="w-50"
            alt="fakebook-logo"
          />
          <h3 className={styles.h3}>
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>
        <div className="col-md-5">
          <form className={styles['login-form']}>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${styles.input}`}
                placeholder="Email address or phone number"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className={`form-control ${styles.input}`}
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              className={`btn ${styles['btn-custom']} btn-lg btn-block mt-3`}
            >
              Register
            </button>
            <div className="text-center pt-3 pb-3">
              <button type="button" className="btn btn-success btn-lg mt-3">
                Already have an account?
              </button>
            </div>
          </form>
          <p className="pt-3 text-center">
            <b>Create a Page</b> for a celebrity, band or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
