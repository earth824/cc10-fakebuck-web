import PostAction from './PostAction';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useState } from 'react';
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
    try {
      const res = await axios.post('/comments', { title, postId: id });
      console.log(res.data);
      setComments(prev => [...prev, res.data.comment]);
      setShowComment(true);
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-2">
      <PostAction
        numComment={comments.length}
        toggleShowComment={toggleShowComment}
        toggleShowForm={toggleShowForm}
      />
      {showComment && <CommentList comments={comments} />}
      {showForm && <CommentForm createComment={createComment} />}
    </div>
  );
}

export default PostFooter;
