import './App.css';
import {useState} from "react"
import {Header} from './components/Header'

let valor = 0
function App() {
  function bienvenida(){
    return "Bienvenido al putno de venta de El Noble"
  }
  function vendedores(){
    let valor = "Vendedores";
    valorString(valor);

  }
  function productos(){
    
    valorString(valor)
    valor = valor + 2;
  }

  const [dato, valorString] = useState();
  return (
      <div className="App">
        <header className="d-flex justify-content-center align-items-center">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link" aria-current="page" href="./index.html" onClick={vendedores}>Lista Vendedores</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="listProducts.html" id="listProducts" onClick={productos}>Lista productos</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Hacer remito</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Historial</button>
                </li>
                <li>
                    <form className="d-flex" action="/search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </li>
            </ul>
        </header>
       <div>
          {bienvenida}
         {dato}
         
       </div>
       <Header />
      </div>

    
    

    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-danger">Danger</button>

      </header>
    </div> */
  );
}

export default App;
