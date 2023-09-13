import React, { useState } from 'react';
import { addPost } from '../redux/reducers/postReducer';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addPost({id: nanoid(), likes: 0, title, category, content}));
        navigate('/posts');
    }

    return ( 
        <div className="container d-flex flex-column align-items-center justify-content-around py-4">
            <h2 className="text-white mb-4 fw-bold">Add New Post</h2>

            <form onSubmit={handleSubmit} className='p-3 px-md-5 py-4 rounded w-75'>
                <div className="mb-3">
                    <label className="form-label text-white fs-md-5 fw-bold">Title</label>
                    <input type="text" name='title' className="form-control text-white" required
                    onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white fs-md-5 fw-bold">Category</label>
                    <input type="text" name='category' className="form-control text-white" required
                    onChange={e => setCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white fs-md-5 fw-bold">Content</label>
                    <textarea type="text" name='content' className="form-control text-white" required
                    onChange={e => setContent(e.target.value)} />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-info fs-md-5 px-md-4 me-2 text-white">Post</button>
                    <Link to={`/posts`} className="btn btn-secondary fs-md-5 px-md-4 text-white">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
 
export default AddPost;