import React, {useState} from "react";
import Main from "../components/Main";
import { BsSearch} from 'react-icons/bs'
import '../components/Input.css'
import api from "../Services/Api";



 function SearchCEP(props) {
    const [input, setInput] = useState('')
    const [location, setLocation] = useState('')
    
    async function getCEP(CEP) {
        if(!CEP || isNaN(CEP)) {
            alert("Por gentileza coloque o CEP corrretamente...")
            setLocation('')
            setInput('')
            return
        } else {
            try {
                const response = await api.get(`${CEP}/json/`)
                setLocation(response.data)
                setInput('')
                
            } catch(e) {
                
                alert(`Error: Por gentileza coloque um CEP existente.`)
                setInput('')
            }
        }

    }

    

    return (
    <React.Fragment>
        <div className="InputCamp">
            <input type="text"
                placeholder={props.placeholder}
                className="inputSearch"
                value={input}
                onChange={e => setInput(e.target.value)}
                
            />

            <button className="btnSearch"
                onClick={e => getCEP(input)}
            >
                <BsSearch />
            </button>
        </div>
        <Main  
        uf={location.uf}
        cep={location.cep} 
        ibge={location.ibge} 
        localidade={location.localidade} 
        ddd={location.ddd}

        
        />
    </React.Fragment>
    )
}

export default SearchCEP;