const router = require('express').Router();
let Feedback = require('../models/feedback.model');
router.route('/').get((req, res) => {
    Feedback.find()
    .then(fb => res.json(fb))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/remove/:email').delete((req, res) => {
  Feedback.deleteOne({email:req.params.email})
  .then(() => res.json('First delete Done'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/fd').post((req, res) => {
    const experience=req.body.experience;
    const comments=req.body.comments;
    const email=req.body.email;
    const newFeedback = new Feedback({
      experience,
      comments,
      email
    });
        newFeedback.save()
         .then(() => res.json('Feedback added!'))
         .catch(err => res.status(400).json('Error: ' + err));
     })
   
module.exports = router;