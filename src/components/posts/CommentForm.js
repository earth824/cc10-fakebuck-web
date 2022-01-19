import { useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';

function CommentForm({ createComment }) {
  const [title, setTitle] = useState('');
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmitForm = e => {
    e.preventDefault();
    createComment(title);
  };

  return (
    <form onSubmit={handleSubmitForm}>
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
          ref={inputEl}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
    </form>
  );
}

export default CommentForm;
