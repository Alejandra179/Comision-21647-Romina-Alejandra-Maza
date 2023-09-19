const route = require('express').Router();
const {CreatePostController, getPostsController, updatePostController, deletePostController, getPostController} = require('./Controllers')


route.post('/addposts',CreatePostController);
route.get('/posts',getPostsController);
route.get('/post/:id',getPostController);
route.put('post/:id',updatePostController);
route.delete('post/:id',deletePostController)

module.exports = route;