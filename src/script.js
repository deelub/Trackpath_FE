
import express from "express";
import mysql from "mysql2/promise"; //imports the promises vs manuallly programming the promises

    const submit_btn= document.getElementsByName("submit-form") //submit button for
    const inputusername= username.value
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
            "SELECT * FROM users WHERE username LIKE inputusername",
            ['%{search}%']
        );
        res.json(rows);
    } catch(err){
        res.status(500).json({ error: "Database query failed"});
    }
});



const name = document.getElementsByName("p_name").value;
const surname = document.getElementsByName("surname").value;
const email= document.getElementsByName("email_ad").value;
const username = document.getElementsByName("username").value;
const password= document.getElementsByName("password").value;
const emailtest = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

///LOGIN PAGE VALIDATION:
//username : 1.no special characters
//password via the DB  -- encryption(restframework) problem ?

//LOGIN PAGE VALIDATION

function Login_Validation (){
    submit_btn.addEventListener("click", () =>{

        if (name.length>40){                //length validation
            alert("Name is invalid")
        }elif (surname.length>40){
            //try release new thing
             alert("Name is invalid")
        }

        if (!emailtest.test(email)){      //email address validation
            alert("Invalid email address")
        }else{
            //return message
        }

        //Password validation
        if (/[a-zA-Z]/.test(password)){

            if(/[0-9]/.test(password)){                //numerical presence check in password
                
              if (/^[!@#$%^&*()_+\-={}\[\]|:;"'<>,.?/~`]+$/.test(password)) {
                    console.log("Valid: only allowed password special characters ✅");  // display other message
              } else {
                    console.log("Password does not cpntain any special characters");
                }
             }else{
                console.log("Password should contain a number")

        let password = "@#$%&*!";

  
            }
        }else{
           //go to the next page
        }


    })
}



app.listen(5000, () => console.log("Server is running on http://localhost: 5000"));