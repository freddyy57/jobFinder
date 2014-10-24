var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require("./jobs-data.js");

var app = express();

require("./jobs-service.js")(jobsData,app);

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));
//creamos una vista para la base de datos



app.get('*',function(req,res) {
    res.render('index');
});

//conexion a mongodb y creacion de database
//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://alebrijes:latinospop@ds047040.mongolab.com:47040/jobfinder1')
.then(function() {
console.log('se ha conectado a mongodb satisfactoriamente!!');
jobsData.seedJobs();
});



app.listen(process.env.PORT,process.env.IP);
//app.listen(3000, '192.168.0.100');
//app.set('port', process.env.PORT || 8080);