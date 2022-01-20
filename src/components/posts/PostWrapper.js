import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import PostForm from './PostForm';
import PostList from './PostList';

function PostWrapper() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('/posts');
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <PostForm />
      <PostList posts={posts} />
    </>
  );
}

export default PostWrapper;
