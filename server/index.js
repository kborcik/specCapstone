//imports
require('dotenv').config()
const express = require('express')
const cors = require ('cors')
const Survey = require('./Models/survey')
const db = require('./Models/database')
const {handleSurvey, getUserSurveys} = require('./Controllers/survey')

const app = express()

app.use(express.json())
app.use(cors())


// app.post(`/login`, loginHandler)
app.post('/api/survey', handleSurvey)
app.get('/api/surveys',getUserSurveys)
//middleware
const PORT = 4000
//server
db.sync()
app.listen(PORT, console.log(``))