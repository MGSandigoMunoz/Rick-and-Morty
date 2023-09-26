const users = require("../utils/users");

 const login = (req, res) => {

    const {email, password} = req.query;

    let access= false; //Flag

    users.forEach(user => {//user es un array de objetos

        if(
            user.email === email && user.password === password
        ) access=true//Se modifica si usuario cumple con credencial
    })//Debo recorrer todo el arreglo para verificar si las credenciales coinciden

    if (access) {
        // Si el acceso es verdadero, se encontraron credenciales válidas
        return res.status(200).json({ access:true });
       } else {
         // Si el acceso es falso, no se encontraron credenciales válidas
        return res.status(404).json({ access:false });
       }
    };

    module.exports = login