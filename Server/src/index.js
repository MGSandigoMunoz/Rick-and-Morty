const http = require ('http');//Esto se importa de nodeJS

const PORT = 3001;

const characters= require('./utils/data.js'); //Impoto data que va a ser mi servidor local, es el archivo que tengo en la carpeta utils. Lo hago con require porque es nodeJS y en el archivo data se está exportando como un module.




http.
createServer((req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');//Es un corse que da permiso al front para acceder a la info que tengo en el backend

//? RUTAS

//Los console.log van a funcionar cuando haga un request en el navegador. Ej: refresh

    if(req.url.includes('/rickandmorty/character')){

        const partid= req.url.split('/')//Parte URL en array ["rickandmorty", "character", "id"]
        const idString= partid.pop()//Toma el último elemento de array ["id"]
        const id= Number(idString) 

        const searchCharacter= characters.find(character => character.id === id) //Si no encuentra el character.id entonces devuleve undefine

        if(searchCharacter){ //Importante el return en cada rest, para que no ejecute el resto del código.
            return res
                    .writeHead (200, { "Content-Type":"application/json" })//Este content tipe se da porquevoy a retornar un JSON
                    .end(JSON.stringify (searchCharacter))//Convierto un objeto JavaScript en una cadena JSON
        } else {
            return res
                    .writeHead(404, { "Content-Type":"application/json" })
                    .end("Personaje no encontrado")
        }

     } 
     return res
        .writeHead(404, { "Content-Type":"application/json" })
        .end({message:"Lost in space.."})

}).listen(PORT,'localhost');//Recibe el puerto y el host

