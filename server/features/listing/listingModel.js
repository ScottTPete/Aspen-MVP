var mongoose = require('mongoose')
	, CommentSchema = require('../comments/commentSchema')
	, Schema = mongoose.Schema;

var ListingSchema = new Schema({
	description: {
		type: String
		, default: ''
	},
  title: {
    title: String
  }
	, headshot: {
		type: String
 }
	, comments: [CommentSchema]
	, name: {
		name: String,
    default: ''
	, }
	, location: {
		type: String
		, default: ''
	},
  email: {
    type: String
  },
  number: {
    number: Number
  }
}, {
	timestamps: true
, });

module.exports = mongoose.model('Photo', ListingSchema);
