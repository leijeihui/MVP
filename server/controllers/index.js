var models = require('../models');

module.exports = {

	questions: {
		get: function(req, res) {
			models.questions.get(function(results){
				res.json(results);
			});
		},
		post: function (req, res) {
			var params = [req.body.question];
			models.questions.post(params, function(results){
				res.sendStatus(201);
			})
		}
	},

	replies: {
		get: function (req, res) {
			models.replies.get(req.query.question, function(results){
				res.json(results);
			})
		},
		post: function (req, res) {
			var params = [req.body.reply, req.body.question];
			models.replies.post(params, function(err, results){
				if(err) throw err;
				res.sendStatus(201);
			})
		}
	}

}