import { useContext } from 'react';
import defaultImg from '../../assets/images/profileImg.png';
import { AuthContext } from '../../contexts/AuthContext';
import timeSince from '../../services/facebookTimeFormat';

function PostHeader({
  post: {
    User: { profileImg, firstName, lastName, id: userId },
    createdAt,
    id
  },
  deletePost
}) {
  const { user } = useContext(AuthContext);
  return (
    <div className="d-flex justify-content-between py-2 px-3">
      <div className="d-flex flex-row align-items-center">
        <img
          src={profileImg ?? defaultImg}
          width="50"
          className="rounded-circle"
          alt="user"
          role="button"
        />
        <div className="d-flex flex-column ms-2">
          <span className="fw-bold text-facebook" role="button">
            {firstName} {lastName}
          </span>
          <small className="text-muted fs-7">{timeSince(createdAt)}</small>
        </div>
      </div>
      {user.id === userId && (
        <div className="mt-1 text-muted">
          <div className="dropdown">
            <button className="btn text-muted" data-bs-toggle="dropdown">
              <i className="fa fa-ellipsis-h"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Edit</button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => deletePost(id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostHeader;
