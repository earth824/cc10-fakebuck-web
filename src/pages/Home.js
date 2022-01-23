import logo from '../assets/images/facebook-icon.svg';

function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm py-0">
          <div className="container-fluid">
            <div className="ms-1 flex-grow-1 py-2">
              <a className="navbar-brand" href="/#">
                <img src={logo} alt="logo" />
              </a>

              <button
                className="navbar-toggler shadow-none border-0"
                type="button"
                data-bs-toggle="collapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse justify-content-center flex-grow-1">
              <div className="navbar-nav fsr-15">
                <a className="nav-link active px-4 mx-1" href="/#">
                  <i className="fas fa-home"></i>
                </a>
                <a className="nav-link px-4 mx-1" href="/#">
                  <i className="fas fa-user-friends"></i>
                </a>
              </div>
            </div>

            <div className="d-flex justify-content-end align-items-center flex-grow-1 me-1">
              <a
                href="/#"
                className="profile-icon rounded-pill p-1 d-flex align-items-center text-decoration-none"
              >
                <img
                  className="rounded-circle"
                  src="https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg"
                  width="28"
                  height="28"
                  alt="user"
                />
                <span className="ms-2 text-dark fw-bold me-1">Han</span>
              </a>
              <div className="menu-icon dropdown ms-2">
                <button
                  className="btn rounded-circle shadow-none"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-caret-down"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end px-2 border-0 mt-1">
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
                        <span className="fsr-125 fw-bold">Han So Yoon</span>
                        <span className="text-muted">See your profile</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider mx-2 border-1" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item d-flex align-items-center p-2"
                      type="button"
                    >
                      <i className="fas fa-sign-out-alt me-3 fs-5 rounded-circle p-2" />
                      <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container my-4 maxw-600">
        <section className="card rounded-5 shadow-sm">
          <div className="card-body d-flex">
            <a href="/#">
              <img
                className="rounded-circle"
                src="https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg"
                width="40"
                height="40"
                alt="user"
              />
            </a>
            <button className="new-post-open ms-2 btn shadow-none rounded-pill flex-grow-1 text-start text-muted">
              What's on your mind, Han?
            </button>
          </div>
        </section>

        <section>
          <div className="card rounded-5 shadow-sm">
            <div className="d-flex p-3">
              <div className="d-flex align-items-center flex-grow-1">
                <a href="/#">
                  <img
                    className="rounded-circle"
                    src="https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg"
                    width="40"
                    height="40"
                    alt="user"
                  />
                </a>
                <div className="d-flex flex-column ms-2">
                  <a
                    href="/#"
                    className="post-user text-decoration-none text-dark"
                  >
                    Han So Yoon
                  </a>
                  <a
                    href="/#"
                    className="post-time text-decoration-none fsr-075 text-muted"
                  >
                    2h
                  </a>
                </div>
              </div>
              <div className="dropdown d-flex align-items-center">
                <button
                  className="post-action btn rounded-circle shadow-none squarer-25"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-ellipsis-h fsr-0875 text-muted" />
                </button>
              </div>
            </div>

            <p className="px-3">
              Welcome to Thailand. Tom Tom where you go last night. I love Muang
              Thai. I like ...
            </p>

            <img
              src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg"
              className="img-fluid"
              alt="post-img"
            />

            <div className="px-3 pb-1">
              <div className="post-response d-flex align-items-center pt-2">
                <div className="flex-grow-1 d-flex align-items-center">
                  <img
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                    alt="like"
                    height="18"
                  />
                  <button className="btn text-muted p-0 ms-2 shadow-none">
                    48
                  </button>
                </div>
                <button className="btn text-muted p-0 shadow-none">
                  8 Comments
                </button>
              </div>
              <hr className="mt-2 mb-1" />
              <div className="post-response-action d-flex">
                <button className="btn text-muted me-1 py-1 shadow-none flex-basis-50">
                  <i className="far fa-thumbs-up" />
                  <span className="ms-2">Like</span>
                </button>
                <button className="btn text-muted ms-1 py-1 shadow-none flex-basis-50">
                  <i className="far fa-comment-alt" />
                  <span className="ms-2">Comment</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
