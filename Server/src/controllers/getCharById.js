const axios= require("axios");


const getCharById = async (req,res) => {

    const charId =req.params.id;//string
    const URL=`https://rickandmortyapi.com/api/character/${charId}`
    try {
        const {data} = await axios.get(URL)
        const {id, status, name, species, origin, image, gender} = data;//id es un Number
        const character ={id, status, name, species, origin, image, gender};

        // character.name 
        // ? 
        res.status(200).json(character) //Si existe el personaje
        // : res.status(404).send("Not found")//Si no existe el personaje

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getCharById;


//! PROMISES
    // const {id}=req.params;//id recibido por parámetros

    // axios.get(URL+id) //Devuelve promesa
    // .then(({data}) => {
    //     const {id, status, name, species, origin, image, gender} = data;
    //     const character ={id, status, name, species, origin, image, gender};

    //     character.name //Me pregunto por cualquiera de las props
    //     ? res.status(200).json(character) //Si existe el personaje
    //     : res.status(404).send("Not found")//Si no existe el personaje
    // })
    // .catch(error => res.status(500).send(error.message)); //Si rompe todo
// }

// module.exports = getCharById;
    

//!VANILLA
// const axios = require("axios");


 
// const getCharById = (res,id) => {

// //? PETICIÓN A LA API

//         axios.get(`https://rickandmortyapi.com/api/character/${id}`) //Axios trae una Promesa = {status:pending, resolve: undefined. Función declarada pero sin ejecutar}

//         .then(({data}) => {//Desestructuro y traigo la data del objeto response
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin:data.origin,//Debo pasar el objeto irigin, porque el front espera también el objeto no el name
//                 image:data.image,
//                 status:data.status
//             }

// //? RESPUSTA WEB API

//         res//Pido respuesta en formato JSON
//             .writeHead(200, {"Content-type":"application/json"})
//             .end(JSON.stringify(character))//Estoy convirtiendo character en algo que puede viajar por internet
//         })  
//         .catch(error => {
//             res//Manejo de error
//                 .writeHead(500, {"Content-type":"text/plain"})
//                 .end(error.message)//error puede tener cualquier nombre y tiene diferentes propiedades.
//         })
// }

// module.exports = getCharById;