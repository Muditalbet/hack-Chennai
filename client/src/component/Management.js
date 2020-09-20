import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/mgnt.css'

function Management({match}) {

    const [points, setPoints] = useState([]);
    const [disasterName, setName] = useState('');
    var test;
    useEffect(()=>{
        async function fetchData(){
            let params = match.params;
            var link = 'http://localhost:8000/showManagement?id=' + params.id;
            axios.get(link)
            .then(response=>{
                test = response.data
                setPoints(response.data);
                setName(test[0].disasterName);
            }).catch(err=>console.log(err))
        }
        fetchData();
    }, [])
    var i = 1;
    return (
        <div>
            {disasterName}
            {points.map((point)=>{
                return  <div key={i} className='actual_content'>
                            {i}.  {point.content}
                            <p key={i++}></p>
                        </div>
            })}
        </div>
    )
}

export default Management
