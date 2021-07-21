import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import RadheSyam from './components/RadheSyam';
import Kgf from './components/Kgf';
import Puspha from './components/Puspha';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Route exact path="/">
        <Home />
        <MovieCard />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/pushpa">
        <Puspha />
      </Route>
      <Route path="/kgf2">
        <Kgf />
      </Route>
      <Route path="/radhesyame">
        <RadheSyam />
      </Route>
    </div>
  );
}

export default App;
