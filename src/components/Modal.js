import { useEffect, useRef } from 'react';

function Modal({ isShow }) {
  const el = useRef();

  useEffect(() => {});

  return (
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
                // ref={inputEl}
                // onChange={e => setNewProfileImg(e.target.files[0])}
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
  );
}

export default Modal;
