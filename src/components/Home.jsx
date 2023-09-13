import React from 'react';

const Home = () => {
    return ( 
        <div className='home text-white px-3 py-2 p-sm-4'>
            <div className='container pe-sm-5'>
                <h1 className='display-4 py-5 fw-bolder'>Uncover fresh prespectives, ideas and knowledge through the power of blogs.</h1>
                <p className='fs-5 text-secondary'>Blogix is an open platform where readers find dynamic thinking and where expert and undiscovered voices can share their writing on any topic.</p>
                <a href={'/posts'} className="btn btn-lg btn-info mt-4">Start Reading <i className="fa-solid fa-circle-arrow-right"></i></a>
            </div>
            
        </div>
     );
}
 
export default Home;