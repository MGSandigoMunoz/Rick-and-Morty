const express= require("express");
const router = express.Router();

const getCharById= require("../controllers/getCharById");
const login = require("../controllers/login")
const {postFav, deleteFav}= require("../controllers/handleFavorites")

//!RUTAS

// GET getCharById: "/character/:id"
router.get("/character/:id",getCharById)

// GET login: "/login"
router.get("/login",login)

// POST postFav: "/fav"
router.post("/fav", postFav);

// DELETE deleteFav: "/fav/:id"
router.delete("/fav/:id", deleteFav);

module.exports = router;


// const getCharById = require("../controllers/getCharById");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
// const login = require("../controllers/login");
// const express = require("express");
// // const router = require("express").Router();


// const router = express.Router();

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

// module.exports = router;
