const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

//connecting to db

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nanaindhu@55',
    port: '3306',
    database: 'Hotel_Management'
});

con.connect(function(err){
    if(err){
        console.log("error occured"+err.message);
    }else{
        console.log("connected to DB");
    }
});

//signup

app.post("/register",(req,res) => {
    console.log("hiii entered"+JSON.stringify(req.body));
    const fname = req.body.fName;
    const lname = req.body.lName;
    const email = req.body.emailId;
    const pass = req.body.pass;
    const q = "INSERT INTO users (firstName,lastName,emailId,isEmp,password) VALUES (?,?,?,?,?)";
    const val = [fname,lname,email,0,pass];
    con.query(q,val,function (err, result) {
    if (err) throw err;
    console.log("result"+JSON.stringify(result));
    res.send(result);
  });
});

app.post("/registerEmp",(req,res) => {
    const fname = req.body.fName;
    const lname = req.body.lName;
    const email = req.body.emailId;
    const pass = req.body.pass;
    const hotelid = parseInt(req.body.hotelid);
    const q = "INSERT INTO users (firstName,lastName,emailId,isEmp,hotelId,password) VALUES (?,?,?,?,?,?)";
    const val = [fname,lname,email,1,hotelid,pass];
    con.query(q,val,function (err, result) {
    if (err) throw err;
  });
});


//signin

app.post("/login",(req,res) => {
    console.log("req.body"+JSON.stringify(req.body));
    const emailId = req.body.email;
    const password = req.body.pass;
    const qr = "SELECT *FROM users WHERE emailId=? AND password=?";
    const vl = [emailId,password];
    con.query(qr,vl,function (err, result) {
    if (err){
        res.send({error:err});
    }
    if(result.length == 0){
        console.log("result length is zero")
        res.send({
            message: "wrong username and password"
        });
    }else{
        res.send(result);
       // console.log(result);
    }
  });
});

app.post("/api/hotels",(req,res) => {
    const loc = req.body.location;
    console.log("loc"+loc);
    const qr1 = "SELECT hotelName FROM hotel INNER JOIN location ON hotel.hotelId = location.hotelId AND location.city=?";
    const vl1 = [loc];
    con.query(qr1,vl1,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/api/selectRoom",(req,res) => {
    const hotel = req.body.hotelName;
    const datein = req.body.datein;
    const dateout = req.body.dateout;

    const qr2 = "SELECT room.roomnum from room where room.hotelName = ? AND room.roomnum NOT IN (SELECT reservation.roomnum from reservation where datein = ? AND dateout = ? AND hotelName=?)";
    const vl2 = [hotel,datein,dateout,hotel];

    con.query(qr2,vl2,function(err,result){
        if(err) res.send(err);
        if(result.length == 0){
            res.send({
                "message" : "rooms not avaiable"
            });
        }else{
            
            const qr3 = "INSERT INTO reservation (roomnum,hotelName,datein,dateout) VALUES(?,?,?,?)";
            const val3 = [result[0].roomnum,hotel,datein,dateout];

            con.query(qr3,val3,function(err,result){
                    if(err) throw err;
                    console.log(result);
            });

        }
        console.log("result"+JSON.stringify(result));
    });    
});

app.listen("3001",() => {
    console.log("listening on port 3001");
});