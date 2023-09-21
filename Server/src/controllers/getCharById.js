const axios = require("axios");


 
const getCharById = (res,id) => {

//? PETICIÓN A LA API

        axios.get(`https://rickandmortyapi.com/api/character/${id}`) //Axios trae una Promesa = {status:pending, resolve: undefined. Función declarada pero sin ejecutar}

        .then(({data}) => {//Desestructuro y traigo la data del objeto response
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin:data.origin,//Debo pasar el objeto irigin, porque el front espera también el objeto no el name
                image:data.image,
                status:data.status
            }

//? RESPUSTA WEB API

        res//Pido respuesta en formato JSON
            .writeHead(200, {"Content-type":"application/json"})
            .end(JSON.stringify(character))//Estoy convirtiendo character en algo que puede viajar por internet
        })  
        .catch(error => {
            res//Manejo de error
                .writeHead(500, {"Content-type":"text/plain"})
                .end(error.message)//error puede tener cualquier nombre y tiene diferentes propiedades.
        })
}

module.exports = getCharById;