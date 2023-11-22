const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favorites")
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, favoritesController.getFavorites);

router.put("/add/:id", ensureAuth, favoritesController.addFavorite);

router.put("/remove/:id", ensureAuth, favoritesController.removeFavorite);

module.exports = router;
