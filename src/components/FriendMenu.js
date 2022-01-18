function FriendMenu({ changeMode }) {
  return (
    <div className="d-flex align-items-center mb-4">
      <h4 className="mb-0">Friends</h4>
      <ul className="nav flex-grow-1 justify-content-end align-items-center">
        <li className="nav-item active">
          <button className="nav-link btn" onClick={() => changeMode('all')}>
            All Friends
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link btn"
            onClick={() => changeMode('request')}
          >
            Friend Requests
          </button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Find Friend
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FriendMenu;
