var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ListingSchema = new Schema({
  description: {
    type: String,
    default: ''
  },
  title: {
    title: String
  },
  headshot: {
    type: String,
    default: 'https://www.drupal.org/files/profile_default.jpg'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  name: {
    name: String,
    default: '',
  },
  location: {
    type: String,
    default: ''
  },
  email: {
    type: String
  },
  number: {
    number: Number
  },
  category: {
    type: String,
    enum: ["Baseball", "Football", "Lacrosse", "Basketball", "Lifting", "Sprints", "Tennis", "Golf", "Hockey", "Soccer", "Volleyball", "Boxing", "MMA", "Softball", "Swimming"]
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Listing', ListingSchema);
