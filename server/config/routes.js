var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
// var comments = require('./../controllers/comments.js');
var answers = require('./../controllers/answers.js');



module.exports = function(app){
	app.get('/users', function(req, res){
		// console.log('hit users get route');
		users.index(req, res);
	});

	app.post('/users', function(req, res){
		// console.log('hit users post route');
		users.create(req, res);
	});

	app.get('/topics', function(req, res){
		// console.log('hit topics get route');
		topics.index(req, res);
	});

	app.post('/topics', function(req, res){
		// console.log('hit topics post route');
		topics.create(req, res);
	});

	app.get('/topic/:id', function(req, res){
		// console.log('hit topic by id route');
		topics.getTopic(req, res, req.params.id)
	});

	app.get('/answers', function(req, res){
		console.log('hit answer index route');
		answers.index(req, res);
	});

	app.post('/answers', function(req, res){
		console.log('hit answer create route');
		answers.create(req, res, req.params.id);
	});
}