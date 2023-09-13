import React from 'react';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    return ( 
        <div className="container pt-3 pb-5 d-flex justify-content-center align-content-around flex-wrap">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
     );
}
 
export default PostsList;