var express = require('express');
var app = express();

var port  = process.env.PORT || 3500;

app.use(express.static(__dirname + '/dist'));

// import routes 
// require('./server/routes')(app);

app.listen(port);
console.log('Server listening on port:', port);

exports = module.exports = app;
