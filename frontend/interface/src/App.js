import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MovieCard />
      <Register />
    </div>
  );
}

export default App;
