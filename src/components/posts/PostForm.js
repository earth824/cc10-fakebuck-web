import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import defaultProfile from '../../assets/images/profileImg.png';
import Spinner from '../utils/Spinner';
import { Modal } from 'bootstrap';

function PostForm({ createPost }) {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const modalEl = useRef();

  const handleClickInput = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    setLoading(true);
    await createPost(title, img);
    setTitle('');
    setImg('');
    modal.hide();
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="card mb-3 p-3">
        <div className="position-relative d-flex align-items-center">
          <img
            src={user.profileImg ?? defaultProfile}
            width="50"
            height="50"
            className="rounded-circle me-2"
            alt="user"
          />
          <input
            type="text"
            className="form-control rounded-pill d-inline"
            placeholder="What's on your mind?"
            onClick={handleClickInput}
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

      <div className="modal" ref={modalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setTitle('');
                  setImg('');
                }}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitForm}>
                <div className="mb-5">
                  <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  {img && (
                    <img
                      src={URL.createObjectURL(img)}
                      className="img-fluid"
                      alt="post-img"
                    />
                  )}
                  <div className="input-group mt-3">
                    <input
                      type="file"
                      className="form-control"
                      onChange={e => {
                        if (e.target.files[0]) {
                          setImg(e.target.files[0]);
                        }
                      }}
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={() => setImg('')}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostForm;
