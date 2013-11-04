var express = require('express'),
    exphbs  = require('express3-handlebars'),
    path = require('path'),

    app = express();


	app.engine('handlebars', exphbs({defaultLayout: 'main'}))
     .use(express.favicon("public/img/favicon.ico")) 
  	 .set("views", path.join(__dirname, "views"))
  	 .set('view engine', 'handlebars')
     .use(express.static(path.join(__dirname, 'public')))  // serve static files
     .use(express.bodyParser());

var fs = require('fs');

  var data = fs.readFileSync( 'public/data/data-set.json' ),
      projects;

  try {
    projects = JSON.parse( data );
    //console.dir( projects );
  }
  catch (err) {
    console.log('There has been an error parsing your JSON.');
    console.log(err);
  }

app.get('/', function (req, res) {

    res.render('index', {
        contacts: projects,
        title: "Work"
      });
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: "About"
      });
});

app.get('/cv', function (req, res) {
    res.render('cv', {
        title: "CV"
      });
});

app.get('/add', function (req, res) {
    res.render('add', {
        title: "add"
      });
});

var port = process.env.PORT || 3000;   // set process.env.port for heroku, who listens to this
app.listen(port);
console.log("The server is now listening on port %s", port);
