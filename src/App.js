import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/"><img src="" />
            <img src=""/>
            <h1>Teegarden Tutoring</h1>
          </Link>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;
