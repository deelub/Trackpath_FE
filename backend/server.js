
const express = require("express");
const mysql= require ("mysql2");
const cors = require ("cors");

const app = express ();
app.use(cors());
app.use(express.json());

//connection to sql
const db= mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "Christelle#6",
    database: "trackpathDB"
});

db.connect(err => {
    if (err)
 throw err;
console.log("Connected to MySql");
});

//uisng API endpoints
//connecting to server points


//Creating DB table

