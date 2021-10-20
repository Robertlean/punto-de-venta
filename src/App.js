import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Lista Vendedores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lista productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Hacer remito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Historial</a>
            </li>
            <li>
                <form className="d-flex" action="/search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </li>
          </ul>
    </header>
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
