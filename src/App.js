import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/blog';
import Home from './pages/home';

function App() {
  return (
    <div className='container'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:id" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
