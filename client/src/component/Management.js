import React from 'react'
import axios from 'axios'

function Management({match}) {

    let params = match.params;
    var link = 'http://localhost:8000/showManagement?id=' + params.id;
    axios.get(link)
    .then(response=>{
        console.log(response.data)
    }).catch(err=>console.log(err))

    var link2 = 'http://localhost:8000/specificDisaster?id=' + params.id
    axios.get(link2)
    .then(response=>{
        console.log(response.data)
    }).catch(err=>console.log(err))

    return (
        <div>
            Mnagament
        </div>
    )
}

export default Management
