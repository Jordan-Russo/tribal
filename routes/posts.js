const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/createNewPost", ensureAuth, postsController.getPostForm);

router.get("/:id", postsController.getPost);

router.post("/createPost", ensureAuth, upload.single("file"), postsController.createPost);

router.put("/likePost/:id", ensureAuth, postsController.likePost);

router.put("/unlikePost/:id", ensureAuth, postsController.unlikePost);

router.delete("/deletePost/:id", ensureAuth, postsController.deletePost);

module.exports = router;
