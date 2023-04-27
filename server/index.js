//imports
require('dotenv').config()
const express = require('express')
const cors = require ('cors')


const app = express()

app.use(express.json())
app.use(cors())

const {loginHandler} = require('./Controllers/auth')
//endpoints

app.post(`/login`, loginHandler)

//middleware

//server

app.listen(PORT, console.log(``);)