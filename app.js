//constants and variables required to run requisite services
const express = require('express');
var favicon = require('serve-favicon');
const path = require('path');

//init app
const app = express();

//favicon code
app.use(favicon(path.join(__dirname, 'Public/startbootstrap-resume-gh-pages', 'favicon.ico')));

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set Public Folder
app.use(express.static(path.join(__dirname, 'Public')))

//Home route
app.get('/', function(req, res){
    let articles = [
        {
            id:1,
            title:'Welcome to my website! \n feel free to navigate around, and reach out to me if you have any questions!',
            author:'Jeremy Gart',
            body:'This is a sample article'
        }
    ];
    res.render('index', {
        title: 'Jeremy Gart',
        articles: articles
    });
});

//add Route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title: 'Add Article'
    });
})

//start server
app.listen(3000, function(){
    console.log('server started on port 3000');
});