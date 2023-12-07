import logo from './logo.svg';
import './App.css';

const clickEmMim = () => {
  alert('Você clicou em mim');
}

const eventoBotao = () => {
  alert('Evento clicado');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <button onClick={clickEmMim}>Click em mim</button>
        <button onClick={eventoBotao}>Evento de botão</button>
       
      </header>
    </div>
  );
}

export default App;
