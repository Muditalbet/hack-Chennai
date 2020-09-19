import React from 'react'
import axios from 'axios'

export default function Test({match}) {
    let params = match.params;
    var test
    var link = 'http://localhost:8000/showManagement?id=' + params.id
    axios.get(link)
    .then(response=>{
        test = response.data
        console.log(test)
    }).catch(err=>console.log(err))
    // console.log(params)
    return (
        <div>
            current parameter is: {params.id}
        </div>
    )
}
