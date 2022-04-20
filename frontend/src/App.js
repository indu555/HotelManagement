import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import {Row,Col,Card, Button} from 'react-bootstrap';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import Register from './components/Register.js';
import Login from './components/Login';
import RegisterEmp from './components/RegisterEmp';
import SearchHotel from './components/SearchHotel';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Register />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/regEmp" element={<RegisterEmp/>} />
        <Route path="/searchHotel" element={<SearchHotel/>} />
      </Routes>
    </BrowserRouter>
  );
}
//ReactDOM.render(<App />, document.getElementById("root"));




// function App() {
//   return (
//     <Col sm = {6}>
//       <Card style={{width:"35rem",height:"40rem"}}>
//         <Card.Title>
//           Login Form
//         </Card.Title>
//       {/* <div className="row justify-content-center">
//         <div className="row col-12 d-flex justify-content-center text-white"> */}
//         <Card.Body>
//             <Row>
//               <Col>
//             <input type="text" placeholder="name" className="form-control" />
//             </Col>
//             <Col>
//             <input type="text" placeholder="name" className="form-control"/>
//             </Col>
//             <input type="text" placeholder="name" className="form-control"/>
//             <Col>
//             <input type="text" placeholder="name" className="form-control"/>
//             </Col>
//             <Col>
//             <button className="btn">REGISTER</button >
//             </Col>
//             </Row>
//             </Card.Body>
//           </Card>
//           </Col>
         
//     //   </div>
//     // </div>
//   );
// }

//export default App;
