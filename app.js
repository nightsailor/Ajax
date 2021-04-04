var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');

//line9
//app.use('/assets', express.static('./public'))
//localhost:3000/assets/style.css