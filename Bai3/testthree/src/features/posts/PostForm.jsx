// src/features/posts/PostForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';

export default function PostForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.posts);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!title.trim()) {
      setFormError('Title is required');
      return;
    }
    if (!body.trim()) {
      setFormError('Body is required');
      return;
    }

    dispatch(addPost({ title, body }));
    setTitle('');
    setBody('');
  };

  return (
    <div className="post-form">
      <h2>Add New Post</h2>
      {formError && <div className="error">{formError}</div>}
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post content"
            rows="4"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Post'}
        </button>
      </form>
    </div>
  );
}
