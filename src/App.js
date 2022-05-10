import logo from './logo.svg';
import './App.css';
import Nav from '../src/views/Nav'

const App = () => {
  let name = 'Duy Vo';

  const handleEvenClick = () => {
    console.log('>click me')
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chao anh {name}</h1>
        <input type="text" />
        <button type='button' onClick={() => handleEvenClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
