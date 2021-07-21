import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import RadheSyam from './components/RadheSyam';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Route>
        <Home />
        <MovieCard />
      </Route>
      <MovieCard />
      <Register />
    </div>
  );
}

export default App;
