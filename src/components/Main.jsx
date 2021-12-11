import React from "react";
import './Main.css'

function Main(props) {
    return (
        <main className="content">
            <h2>CEP: {props.cep}</h2>
            <p>UF: {props.uf}</p>
            <p>Localidade: {props.localidade}</p>
            <p>DDD: {props.ddd}</p>
            <p>IBGE: {props.ibge}</p>
        </main>
    )
}


export default Main