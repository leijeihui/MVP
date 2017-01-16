var db = require('../db/index.js');

module.exports = {
	questions: {
		get: function (callback){
			// console.log('Am I here')
			var queryStr = 'SELECT * FROM questions';
			db.query(queryStr, function (err, results) {
				if (err) throw err;
				callback(results);
			})
		},
		post: function(params, callback){
			var queryStr = 'INSERT INTO questions (question) VALUES (?)';
			db.query(queryStr, params, function(err, results){
				if(err) throw err;
				callback(results)
			});
		}
	},
	replies: {
		get: function(question, callback){
			var queryStr = 'SELECT r.reply, q.question FROM replies r INNER JOIN questions q ON r.question = q.id WHERE q.question ="' + question + '"'; 
			db.query(queryStr, function (err, results) {
				if (err) throw err;
				callback(results);
			})
		},
		post:function(params, callback){
			var queryStr = 'INSERT INTO replies (reply, question) VALUES (?, (SELECT id FROM questions WHERE question = ? limit 1))';
			db.query(queryStr, params, function(err, results){
				callback(err, results)
			});
		}
	}
}