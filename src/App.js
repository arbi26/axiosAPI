import React,{useEffect, useState} from "react";
import axios from "axios";
import './App.css';

const App = props => {
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response=>{setResponseData(response.data.results)
            console.log(response.data.results)
        
        })
    }, []);
    console.log("responseData "+responseData)
    return(
        <div>
            {
                responseData.map((item,index)=>{
                    return(
                        <p key={index}>{item.name} </p>
                    )
                })
            }
        </div>
    
    )
}

export default App;
