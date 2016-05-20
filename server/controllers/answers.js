var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
module.exports = (function(){
	return {
		 index: function(req, res){
			Answer.find({}, function(err, results){
				if(err){
					console.log('ERROR ERROR', results);
				}
				else {
					console.log('Got dem topics');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			console.log('create answer function', req.body);
		}
	}
})();