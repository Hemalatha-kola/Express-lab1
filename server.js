const express = require('express');
const path = require('path');

const app = express();
const studentdb = require('./data/student');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
  res.send('<h1>Hello SEIR!</h1>');
});
app.get('/home', function(req, res) {
  res.render('home');
});
app.get('/', function(req, res) {
  res.redirect('/home');
});


app.listen(5500, function () {
  console.log('Listening on port 5500');
});
app.get('/student', function(req, res) {
  res.render('students/index', {
    studentdetails: studentdb.getAll()
  });
});