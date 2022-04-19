const express = require('express');
const path = require('path');
 // Create our express app
 const app = express();
 const studentdb = require('./data/student');

 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));
 
 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('/', function (req, res) {
   res.send('<h1>Hello World!</h1>');
 });
 app.get('/home', function(req, res) {
  res.render('home');
});
 
 // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(5500, function () {
   console.log('Listening on port 5500');
 });
 app.get('/student', function(req, res) {
  res.render('students/index', {
    studentdetails: studentdb.getAll()
  });
});