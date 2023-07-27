const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favorites")
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, favoritesController.getFavorites);

router.put("/add/:id", favoritesController.addFavorite);

router.put("/remove/:id", favoritesController.removeFavorite);

module.exports = router;
