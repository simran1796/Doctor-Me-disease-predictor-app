const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupSchema = new Schema({
  name: { type: String ,required: [true, 'Name must be provided'] },
  email: { type: String ,required: [true, 'Email must be provided']},
  password: { type: String ,required: [true, 'Password must be provided']},
  repassword: { type: String ,required: [true, 'Re-enter the password']},
}, {
  timestamps: true,
});

const Signup = mongoose.model('Signup',signupSchema);

module.exports = Signup;