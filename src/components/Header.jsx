import React from 'react';

const Header = () => {
    return ( 
        <nav className='navbar'>
            <div className="container pt-2">
                <a href="/" className="navbar-brand">
                    <img src={require('../assets/img/logo.png')} alt="logo" height={48} loading='lazy' />
                    <span className='ms-2 text-white fs-5'>Blogix</span>
                </a>

                <div className="d-flex">
                    <a href='/posts' className="btn text-white">All Posts</a>
                    <a href='/add' className="btn btn-info">New Post</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;