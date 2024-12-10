const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express()


const cors = require('cors')
// app.use(cors())

//import controllers
const BusPartRouter = require('./controllers/BusParts.js')

//mogoDB
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}`);
})

//middleware
app.use(cors({ origin: 'http://localhost:5173'}))
app.use(express.json())

//add the router to the BusParts route
//'/BusParts is my api path
app.use('/BusParts', BusPartRouter)

app.listen(3000, () => {
    console.log('listening on PORT 3000');
    
})
