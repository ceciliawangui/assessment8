import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handlePostIdChange = event => {
    setPostId(event.target.value);
  };

  const handleFetchPost = event => {
    event.preventDefault();
    const selectedPost = posts.find(post => post.id === parseInt(postId));
    setSelectedPost(selectedPost);
    setPostId('');
  };

  return (
    <div>
      <h1>My Blog Posts</h1>
      <form onSubmit={handleFetchPost}>
        <label htmlFor="postId">Enter Post ID:</label>
        <input
          type="number"
          id="postId"
          value={postId}
          onChange={handlePostIdChange}
        />
        <button type="submit">Fetch Post</button>
      </form>
      {selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      ) : (
        <p>No post selected</p>
      )}
    </div>
  );
}

export default Posts;