# Express-Server-with-MySQL-Database

This is a simple (may be the simplest) Express server with MySQL database. 

## Option 1: Clone and Run
- Clone or download the repository.
- Open the terminal and navigate to the project directory.
- Make sure to change the database credentials in the `index.js` file.
- Run the following command to start the server:
    ```bash
        npm install
        node index.js
    ```

## Option 2: Setup the project from scratch
- Install Node.js and MySQL on your machine.
- Create an npm project and install "express", "mysqls", and "cors" packages.
    ```bash
    npm init -y
    npm install express mysql2 cors
    ```

### Creating the server
- Create a new file called `index.js` and add the following code:
    ```javascript
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

    ```
- Run the server using the following command:
    ```bash
    node index.js
    ```
- Open the browser and navigate to `http://localhost:3000/` to see the "Hello World!" message.
- To get all employees from the database, navigate to `http://localhost:3000/employees`.
