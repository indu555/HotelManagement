import React, { Component} from 'react';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { useState } from "react";
import Axios from 'axios';


export default function SearchHotel(){
    const[loc,setLocation] = useState("");

    const search = () => {
          Axios.post("http://localhost:3001/api/hotels",{
            location:loc,
          }).then((response) =>{
            console.log(response);
            
          });
          
        };
        return(
            <div className="search">
            <h1>
              Search Hotel based on location
            </h1>
            <input type="text" placeholder="location..." onChange={(e) => {
              setLocation(e.target.value);
            }}/>
            <button onClick={search}>search</button>
          </div>
        );
}