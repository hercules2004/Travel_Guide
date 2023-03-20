const express=require("express");
var bodyParser = require("body-parser");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const fs=require("fs");
const async=require("async");
//const bodyParser=require("body-parser");
const cors=require("cors");
const router= express.Router();
//const Place  = require("../../src/models/registers"); 
//console.log(Place.find({}));
const { Tourist, Place,Poll } = require("../../src/models/registers");  
   
 

 
 

router.get('/tourscreen/:id',async (req,res)=>{
    const id=req.params.id;
    const place= await Place.find({_id: id});
    console.log(place);
    let destination, details, friends,name, email, phone_number;
    var func= async()=>{
        try{
         // console.log(name1);
  
          // const Friend= await Tourist.find({name: name1});
          console.log("pond");
          destination=place[0].place;
          details=place[0].details;
          friends=place[0].friends;
          name=friends[0].name;
          email=friends[0].email;
          phone_number=friends[0].phone_number;
          console.log(name, email, phone_number,"hshfhjsfs");
        }catch(err){
            console.log(err);
        }
      }
      func(); 
      console.log(name);
    // console.log(place); 
    // const name=place.name
    // const details= place.details; 
    // const friendsName= place.friends[0].name;   
//    const friendsEmail= place.friends[0].email;   
//    const friendsPhone_number= place.friends[0].phone_number;   
 
res.render("tourscreen", {
    destination,
    details,name,email,phone_number
  });
})  

// router.post('/tourscreen',async(req,res)=>{
//   console.log(req.body.details);
//   res.render("tourscreen");
// })
  
router.get('/dashboard/:name',async (req,res)=>{
  const id=req.params.name;
  console.log(id);
  const place= await Place.find({_id: id});
 // const group= place[0].friends;
 // group.push("wdcn");
  //console.log(group);
  let destination, details, friends,name, email, phone_number;
  var func= async()=>{
      try{
       // console.log(name1);

        // const Friend= await Tourist.find({name: name1});
        console.log("pond");
        destination=place[0].place;
        details=place[0].details;
        friends=place[0].friends;
        name=friends[0].name;
        email=friends[0].email;
        phone_number=friends[0].phone_number;
        console.log(name, email, phone_number,"hshfhjsfs");
      }catch(err){
          console.log(err);
      }
    }
    func(); 
    res.render("tourscreen", {
      destination,
      details,name,email,phone_number
    });
}) 



module.exports = router;   