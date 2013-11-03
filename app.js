var express = require('express'),
    exphbs  = require('express3-handlebars'),
    path = require('path'),

    app = express();

	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set("views", path.join(__dirname, "views"));
	app.set('view engine', 'handlebars');
    app.use(express.static(path.join(__dirname, 'public')));  // serve static files

var fs = require('fs');

  var data = fs.readFileSync('public/data/data-set.json'),
      projects;

  try {
    projects = JSON.parse(data);
    //console.dir(myObj);
  }
  catch (err) {
    console.log('There has been an error parsing your JSON.')
    console.log(err);
  }

app.get('/', function (req, res) {
    res.render('index', {contacts: projects});
});

app.listen(3000);

