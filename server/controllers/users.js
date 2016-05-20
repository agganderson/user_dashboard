var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, results){
				if(err){
					console.log('ERROR ERROR', results);
				}
				else {
					// console.log('Got dem users');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			
			var newUser = new User({name: req.body.name});
			newUser.save(function(err, results){
				if(err){
					console.log('GET THE DEFIBRILLATOR', results);
				}
				else {
					// console.log('SAVED THEM');
					res.json(results);
				}
			});
		}
	}
})();