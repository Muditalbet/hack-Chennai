import React from 'react'

export default function Test({match}) {
    let params = match.params;
    console.log(params)
    return (
        <div>
            current parameter is: {params.test}
        </div>
    )
}
