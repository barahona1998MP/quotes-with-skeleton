//? Dependencies
const express = require('express')
const cors = require('cors')

//? Files
const db = require('./utils/database')
const config = require('../config')

//? Initials configs
const app = express()
const port = config.api.port
const host = config.api.host

//? Enable incoming JSON data
app.use(express.json())
//? Enable CORS
app.use(cors())

//? Authenticate db
db.authenticate()
    .then(() => console.log('Databases Authenticated'))
    .catch(err => console.log(err))
db.sync()
    .then(() => console.log('Database Synce'))
    .catch(err => console.log(err))

    
//? Routes v1
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'OK',
        routes: {
            users: ""
        }
    })
})

app.listen(port, () => {
    console.log(`Server started on ${host}`)
})