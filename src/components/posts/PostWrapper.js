import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import PostForm from './PostForm';
import PostList from './PostList';

function PostWrapper() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts');
      setPosts(res.data.posts);
    };
    fetchPost();
  }, []);

  const createPost = async (title, img) => {
    const data = new FormData();
    data.append('title', title);
    data.append('img', img);

    const res = await axios.post('/posts', data);
    console.log(res.data);
  };

  const deletePost = async id => {
    await axios.delete('/posts/' + id);

    const res = await axios.get('/posts');
    setPosts(res.data.posts);
  };

  return (
    <>
      <PostForm createPost={createPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </>
  );
}

export default PostWrapper;
