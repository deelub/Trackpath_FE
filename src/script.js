
import express from "express";
import mysql from "mysql2/promise"; //imports the promises vs manuallly programming the promises

    const submit_btn= document.getElementsByName("submit-form")
    const username=document.getElementsByName("username")
    const pw= document.getElementsByName("password")
    const app= express();
const db= await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'password',
    database: "testdb"
});

app.get('/users', async(req,res) => {
    try{
        const search = req.query.name || '';
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE usernaame LIKE ?",
            ['%{search}%']
        );
        res.json(rows);
    } catch(err){
        res.status(500).json({ error: "Database query failed"});
    }
});

///LOGIN PAGE VALIDATION:
//username : 1.no special characters
//password via the DB

//LOGIN PAGE VALIDATION

function Login_Validation (){
   

    submit_btn.addEventListener("click", () =>{

    })
}



app.listen(5000, () => console.log("Server is running on http://localhost: 5000"));