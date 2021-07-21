import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Register />
    </div>
  );
}

export default App;
