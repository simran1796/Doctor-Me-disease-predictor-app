const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  experience: { type: String ,required: [true, 'Experience must be provided']},
  comments: { type: String },
  email: { type: String ,required: [true, 'Email must be provided']}
}, {
  timestamps: true,
});

const Feedback = mongoose.model('Feedback',feedbackSchema);

module.exports = Feedback;