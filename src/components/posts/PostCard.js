import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

function PostCard({ post, deletePost }) {
  return (
    <div className="card mt-4">
      <PostHeader post={post} deletePost={deletePost} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </div>
  );
}

export default PostCard;
