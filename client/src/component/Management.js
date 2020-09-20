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
        <div className='management'>
            <h1 className='management_head'>
                Preventing Measures for {disasterName}
            </h1>
            {points.map((point)=>{
                return  <div key={i} className='actual_content'>
                            <span>{i}.</span>  <p>{point.content}</p>
                            <p key={i++}></p>
                        </div>
            })}
        </div>
    )
}

export default Management
