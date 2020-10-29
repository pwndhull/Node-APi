const { response } = require("express");

const mongoose = require('mongoose');

const mongoURL= 'mongodb+srv://admin:admin1@cluster0.9zlrf.mongodb.net/node-auth'
//?retryWrites=true&w=majority'
const InitialMongoServer = async() => {
    try{
        await mongoose.connect(mongoURL, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB!!!");
    }catch(e){
        console.log(e);
        throw e;
    }
};
module.exports = InitialMongoServer;