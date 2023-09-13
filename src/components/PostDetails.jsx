import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../redux/reducers/postReducer';
import { usePostContext } from '../contexts/PostContext';

const PostDetails = () => {
    const {id} = useParams();
    const posts = useSelector((state) => state.posts);
    const post = posts.filter(p => p.id == id);
    const {title, category, content, likes} = post[0];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { likedPosts, likePostApi, unlikePostApi } = usePostContext();

    const handleDelete = (id) => {
        dispatch(deletePost({id: id}));
        navigate('/posts');
    }

    const handleLike = (id) => {
        if(likedPosts.includes(id)) {
            unlikePostApi(id);
        } else {
            likePostApi(id);
        }
    }

    return ( 
        <div className="container">
            <div className="p-2 p-sm-3 p-md-4 p-lg-5">
                <div className="d-md-flex align-items-center justify-content-between">
                    <span className='fs-6 badge rounded-pill bg-secondary'> {category} </span>
                    <div className="mt-3 mt-md-0">
                        <button onClick={() => handleLike(id)} className="btn btn-light fw-bold me-3 text-danger position-relative"> { likedPosts.includes(id) ? 'Unlike' : 'Like' } <i className={ likedPosts.includes(id) ? 'fa fa-heart' : 'fa-regular fa-heart' }></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {likes}
                            </span>
                        </button>
                        <Link to={`/edit/${id}`} className="btn btn-info px-3 me-2 text-white"><i className="fa fa-edit"></i></Link>
                        <button onClick={() => handleDelete(id)} className="btn btn-danger px-3"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <h1 className="mt-4 text-white">{title}</h1>
                <p className="mt-3 lead text-white text-justify"> {content} </p>
            </div>
        </div>
     );
}
 
export default PostDetails;