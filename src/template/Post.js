import { Modal } from 'bootstrap';
import { useRef, useState } from 'react';

function Post() {
  const [img, setImg] = useState('');
  const el = useRef();

  const handleClickCreatePost = () => {
    const modal = new Modal(el.current);
    modal.toggle();
  };

  const handleClickUpload = e => {
    setImg(e.target.files[0]);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="card mb-3">
              <div className="p-3">
                <div className="position-relative d-flex align-items-center">
                  <img
                    src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    width="50"
                    height="50"
                    className="rounded-circle me-2"
                    alt="user"
                  />
                  <input
                    type="text"
                    className="form-control rounded-pill d-inline"
                    placeholder="What's on your mind?"
                    onClick={handleClickCreatePost}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      top: '50%',
                      right: 13,
                      transform: 'translateY(-50%)'
                    }}
                  >
                    <i className="fa fa-camera text-muted"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="d-flex justify-content-between py-2 px-3">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/pBcut2e.jpeg"
                    width="50"
                    className="rounded-circle"
                    alt="user"
                    role="button"
                  />
                  <div className="d-flex flex-column ms-2">
                    <span className="fw-bold text-facebook" role="button">
                      John Doe
                    </span>
                    <small className="text-muted fs-7">Today at 11.33</small>
                  </div>
                </div>
                <div className="mt-1 text-muted">
                  <div className="dropdown">
                    <button
                      className="btn text-muted"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-h"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-justify px-3 py-1">
                Our key visual. Does not really convey the look of the game, but
                rather the atmosphere.
              </p>
              <img
                src="https://i.imgur.com/4qPVarB.png"
                className="img-fluid"
                alt="user"
              />
              <div className="p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img
                      height="19"
                      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                      alt="user"
                    />
                    <small className="ms-2 text-muted">You and 90 others</small>
                  </div>
                  <div className="text-muted">
                    <small>2 comments</small>
                  </div>
                </div>
                <hr className="m-2" />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-center flex-grow-1 text-facebook">
                    <i className="far fa-thumbs-up" />
                    <small className="ms-2 fs-6">Like</small>
                  </div>
                  <div className="text-center flex-grow-1">
                    <i className="far fa-comment-alt" />
                    <small className="ms-2 fs-6 text-muted">Comment</small>
                  </div>
                </div>
                <hr className="m-2" />
                <div>
                  <div className="d-flex flex-row mb-3">
                    <img
                      src="https://i.imgur.com/9AZ2QX1.jpg"
                      width="30"
                      height="30"
                      className="rounded-circle"
                      alt="user"
                    />
                    <div className="d-flex flex-column ms-2">
                      <div>
                        <span className="fw-bold text-facebook">
                          Sarah Jane
                        </span>
                        <span className="ms-2 text-muted fw-bolder">
                          &bull;
                        </span>
                        <span className="ms-2 text-muted fs-7">
                          4 hours ago
                        </span>
                      </div>
                      <span>I like this alot! thanks alot</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row mb-3">
                    <img
                      src="https://images.pexels.com/photos/751235/pexels-photo-751235.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      width="30"
                      height="30"
                      className="rounded-circle"
                      alt="user"
                    />
                    <div className="d-flex flex-column ms-2">
                      <div>
                        <span className="fw-bold text-facebook">
                          Elizabeth Taylor
                        </span>
                        <span className="ms-2 text-muted fw-bolder">
                          &bull;
                        </span>
                        <span className="ms-2 text-muted fs-7">3 days ago</span>
                      </div>
                      <span>Thanks for sharing!</span>
                    </div>
                  </div>
                  <div className="position-relative d-flex align-items-center">
                    <img
                      src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      width="30"
                      height="30"
                      className="rounded-circle me-2"
                      alt="user"
                    />
                    <input
                      type="text"
                      className="form-control rounded-pill d-inline"
                      placeholder="Write something ..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" ref={el}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-5">
                <textarea
                  className="form-control mb-3"
                  rows="3"
                  placeholder="What's on your mind?"
                />
                {img && (
                  <img
                    // src="https://i.imgur.com/4qPVarB.png"
                    src={URL.createObjectURL(img)}
                    className="img-fluid"
                    alt="user"
                  />
                )}
                <div className="input-group mt-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleClickUpload}
                  />
                  <button className="btn btn-outline-danger" type="button">
                    Remove
                  </button>
                </div>
              </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
