import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <>
      {posts.map(item => (
        <PostCard key={item.id} post={item} />
      ))}
    </>
  );
}

export default PostList;
