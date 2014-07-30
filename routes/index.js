var express = require('express'),
    posts = require('../data/posts'),
    fs = require('fs'),
    url = require('url'),
    router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { posts: posts });
});

router.get('/posts', function(req, res) {
  res.render('index', { posts: posts });
});

router.get('/post/:postId', function(req, res) {
  var post = posts.filter(function(post) {
    return post.ID == req.params.postId;
  })[0];

  if (post) {
    res.render('post', { post: post });
  }
});

module.exports = router;
