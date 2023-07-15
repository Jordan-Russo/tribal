const express = require("express");
const router = express.Router();
const profilesController = require("../controllers/profiles")
const { ensureAuth } = require("../middleware/auth");

router.get("/:id", ensureAuth, profilesController.getProfile);
router.get("/", ensureAuth, profilesController.getProfile);

module.exports = router;
