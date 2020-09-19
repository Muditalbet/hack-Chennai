const React = require('react')
const {useEffect} = require('react')
const {useState} = require('react')
const axios = require('axios');


function Disasters() {
    const [disaster, setDisaster] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('');
            setDisaster(req.data); 
        }
        fetchData();
    }, []);
    console.log(disaster);
    return (
        <html>
        <div>
            dasda
        </div>
        </html>
    )
}

export default Disasters

