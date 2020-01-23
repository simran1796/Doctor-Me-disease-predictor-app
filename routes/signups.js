
const router = require('express').Router();
let Signup = require('../models/signup.model');
const bcrypt = require("bcryptjs");


router.route('/').get((req, res) => {
    Signup.find()
    .then(signups => res.json(signups))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
  Signup.findOne({ email: req.body.email }).then(user => {
    if (user) {
    return res.status(500+'').json("Email already exist");
    }
    else
    {
  const name = req.body.name;
  const email=req.body.email;
  const password=req.body.password;
  const repassword=req.body.repassword;
  const newSignup = new Signup({
    name,
    email,
    password,
    repassword,
  });

  bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(newSignup.password, salt, (err,hash) => {
      if (err) {console.log (err)};
      newSignup.password = hash;
      newSignup.save()
       .then(() => res.status(200).json('User added!'))
       .catch(err => res.status(401).json('Error: ' + err));
    });
  })
 
}
});
});

router.post('/login',(req,res) =>{
  const email=req.body.email;
  const password=req.body.password;
  Signup.findOne({email}).then(user => {
      if(!user) {
          return res.status(404).json("You aren't registered!");
      }
  bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
       res.json("Welcome"); 
   
    } 
    else {
      return res .status(400).json("Password incorrect");  }
  })
  .catch(err => res.status(400).json('Error: ' + err));
});
});


module.exports = router;