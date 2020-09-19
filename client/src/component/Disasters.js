import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
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
    var test
    return (
        <div>
            {disaster.map(({name, about, _id})=>(
                <Link to={`/management/${_id}`}>
                    <div>
                        <h1>{name}</h1>
                        <div>{about}</div>
                        <br />
                    </div>
                </Link>
            ))}
            da
        </div>
    )
}

export default Disasters

