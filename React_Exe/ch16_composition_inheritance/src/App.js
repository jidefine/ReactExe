import logo from './logo.svg';
import './App.css';
import WelcomeDialog from './ex01_containment/WelcomeDialog';
import WelcomeDesc from './ex01_containment/WelcomeDesc';

function App() {
  return (
  <div className='App'>
    <WelcomeDialog />
    <hr/>
    <WelcomeDesc />
  </div>
  );
}

export default App;
