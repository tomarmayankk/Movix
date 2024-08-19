import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './pages/home/home.jsx';
import MovieList from './pages/allMovies/allMovie.jsx';
import About from './pages/About/about.jsx';
import ErrorPage from './pages/error/error.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path='movies/allmovies' element = {<MovieList/>}></Route>
          <Route path='movies/about' element = {<About/>}></Route>
          <Route path='/*' element = {<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
