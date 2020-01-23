const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://simranjeet:simranjeet1998@cluster0-rcvoh.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database is up!");
})

const signupRouter = require('./routes/signups');
const FeedbackRouter = require('./routes/feedbacks');

app.use('/signups', signupRouter);
app.use('/feedbacks', FeedbackRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});