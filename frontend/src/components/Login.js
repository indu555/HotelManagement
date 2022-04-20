import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Axios from 'axios';

function Login() {
    const[emaillogin,setemaillogin]=useState("");
    const[passwordlogin,setpasswordlogin]=useState("");
    const login = () => {
    
    console.log(emaillogin);
        Axios.post("http://localhost:3001/login",{
          email:emaillogin,
          pass:passwordlogin,
        }).then((response) =>{
          console.log(response);
          <Link to={"/searchHotel"} />
        });
        
      };

      return (
          <div className="login">
            <h1>
              login
            </h1>
            <input type="text" placeholder="email..." onChange={(e) => {
              setemaillogin(e.target.value);
            }}/>
            <input type="password" placeholder="password..." onChange={(e) => {
              setpasswordlogin(e.target.value);
            }}/>
           
            <button onClick={login}>login</button>
           
          </div>
      );
}

export default Login;



