var mongoose = require('mongoose')
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
	, comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
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
