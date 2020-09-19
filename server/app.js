const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

const port = 8000;

require('./modal/Disaster')
require('./modal/Management')

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})

mongoose.connection.on('connected', ()=>{
    console.log('Connected to Mongodb.')
})

mongoose.connection.on('error', (err)=>{
    console.log('Connetion error: ', err)
})

app.use(express.json())
app.use(cors())
app.use(require('./routes/disaster'))
app.use(require('./routes/management'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))