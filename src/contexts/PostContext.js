import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost, unlikePost } from '../redux/reducers/postReducer';

const PostContext = createContext();

const getInitialState = () => {
    const likedPosts = localStorage.getItem("likedPosts");
    return likedPosts ? JSON.parse(likedPosts) : [];
}

const PostProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [likedPosts, setLikedPosts] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }, [likedPosts]);

    const likePostApi = (postId) => {
        dispatch(likePost({id: postId}));
        setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId]);
    }

    const unlikePostApi = (postId) => {
        dispatch(unlikePost({id: postId}));
        setLikedPosts((prevLikedPosts) => 
            prevLikedPosts.filter((id) => id != postId)
        );
    }

    return (
        <PostContext.Provider value={{ likedPosts, likePostApi, unlikePostApi }} >
            {children}
        </PostContext.Provider>
    )
};

const usePostContext = () => {
    return useContext(PostContext);
}

export { usePostContext, PostProvider };