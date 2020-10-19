const commentService = require('./comment.service')
// const logger = require('../../services/logger.service')

async function getComment(req, res) {
    const comment = await commentService.getById(req.params.id)
    res.send(comment)
}
  
async function getComments(req, res) {
    
        const comments = await commentService.query(req.query)
        // logger.debug(comments);
        res.send(comments)

}

// async function deleteComment(req, res) {
//     await commentService.remove(req.params.id)
//     res.end()
// }

async function addComment(req, res) {
    const comment = req.body;
    await commentService.add(comment)
    res.send(comment)
}

// async function updateComment(req, res) {
//     const comment = req.body;
    
//     await commentService.update(comment)
//     res.send(comment)
// }

module.exports = {
    getComment,
    getComments,
    // deleteComment,
    addComment,
    // updateComment
}