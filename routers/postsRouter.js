const express = require('express');
const router = express.Router();

const postController = require('../controllers/postsController')

router.get('/', postsController.index);
router.get('/:id', postsController.show);
router.post('/', postsController.store);
router.put('/:id', postsController.update);
router.patch('/:id', postsController.patch);
router.delete('/:id', postsController.delete);

module.exports = router;