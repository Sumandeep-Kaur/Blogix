import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className="card m-3 rounded-3 p-0">
            <img src={require('../assets/img/blogImage.jpg')} className="card-img-top" alt="img" />
            <div className="card-body">
                <p className="text-secondary mb-2">{post.category}</p>
                <h5 className="card-title text-white">{post.title}</h5>
                <p className="card-text text-secondary crop-text-4">{post.content}</p>
                <div className="d-flex justify-content-between">
                    <span className="text-info"><i className="fa fa-heart"></i> {post.likes}</span>
                    <Link to={`/post/${post.id}`} className="btn btn-sm btn-secondary">Read More <i className="fa fa-arrow-right"></i> </Link>
                </div>
            </div>
        </div>
     );
}
 
export default PostCard;