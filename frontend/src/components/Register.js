import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import {Row,Col,Card, Button} from 'react-bootstrap';
function App() {

    const[fnamereg,setFnamereg] = useState("");
    const[lnamereg,setLnamereg] = useState("");
    const[emailReg,setEmailReg]=useState("");
    const[passwordReg,setPasswordReg]=useState("");
    
  
    const register = () => {
      Axios.post("http://localhost:3001/register",{
        fName:fnamereg,
        lName:lnamereg,
        emailId:emailReg,
        pass:passwordReg,
      }).then((response) => {
        console.log(response);
      });
    };
  
    return (
        <div className="Row justify-content-center">
          {/* <h1>
            Registration
          </h1>
          <label>FName</label>
          <input type="text" onChange={(e) => {
            setFnamereg(e.target.value);
          }}/>
          <label>LName</label>
          <input type="text" onChange={(e) => {
            setLnamereg(e.target.value);
          }}/>
          <label>emailId</label>
          <input type="text" onChange={(e) => {
            setEmailReg(e.target.value);
          }}/>
          <label>pasword</label>
          <input type="password" onChange={(e) => {
            setPasswordReg(e.target.value);
          }}/>
          <button onClick={register}>Register</button> */}
          <div className="Row Col-12 d-flex justify-content-center text-white">
          <Row>
              <Col>
            <input type="text" placeholder="FirstName" className="form-control" onChange={(e) => {
            setFnamereg(e.target.value);
          }}/>
            </Col>
            <Col>
            <input type="text" placeholder="LastName" className="form-control" onChange={(e) => {
            setLnamereg(e.target.value);
          }}/>
            </Col>
            <input type="text" placeholder="emailId" className="form-control" onChange={(e) => {
            setEmailReg(e.target.value);
          }}/>
            <Col>
            <input type="text" placeholder="Password" className="form-control" onChange={(e) => {
            setPasswordReg(e.target.value);
          }}/>
            </Col>
            <Col>
            <button className="btn" onClick={register}>REGISTER</button >
            </Col>
            <Col>
            <Link to={"/Login"}>login</Link>
            </Col>
            <Col>
            <Link to={"/regEmp"}>Are you an Employee?</Link>
            </Col>
            </Row>
        </div>
        </div>
    );
  }
  
  export default App;
  