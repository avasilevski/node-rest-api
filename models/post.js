const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	body: String
});

module.exports = mongoose.model('Post', postSchema);