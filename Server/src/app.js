//!SERVER WITH EXPRESS

const express = require('express');
const server = express();
const morgan= require("morgan");

const router = require ("./routes")


//? MIDDLEWARES
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());//¿Trae json?

server.use(morgan("dev"))//¿De dónde viene la info?

server.use("/rickandmorty",router);//Pone un /rickandmorty antes de cada ruta


module.exports = server;