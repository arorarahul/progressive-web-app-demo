var express = require('express');
var open = require('open');
var path = require('path');
var chalk = require('chalk');

/* eslint-disable no-console */

var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(port, function(err) {
	if(err){
		console.log(chalk.red(err));
	}else{
		open('http://localhost:' + port);
	}

})
