import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

function PostCard({ post }) {
  return (
    <div className="card mt-4">
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </div>
  );
}

export default PostCard;
