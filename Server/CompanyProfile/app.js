// require('dotevn/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const personRoute = require('./routes/person');

app.use('/person', personRoute);
app.get('/', (req, res) => {
    res.send('Trang chủ');
});


// connect database
mongoose.connect('mongodb+srv://anhpt103:1r0q5c3rewqA@cluster0-kjfj8.gcp.mongodb.net/rest?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (req, res) => {
    console.log('connect database success');
});

app.listen(3000);