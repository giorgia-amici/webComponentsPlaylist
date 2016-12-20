const courses = ["RcGyVTAoXEU", "tbicAmaXYtM", "MEDgtjpycYg"];
// TODO - swap 'myData' for database!
var myData = [];
module.exports = function(app) {
	app.get('/api/courses', function (req, res) {
		res.status(200);
		res.send(JSON.stringify(courses));
	});

  app.get('/api/favourites', function (req, res) {
    res.status(200);
    res.send(JSON.stringify(myData));
  });

  app.post('/api/favourites', function (req, res) {
  	var index = myData.indexOf(req.body.courseId);
  	if ( index == -1 ) {
  		myData.push(req.body.courseId);
  	} else {
  		myData.splice(index);
  	}

    res.status(204);
    res.send('written');
  });
}