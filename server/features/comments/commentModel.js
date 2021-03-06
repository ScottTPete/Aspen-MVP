var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CommentSchema = new Schema({
	comment: {
		type: String,
		required: true
	},
  name: {
    type: String,
		required: true
  },
  ref: {
    type: Schema.Types.ObjectId,
    required: true
    }
},
{
	timestamps: true,
});

module.exports = mongoose.model('Comment', CommentSchema);
