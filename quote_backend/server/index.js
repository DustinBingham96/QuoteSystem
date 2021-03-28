const express = require("express");
var mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

//createing connection to mysql server
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mysql'
})

connection.connect()

//make all database querys below

/**
 * selects all from sales table 
 * sends result to http://localhost:3001/sales
 */
connection.query('SELECT * FROM sales', function(err, rows, fields){
    if(err) throw err
    //Sales endpoint
    app.get("/sales", (req, res) => {
    res.json(rows)
    })//end get   
})//end query


connection.end()
//end of database querys



//Generic endpoint
app.get("/", (req, res) => {
    res.send("Hello World") 
})

//end point named api
app.get("/api", (req, res) => {
    res.json({message: "Hello from node backend!"});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});