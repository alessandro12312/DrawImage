const express = require('express');
const app = express();
const mssql = require("mssql");
 
// Get request
app.get('/', function (req, res) {
 
    // Config your database credential
     const config = {
        user: 'TEST',
        password: 'tiger',
        server: '192.168.172.18',
        database: 'TEST'
    };
 
    // Connect to your database
    mssql.connect(config, function (err) {
        console.log("connessione riuscita")
        var request = new mssql.Request();
 
        // Query to the database and get the records
        // request.query('select * from student',
        //     function (err, records) {
 
        //         if (err) console.log(err)
 
        //         // Send records as a response
        //         // to browser
        //         res.send(records);
 
        //     });
    });
    });
 
var server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});
