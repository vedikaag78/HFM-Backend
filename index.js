const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const hostname = 'localhost';
const port = 3000;
const app = express();
const url = 'mongodb://localhost:27017/HFMorish';
const connect = mongoose.connect(url);

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`server running at https://${hostname}/${port}/`)
})

connect.then((db) =>{
    console.log('connected to server');
})