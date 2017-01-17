var express = require('express');
var bodyParser = require('body-Parser');
var morgan = require('morgan');
var db = require('./db/index.js');
var controller = require('./controllers/index.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client'))


app.get('/api/questions', controller.questions.get);
app.post('/api/questions', controller.questions.post);
app.delete('/api/questions', controller.questions.remove);
app.get('/api/replies', controller.replies.get);
app.post('/api/replies', controller.replies.post);

app.listen(port);

console.log('Listening on port: ', port);

// module.exports = app;