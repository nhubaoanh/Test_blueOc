// src/App.jsx
import React from 'react';
import PostForm from './features/posts/PostForm';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
