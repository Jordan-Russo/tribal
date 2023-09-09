const Post = require("../models/Post");
const User = require("../models/User");
const {formatPosts} = require("./posts");

module.exports = {
  getProfile: async (req, res) => {
    try {
      if(!req.params.id){
        return res.redirect(`/profile/${req.user.id}`)
        // return required for the rest of the function to stop this method executing on the server.
        // Otherwise we get a cast error for not having a proper id for the DB search
      }
      // makes default profile page the users profile page
      const posts = await Post.find({ user: req.params.id }).sort({ createdAt: "desc"}).lean();
      formatPosts(posts);
      const userInfo = await User.findById(req.params.id).lean()
      res.render("profile.ejs", { posts, user: userInfo, ownProfile: req.user.id === req.params.id });
    } catch (err) {
      console.log(err);
    }
  },
};
