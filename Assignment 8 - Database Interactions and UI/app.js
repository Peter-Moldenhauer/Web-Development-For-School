// ***** SETUP below *****
//Initial setup here is used from lecture material
var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require("express-handlebars").create({defaultLayout: 'main'});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//var request = require('request');
app.use(express.static('public'));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", 3551);

// ***** ROUTES below *****
//Home Page - Displays the table of exercises including the column headings 
app.get('/', function(req, res, next) {
    var context = {};
    mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      // formats rows for month/day/year
      // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].date) {
		    rows[i].date = rows[i].date.toLocaleDateString();
        }
      }
      context.rowData = rows;
      res.render('home', context);
    });
});

//Insert - Inserts the data then queries the database to return it as a string
//Source for "SET" syntax: stackoverflow.com/questions/861722/mysql-insert-into-table-values-vs-insert-into-table-set
app.get('/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO workouts SET ?",
	{name: req.query.n, reps: req.query.reps, weight: req.query.weight, date: req.query.date, lbs: req.query.lbs},
    function(err, result){
        if(err){
            next(err);
            return;
        }
	mysql.pool.query('SELECT * FROM workouts WHERE id = ' + result.insertId, function(err, rows, fields){
      	if(err){
        	next(err);
        	return;
      	}
        if (rows[0].date) {
		    rows[0].date = rows[0].date.toLocaleDateString();
	    }
        context.rowData = JSON.stringify(rows);
        res.type("text/plain");
        res.send(context.rowData);
   	});
  });
});

//Table reset - from lecture material
app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS workouts", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    })
  });
});

//Post - handles edits after they have been made
app.post('/',function(req,res,next){
  var context = {};
  mysql.pool.query("SELECT * FROM workouts WHERE id=?", [req.body.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    //code based off of lecture video	
    if(result.length == 1){
      var vals = result[0];
      mysql.pool.query("UPDATE workouts SET name=?, reps=?, weight=?, date=?, lbs=? WHERE id=? ",
        [req.body.name || vals.name, req.body.reps || vals.reps, req.body.weight || vals.weight, req.body.date || vals.date, req.body.lbs || vals.lbs, req.body.id],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
            if(err){
                next(err);
                return;
            }
      	    for (var i = 0; i < rows.length; i++) {
                if (rows[i].date) {
		            rows[i].date = rows[i].date.toLocaleDateString();
        	    }
      	    }
          context.rowData = rows;
          res.render('home', context);
        });
      });
    }
  });
});


//Edit - New page, queries data and returns changes if any.
app.get('/edit', function(req, res){
    var context = {};
	if(req.body){
		console.log(req.body);
	}
    mysql.pool.query('SELECT * FROM workouts WHERE id = ' + req.query.editId, function(err, rows, fields){
      	if(err){
        	next(err);
        	return;
      	}
        //Format date to appear on edit page
        //Source: https://www.w3schools.com/jsref/jsref_obj_date.asp 
        if (rows[0].date) {
		var day = rows[0].date.getDate();
		var month = rows[0].date.getMonth();
		month++;
		var year = rows[0].date.getFullYear();
		if (month < 10) {
			month = '0' + month;
		}
		if (day < 10) {
			day = '0' + day;
		}
		var dateStr = year + '-' + month + '-' + day;
		rows[0].date = dateStr;
        }
        context.rowData = rows;
        res.render('edit', context);
    })
});

//Delete - remove row from table
//Code from lecture video  
app.get('/delete',function(req,res,next){
  mysql.pool.query("DELETE FROM workouts WHERE id=?", [req.query.deleteId], function(err, result){
    if(err){
      next(err);
      return;
    }
    res.send(null);
  });
});

// ***** Errors - code from lecture material *****
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

// ***** Start up app! *****
app.listen(app.get('port'), function(){
  console.log('Express started on port: ' + app.get('port'));
});
