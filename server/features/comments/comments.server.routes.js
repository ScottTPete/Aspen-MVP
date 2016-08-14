var commentCtrl = require('./comment.server.ctrl')

module.exports = function(app) {
	app.post('/api/v1/comment', commentCtrl.postComment);

  app.get('/api/v1/comments', commentCtrl.getComments);

  app.route('/api/v1/comment/:id')
		.put(commentCtrl.editComment)
		.delete(commentCtrl.deleteComment)
}
