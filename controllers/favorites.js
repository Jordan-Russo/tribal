const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User")

module.exports = {
  getFavorites: async (req, res) => {
    try {
      const client = await User.findById(req.user.id).populate('favorites');
      const posts = client.favorites
      res.render("feed.ejs", { posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  addFavorite: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.user.id, { $push: { favorites: req.params.id } })
      console.log("favorite added");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  removeFavorite: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.user.id, { $pull: { favorites: req.params.id } })
      console.log(`favorite ${req.params.id} removed`);
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};
