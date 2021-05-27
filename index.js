const express = require("express");
const bodyPasrser = require('body-parser');
const { request, response } = require("express");
const InitialMongoServer = require('./config/db.js');
const user = require('../src/routes/user');

//Initialise Mongo Server

InitialMongoServer();

const app = express();


//Port Definition

const port = process.env.PORT || 3002;

//Middelware

app.use(bodyPasrser.json());
app.use(bodyPasrser.urlencoded([exteded:false]))
app.get('/',(request,resopnse) => {
    resopnse.json({message:'Api Working...'});

});

/**
 * Router - MiddelWare
 * Router - /user/*
 * Method - *
 */
app.use('/user',user);


//Listener
app.listen(port,(request,response) =>{
    console.log(`server is running on port ${port}`);
});
