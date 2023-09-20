const http = require ('http');//Esto se importa de nodeJS
const characters= require('./utils/data.js') //Impoto data que va a ser mi servidor local


http.
createServer((req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){

        const partid= req.url.split('/')//Parte URL en array
        const idString= partid.pop()//Toma el último elemento de array
        const id= Number(idString)

        const searchCharacter= characters.find(character => character.id === id)

        if(searchCharacter){
            res.writeHead (200, { "Content-Type":"application/json" })
            res.end(JSON.stringify(searchCharacter))
        } else {
            res.writeHead(404, { "Content-Type":"application/json" })
            res.end("Personaje no encontrado")
        }

     } 
}).listen(3001,'localhost');