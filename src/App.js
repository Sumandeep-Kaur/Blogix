import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import { PostProvider } from './contexts/PostContext';
import './assets/styles/style.css';


function App() {
  return (
    <>
      <PostProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/add' element={<AddPost /> } />
            <Route exact path='/edit/:id' element={<EditPost />} />
            <Route exact path='/posts' element={<PostsList />} />
            <Route exact path='/post/:id' element={<PostDetails />} />
          </Routes>
        </Router>
      </PostProvider>
    </>
  );
}

export default App;
