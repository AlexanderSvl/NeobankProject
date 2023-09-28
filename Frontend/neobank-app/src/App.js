import './App.css';
import logo from '../src/images/logo.png';  
import '../src/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img className="image" src={logo} alt=""></img>

          <div className="middle">
            <div className="text">Join us!</div>
          </div>
        </div>

        <h3 className="head1">Welcome to Neobank. </h3>
        <h3 className="head2">Your best finance management system.</h3>
      </header>
    </div>
  );
}

export default App;
