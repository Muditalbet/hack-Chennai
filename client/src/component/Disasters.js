import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../CSS/Disasters.css';
import Pests from '../Pics/pests.jpg';
import Sukha from '../Pics/sukha.jpg';
import Bio from '../Pics/bio.jpg';
import Civil from '../Pics/civil.jpg';
import Cyber from '../Pics/cyber.jpg';
import Earth from '../Pics/earth.jpg';
import Fire from '../Pics/fire.jpg';
import Flood from '../Pics/flood.jpg';
import Hail from '../Pics/hail.jpg';
import Hurri from '../Pics/hurri.jpg';
import Light from '../Pics/light.jpg';
import Radio from '../Pics/radio.jpg';
import Tornado from '../Pics/tornado.jpg';
import Tsunami from '../Pics/sunami.jpg';

function Disasters() {
    const [disaster, setDisaster] = useState([]);
    var disasterImages = new Array(Pests, Sukha, Earth, Flood, Hail, Hurri, Light, Tornado, Tsunami, Fire, Radio, Bio, Cyber, Civil );
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('http://localhost:8000/allDisaster');
            setDisaster(req.data); 
        }
        fetchData();
    }, []);
    console.log(disaster);
    var test
    var i =0;
    return (
        <div className='main'>
            {disaster.map(({name, about, _id})=>(
                <div>
                    <div key={i} className='disaster'>
                    <Link className='link' to={`/management/${_id}`}>
                        <div className='text'>
                            <h1>{name}</h1>
                            <div>{about}</div>
                            <br />
                        </div>
                        </Link>
                        <Link className='link' to={`/management/${_id}`}>
                        <div className='photu'>
                            <img src={disasterImages[i]} />
                            <p key={i++}></p>
                        </div>
                        </Link>
                      </div>
                </div>
            ))}
        </div>
    )
}

export default Disasters

