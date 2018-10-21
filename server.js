var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/auth/google', function(req, res){
    res.render('app');
});

app.get('/userform', function (req, res) {
    res.render('hello', {
        user:
            {first_name: req.query.first_name, last_name: req.query.last_name}
    });
});


app.listen(port);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});