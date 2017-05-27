const express = require('express');
const consolidate = require('consolidate');
const database = require('./database');
const bodyparser = require('body-parser');
const Image = require('./models').Image;


const app = express();

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./static'));
app.use(bodyparser.urlencoded({
	extended: true
}));

app.get('/', function(request,response){
	response.render('index.html');
});


app.post('/imginsert', function(request, response){

	var name = request.body.name;
	var description = request.body.description;
	var path = request.body.path;

	Image.create({
		name: name,
		description: description,
		path: path
	}).then(function() {
            return response.redirect('/insert');
        });

});

app.get('/index', function(request,response){
	response.render('index.html');
});

app.get('/insert', function(request,response){
	response.render('insert.html');
});

app.get('/spgallery', function(request,response){
	//response.render('spgallery.html');
	const description = 'portrait';
	Image.findAll({ where: {description : description}}).then(function(result){

		response.render('spgallery.html', {
			images : result
		})
	});
});

app.get('/ssgallery', function(request,response){

	const description = 'scene';
	Image.findAll({ where: {description : description}}).then(function(result){

		response.render('ssgallery.html', {
			images : result
		})
	});
});

app.listen(3000, function(){
	console.log('Server is now listening at port 3000');
});
