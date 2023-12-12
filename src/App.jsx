import logo from './logo.svg';
import './App.css';

const clickEmMim = () => {
  alert('Você clicou em mim');
}

const eventoBotao = () => {
  alert('Evento clicado');
}

const element = <h1>Hello World</h1>
const name = 'Ramon Silva';

const pessoa = {
  name :'Ramon',
  lastname: 'Santos'
}

const formataNome = () => {
  return pessoa.name + ' ' + pessoa.lastname;
}

const NomeMaiusculo = () => {
  return pessoa.name.toUpperCase() + ' ' + pessoa.lastname.toUpperCase();
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {element}
        O nome é: {name}
        <br/>
        Nome formatado: {formataNome()}
        <br/>
        Nome Maiusculo: {NomeMaiusculo()}
        <br/>
        <button onClick={clickEmMim}>Click em mim</button>
        <button onClick={eventoBotao}>Evento de botão</button>
       
      </header>

      <body>
        <div id="root">

        </div>
      </body>
    </div>
  );
}

export default App;
