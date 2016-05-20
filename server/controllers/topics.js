var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
module.exports = (function(){
	return {
		index: function(req, res){
			Topic.find({}, function(err, results){
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
			var newTopic = new Topic({name: req.body.name, title: req.body.title, description: req.body.description, category: req.body.category});
			newTopic.save(function(err, results){
				if(err){
					console.log('GET THE DEFIBRILLATOR', results);
				}
				else {
					console.log('SAVED THEM');
					res.json(results);
				}
			});
		},
		getTopic: function(req, res){
			Topic.findOne({_id:req.params.id}, function(err, results){
				if(err){
					console.log('Could not get that topic, please try again', results);
				}
				else {
					console.log('Got your topic!');
					res.json(results);
				}
			});
		}
	}
})();