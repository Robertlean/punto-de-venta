import react from "react";

export default function Header(){
    return(
        <header className="d-flex justify-content-center align-items-center">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./index.html">Lista Vendedores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="listProducts.html" id="listProducts">Lista productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Hacer remito</a>
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
    )
}