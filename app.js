var express = require('express'),
    exphbs  = require('express3-handlebars'),
    path = require('path'),

    app = express();

	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set("views", path.join(__dirname, "views"));
	app.set('view engine', 'handlebars');
    app.use(express.static(path.join(__dirname, 'public')));  // serve static files


	var db = [
	  {
	    guid: "c214d676-a056-4e77-914c-dfa96e5c93b8",
	    title: "Europeana Contributions",
	   	year: "2013",
	    link: "www.marijerooze.nl/thesis/graphics",
	    description: "lalalla",
	    image: ".png"
	  },
	  {
	    guid: "c214d676-a056-4e77-914c-dfa96e5c93b8",
	    title: "Europeana Contributions",
	   	year: "2013",
	    link: "www.marijerooze.nl/thesis/graphics",
	    description: "lalalla",
	    image: ".png"
	  },
	  {
	    guid: "c214d676-a056-4e77-914c-dfa96e5c93b8",
	    title: "Europeana Contributions",
	   	year: "2013",
	    link: "www.marijerooze.nl/thesis/graphics",
	    description: "lalalla",
	    image: ".png"
	  }
	];

app.get('/', function (req, res) {
    res.render('index', {contacts: db});
});

app.listen(3000);

