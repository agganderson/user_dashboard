var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	total_topics: {type: Number, default: 0},
	total_answers: {type: Number, default: 0},
	total_comments: {type: Number, default: 0}
});

mongoose.model('User', UserSchema);