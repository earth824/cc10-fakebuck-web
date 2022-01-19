import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import PostAction from './PostAction';
import axios from '../../config/axios';

function PostFooter({ post: { Comments, id } }) {
  const [comments, setComments] = useState(Comments);
  const [showComment, setShowComment] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleShowComment = () => {
    setShowComment(prev => !prev);
  };

  const toggleShowForm = () => {
    setShowForm(prev => !prev);
  };

  const createComment = async title => {
    const res = await axios.post('/comments', { title, postId: id });
    console.log(res.data.comment);
    // setComments(prev => [...prev, res.data.comment]);
  };

  return (
    <div className="p-2">
      <PostAction
        comments={comments}
        toggleShowComment={toggleShowComment}
        toggleShowForm={toggleShowForm}
      />
      {showComment && <CommentList comments={comments} />}
      {showForm && <CommentForm createComment={createComment} />}
    </div>
  );
}

export default PostFooter;
