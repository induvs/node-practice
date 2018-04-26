const express = require('express');
const hbs = require('hbs');


var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req, res) => {
	res.send('hello');
});

app.use((req,res,next) => {

	res.render('maintainence.hbs');
});

app.get('/about',(req, res) => {
	res.render('about.hbs',{
		pageTitle: 'About',
		currentYear: new Date().getFullYear()
	});
});

app.listen(3000,() => {
	console.log("server is up on port 3000");
});