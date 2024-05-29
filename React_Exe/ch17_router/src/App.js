import logo from './logo.svg';
import './App.css';
import Home from './ex01_components/Home';
import Topics from './ex01_components/Topics';
import Contact from './ex01_components/Contact';

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <Home />
      <Topics />
      <Contact />
    </div>
  );
}

export default App;

// npm install --save react-router-dom