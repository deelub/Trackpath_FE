import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from "react";

function App(){
  const [ users, setUsers] = useState ([]);
  const [name, setName] = useState("");
  const[surname, setSurname]= useState("");
  const[email, setEmail] = useState ("");

  useEffect (() => {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/users",  {
      method : "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ name, email}),
    });
  setName("");setSurname("");setEmail("");
};
};


export default App;
