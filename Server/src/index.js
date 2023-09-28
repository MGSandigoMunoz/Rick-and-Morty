//!SERVER WITH EXPRESS

// const express = require('express');
const server = require('./app')
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

//! SERVER WITHOUT EXPRESS
// const http = require ('http');//Esto se importa de nodeJS

// const PORT = 3001;

// // const characters= require('./utils/data.js'); //Impoto data que va a ser mi servidor local, es el archivo que tengo en la carpeta utils. Lo hago con require porque es nodeJS y en el archivo data se está exportando como un module.

// const getCharById = require("./controllers/getCharById.js")




// http.
// createServer((req,res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');//Es un corse que da permiso al front para acceder a la info que tengo en el backend desde cualquier host

//     //? RUTAS

//     if(req.url.includes('/rickandmorty/character')){
        
//             const id= req.url.split('/').pop();//Saca de la url el id (query params)
        
//             getCharById(res,id)
//     }

// }).listen(PORT,'localhost');//Recibe el puerto y el host


//!SERVER API GET WITH VANILLA CODE

// http.
// createServer((req,res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');//Es un corse que da permiso al front para acceder a la info que tengo en el backend desde cualquier host

//      RUTAS

//     if(req.url.includes('/rickandmorty/character')){
        
//             const id= req.url.split('/').pop();
        
//             getCharById(res,id)
//     }


// // Los console.log van a funcionar cuando haga un request en el navegador. Ej: refresh
//     if(req.url.includes('/rickandmorty/character')){


//         const searchCharacter= characters.find(character => character.id === id) //Si no encuentra el character.id entonces devuleve undefine

//         if(searchCharacter){ //Importante el return en cada rest, para que no ejecute el resto del código.
//             return res
//                     .writeHead (200, { "Content-Type":"application/json" })//Este content tipe se da porquevoy a retornar un JSON
//                     .end(JSON.stringify (searchCharacter))//Convierto un objeto JavaScript en una cadena JSON
//         } else {
//             return res
//                     .writeHead(404, { "Content-Type":"application/json" })
//                     .end("Personaje no encontrado")
//         }

//      } 
//      return res
//         .writeHead(404, { "Content-Type":"application/json" })
//         .end({message:"Lost in space.."})

// }).listen(PORT,'localhost');//Recibe el puerto y el host

