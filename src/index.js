//load environment variables from .env file using dotenv library
require('dotenv').config();

//import expressjs framework
const express = require('express');
const PORT = process.env.PORT || 3001;

const {connect} = require('./config/database')
 

//create an instance of the express application
const app = express();

//start the express server and listen for incoming requests on the specified port
app.listen(PORT, async () => {
    console.log(`Server Started on ${PORT}`);
    
    try {
        await connect();
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
});