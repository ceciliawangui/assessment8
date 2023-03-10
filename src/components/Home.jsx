import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>Thank you for visiting my blog. Here, you will find posts on various topics that I find interesting. Feel free to browse through the posts and leave a comment if you have any thoughts or questions.</p>
      <Link to="./Post.jsx">
        <button>Go to Posts</button>
      </Link>
    </div>
  );
}

export default Home;