import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../redux/reducers/postReducer';

const EditPost = () => {

    const {id} = useParams();
    const posts = useSelector((state) => state.posts);
    const post = posts.filter(p => p.id == id);
    const {title, category, content} = post[0];
    const [utitle, setTitle] = useState(title);
    const [ucategory, setCategory] = useState(category);
    const [ucontent, setContent] = useState(content);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(editPost({
            id: id,
            title: utitle,
            category: ucategory,
            content: ucontent
        }));
        navigate(`/post/${id}`);
    }

    return ( 
        <div className="container d-flex flex-column align-items-center justify-content-around py-4">
            <h2 className="text-white mb-4 fw-bold">Edit Post</h2>
            <form onSubmit={handleUpdate} className='p-3 px-md-5 py-4 rounded w-75'>
                <div className="mb-3">
                    <label className="form-label text-white fs-md-5 fw-bold">Title</label>
                    <input type="text" name='title' className="form-control text-white" required
                    value={utitle} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white fs-md-5 fw-bold">Category</label>
                    <input type="text" name='category' className="form-control text-white" required
                    value={ucategory} onChange={e => setCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white fs-md-5 fw-bold">Content</label>
                    <textarea type="text" name='content' className="form-control text-white" required
                    value={ucontent} onChange={e => setContent(e.target.value)} />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-info fs-md-5 px-md-4 me-2 text-white">Update</button>
                    <Link to={`/post/${id}`} className="btn btn-secondary fs-md-5 px-md-4 text-white">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
 
export default EditPost;