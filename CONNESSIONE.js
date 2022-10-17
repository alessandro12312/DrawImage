var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'TEST',
        password: 'tiger',
        server: '192.168.172.18', 
        database: 'sagex3p' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

            
        });
    });

var server = app.listen(5000, function () {
    console.log('Server is running..');
});