var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema =  new mongoose.Schema({
	answer: String,
	name: String,
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	arrow: {type: Boolean, default: false},
	likes: {type: Number, default: 0},
	dislikes: {type: Number, default: 0},
	created_at: {type: Date, default: new Date}
});

mongoose.model('Answer', AnswerSchema);