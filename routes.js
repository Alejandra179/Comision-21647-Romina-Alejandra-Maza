const route = require('express').Router();
const {CreatePostController, getPostsController, updatePostController, deletePostController, getPostController} = require('./Controllers');
const validateFields = require('./Middleware');


route.post('/posts',validateFields,CreatePostController);
route.get('/posts',getPostsController);
route.get('/posts/:id',getPostController);
route.put('/posts/:id',validateFields,updatePostController);
route.delete('/posts/:id',deletePostController)

module.exports = route;