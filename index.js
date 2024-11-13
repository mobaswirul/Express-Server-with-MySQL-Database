    // Importing the required packages
    const mysql = require('mysql2');
    const cors = require('cors');
    const express = require('express');
    const app = express();

    // Setting up the express server
    app.use(cors());
    const port = 3000;
    app.use(express.json());

    // Connecting to the MySQL database
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin",
        database: "hr"
    });

    con.connect(function(err) {
        if(err) throw err;
        console.log("Connected!"); 
    });

    // Creating a simple hello world route
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });


    // Creating a route to get all employees from the database
    app.get('/employees', (req, res) => {
        con.query("SELECT * FROM employees", function(err, result, fields) {
            if(err) throw err;
            res.send(result);
        }
        );
    });

    // Starting the server
    app.listen(port, () => {
        console.log(`Express server running: http://localhost:${port}`);
    });
