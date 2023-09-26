//!HANDLE FAVORITES WITH EXPRESS

let myFavorites=[]

//? POST FAVORITES
const postFav = (req,res) => {
    //req.body = {id,name,gender...}
    myFavorites.push(req.body);

    return res.status(200).json(myFavorites);
}

//?DELETE FAVORITES
const deleteFav = (req, res)=>{
    const { id } = req.params//id recibido por parametros
    myFavorites = myFavorites.filter(char => {
        return char.id!== Number(id)
    })// Elimino el char del id que me entró

    return res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}