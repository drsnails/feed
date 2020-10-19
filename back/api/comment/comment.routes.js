const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getComment, getComments, addComment} = require('./comment.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getComments)
router.get('/:id', getComment)
router.post('/', addComment)
// router.put('/:id', updateComment)
// router.delete('/:id',  deleteComment)
// router.put('/:id',  updateComment)
// router.delete('/:id',  requireAuth, requireAdmin, deleteComment)

module.exports = router