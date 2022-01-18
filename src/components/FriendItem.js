import defaultImg from '../assets/images/blank.png';

function FriendItem({
  friend: { img = defaultImg, firstName = 'Test', lastName = 'Test' },
  mode
}) {
  return (
    <div className="col-lg-6">
      <div className="card p-3 align-items-center justify-content-between flex-row">
        <div className="d-flex align-items-center">
          <img
            src={img}
            width="80"
            height="80"
            className="rounded-3"
            alt="user"
          />
          <div className="d-flex flex-column ms-3">
            <span className="fw-bold">
              {firstName} {lastName}
            </span>
            <span className="fs-7 text-muted">44 mutual friends</span>
          </div>
        </div>
        <div>
          {mode === 'request' && (
            <>
              <a href="/" className="text-success">
                <i className="fas fa-user-check fs-6" />
              </a>
              <a href="/" className="ms-3 text-danger">
                <i className="fas fa-user-times fs-6" />
              </a>
            </>
          )}
          {mode === 'find' && (
            <a href="/" className="ms-3">
              <i className="fas fa-user-plus fs-6" />
            </a>
          )}
          {mode === 'all' && (
            <a href="/" className="ms-3">
              <i className="fas fa-user-minus fs-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendItem;
