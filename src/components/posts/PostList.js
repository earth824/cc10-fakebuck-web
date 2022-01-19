import PostCard from './PostCard';

function PostList({ posts, deletePost }) {
  return (
    <>
      {posts.map(item => (
        <PostCard key={item.id} post={item} deletePost={deletePost} />
      ))}
    </>
  );
}

export default PostList;
