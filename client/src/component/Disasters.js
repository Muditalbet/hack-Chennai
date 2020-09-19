import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Disasters() {
    const [disaster, setDisaster] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('http://localhost:8000/allDisaster');
            setDisaster(req.data); 
        }
        fetchData();
    }, []);
    console.log(disaster);
    return (
        <div>
            {disaster.map(({name, about})=>(
                <div>
              <h1>{name}</h1>
            <div>{about}</div>
            <br />
                </div>
            ))}
            da
        </div>
    )
}

export default Disasters

