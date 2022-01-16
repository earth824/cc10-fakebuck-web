function Friend() {
  return (
    <div className="container my-5">
      <div className="card p-3">
        <div className="d-flex align-items-center mb-4">
          <h4 className="mb-0">Friends</h4>
          <ul className="nav flex-grow-1 justify-content-end align-items-center">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                All Friends
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Friend Requests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Find Friend
              </a>
            </li>
          </ul>
        </div>

        <input
          className="form-control rounded-pill"
          type="search"
          placeholder="Search"
        />

        <div className="row g-3 mt-3">
          <div className="col-lg-6">
            <div className="card p-3 align-items-center justify-content-between flex-row">
              <div className="d-flex align-items-center">
                <img
                  src="https://images.pexels.com/photos/751235/pexels-photo-751235.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  width="80"
                  height="80"
                  className="rounded-3"
                  alt="user"
                />
                <div className="d-flex flex-column ms-3">
                  <span className="fw-bold">Elizabeth Taylor</span>
                  <span className="fs-7 text-muted">44 mutual friends</span>
                </div>
              </div>
              <a href="/">
                <i className="fas fa-user-minus fs-6" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-3 align-items-center justify-content-between flex-row">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.imgur.com/9AZ2QX1.jpg"
                  width="80"
                  height="80"
                  className="rounded-3"
                  alt="user"
                />
                <div className="d-flex flex-column ms-3">
                  <span className="fw-bold">Sarah Jane</span>
                  <span className="fs-7 text-muted">86 mutual friends</span>
                </div>
              </div>
              <a href="/">
                <i className="fas fa-user-minus fs-6" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-3 align-items-center justify-content-between flex-row">
              <div className="d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=905&q=80"
                  width="80"
                  height="80"
                  className="rounded-3"
                  alt="user"
                />
                <div className="d-flex flex-column ms-3">
                  <span className="fw-bold">Monica Celesky</span>
                  <span className="fs-7 text-muted">100 mutual friends</span>
                </div>
              </div>
              <a href="/">
                <i className="fas fa-user-minus fs-6" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-3 align-items-center justify-content-between flex-row">
              <div className="d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1557053815-9f79f70c7980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80"
                  width="80"
                  height="80"
                  className="rounded-3"
                  alt="user"
                />
                <div className="d-flex flex-column ms-3">
                  <span className="fw-bold">John Tokas</span>
                  <span className="fs-7 text-muted">2 mutual friends</span>
                </div>
              </div>
              <a href="/">
                <i className="fas fa-user-plus fs-6" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-3 align-items-center justify-content-between flex-row">
              <div className="d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1455103433115-33cd90e2a3d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  width="80"
                  height="80"
                  className="rounded-3"
                  alt="user"
                />
                <div className="d-flex flex-column ms-3">
                  <span className="fw-bold">Chris Stoyanovski</span>
                  <span className="fs-7 text-muted">18 mutual friends</span>
                </div>
              </div>
              <div>
                <a href="/" className="me-3 text-success">
                  <i className="fas fa-user-check fs-6" />
                </a>
                <a href="/" className="text-danger">
                  <i className="fas fa-user-times fs-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
