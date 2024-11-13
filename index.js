var mysql = require('mysql2');
const express = require('express');

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/employees', (req, res) => {
    con.query("SELECT * FROM employees", function(err, result, fields) {
        if(err) throw err;
        res.send(result);
    }
    );
});

app.listen(port, () => {
    console.log(`Express server running: http://localhost:${port}`);
});
