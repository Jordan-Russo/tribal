const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  formatPosts: function(posts){
    const titleCharLimit = 100;
    const captionCharLimit = 400;
    // char limits will shorten the title message and caption for any posts being previewed.
    posts.forEach(({caption, title}, i) => {
      if(title.length > titleCharLimit){posts[i].title = `${title.slice(0, titleCharLimit - 3)}...`}
      if(caption.length > captionCharLimit){posts[i].caption = `${caption.slice(0, captionCharLimit - 3)}...`}
    });
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      module.exports.formatPosts(posts);
      res.render("feed.ejs", { posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('user');
      const comments = await Comment.find({postFrom: req.params.id}).sort({ createdAt: "asc"}).populate('user').lean();
      res.render("post.ejs", { post, user: req.user, comments});
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      const newPost = await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: [],
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect(`/post/${newPost.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          $push: { likes: req.user.id },
        }
      );
      console.log(`Like added by ${req.user.id}`);
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  unlikePost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { likes: req.user.id },
        }
      );
      console.log("Like Removed");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
  getPostForm: async (req, res) => {
    try{
      res.render("createPost.ejs", { user: req.user });
    } catch(err){
      console.log(err)
    }
  }
};
