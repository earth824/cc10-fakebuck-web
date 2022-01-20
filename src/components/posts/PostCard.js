import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

function PostCard() {
  return (
    <div className="card mt-4">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
}

export default PostCard;
