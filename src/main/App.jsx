import React from "react";
//import Input from "../components/Input";
import Titulo from "../components/Titulo";
import SearchCEP from "../core/SearchCEP";

import './App.css'

function App() {
    return (
    <div className="container">
        <Titulo titulo="Informações sobre o CEP"/>
        <SearchCEP placeholder="Digite aqui seu CEP..."   />
    </div>
    )
}

export default App;