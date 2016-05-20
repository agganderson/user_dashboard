var mongoose = require('mongoose');
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
			var newAnswer = new Answer({name: req.body.name, topic: req.body.topic, answer: req.body.answer});
			newAnswer.save(function(err, results){
				if(err){
					console.log('GET THE DEFIBRILLATOR', results);
				}
				else {
					console.log('SAVED THEM');
					res.json(results);
				}
			});
		},
	}
})();