const { Router } = require('express');
const router = Router();

const { getPosts, createPost, deletePost, updatePost} = require('../controllers/index.controller')

router.get('/posts',getPosts);
router.post('/post',createPost)
router.delete('/post/:id',deletePost)
router.put('/post/:id',updatePost)
module.exports = router;