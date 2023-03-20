const express = require("express");
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
const routes= require('../public/js/routes');




require("./db/conn");
//  const Place =require("./models/registers2");
const { Tourist, Place,Poll } = require("./models/registers");

const router = require("express").Router();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//const jspath= path.join(__dirname, "../../")

app.use(express.static('public'));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
//app.use('/js', express.static(__dirname + './public/js'));
// app.use(bodyParser.json());
//
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// const securePassword = async (password)=>{

//
//     console.log(hashpassword);
//     console.log(matchpassword);
// }

// securePassword("ash123");

// app.get("/", (req, res) => {
//   router.get('/tourscreen', function(req, res, next) {
//     // res.render('layout', {title:Express});
//     res.render("tourscreen");
//     //res.send('respond with a resource');
//   });
//   res.render("index");
// });

app.use('/', routes);
app.get("/index", (req, res) => {
  res.render("index");
});
app.get('/',(req,res)=>{
  res.render("index");
})

// app.get("/poll", (req, res) => {
//   res.render("poll");
// });

router.get('/tourscreen', async function(req, res, next) {
  // res.render('layout', {title:Express});
 // const destination=Place.find({})
  res.render("tourscreen");
  //res.send('respond with a resource');
});

// app.get(`/tourscreen`, (req, res) => {
 //   $("checkbox").attr("href",'?place=') 
 //console.log(place);

//   res.render("tourscreen");
// });

app.get("/votingpoll", async(req,res)=>{
//   res.send("Hello");
//   let data= await Poll.find({});

//  // const totalvotes=Object.values(data[0].option[0]).reduce((total,n)=> total+=n,0);
//   const totalvotes= (data[0].option[0].option1+data[0].option[0].option2+data[0].option[0].option3+data[0].option[0].option4+data[0].option[0].option5);
//   console.log(totalvotes ); 
  res.render("votingpoll");
});
 
app.get("/tourscreen", (req, res) => {
  res.render("tourscreen");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.get("/profile", (req, res)=>{
//      res.render("profiel");
//      })

app.get("/dashboard", async (req, res) => {
  //res.render("dashboard");
  var func = async () => {
    let p;
    await Place.find({})
      .then((x) => {
        p = x;
      })
      .catch((y) => {
        console.log(y);
        console.log("xhdfsd");
      });
    return p;
  };
  let p = await func();
  console.log(p);
  Tourist.find({})
    .then((a) => {
      res.render("dashboard", { p, a });
     // console.log(p, a);
    })
    .catch((b) => {
      console.log(b);
    });
});

// const newQuestion = new Poll({
//   Question: "Which Transport to use?",
//   option: [{
//       option1: 0,
//       option2: 0,
//       option3: 0,
//       option4: 0,
//       option5: 0
//   }],
// }); 

//   newQuestion.save();


app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirm_password;

    if (password === cpassword) {
      const registerTourist = new Tourist({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
      });
      registerTourist.save();
      res.render("login");
      //    registerTourist.save();
    } else {
      res.send("Passwords do not Match");
    }
  } catch (error) {
    res.status(400).error;
  }
});
app.post("/login", async (req, res) => {
  try {
    console.log("boo", req.body.email, req.body.password);

    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Tourist.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, useremail.password);

    if (isMatch) {
      res.render("index", {
        username: useremail.name,
        userEmail: useremail.email,
        userPhone: useremail.phone_number,
      });
      app.get("/profile", (req, res) => {
        res.render("profile", {
          username: useremail.name,
          userEmail: useremail.email,
          userPhone: useremail.phone_number,
        });
      });
    } else {
      res.send("Passwords do not match");
    }
  } catch (error) {
    console.log(error);
    const email = req.body.email;
    res.send(email);
  }
});

app.post("/tourscreen", async (req, res) => {
  try {
 //   console.log(req.body.friends);
    let name1,name,email,phone_number;
    name1=req.body.friends;
    console.log(name1);
  const Friend= await Tourist.find({name: name1});
  //  console.log(Friend[0].phone_number);
   console.log(Friend,"sfre");
    var func= async()=>{
      try{
       // console.log(name1);

        // const Friend= await Tourist.find({name: name1});
        console.log("pond");
        name=Friend[0].name;
        email=Friend[0].email;
        phone_number=Friend[0].phone_number;
        console.log(name, email, phone_number,"hshfhjsfs");
      }catch(err){
          console.log(err);
      }
    }
    console.log("Life sucks");
    func();
  console.log(name);
//       let name2;
    
//       name2=Friend.name;
//       return name2;
// //     console.log("hbgjuv");
    
// //  };
// // let name2=await func();
// //    console.log(name2);
    // console.log(req.body.place,req.body.details);
    const destination = req.body.place;
    const transport = req.body.transport;
    const description = req.body.details;
    console.log("plzzz");

    const newPlace = new Place({
      place: req.body.place,
      transport: req.body.transport,
      // myfile: req.body.myfile,
      friends:[
          {
            name:  name,
            email: email,
            phone_number: phone_number
          }
      ],
      details: req.body.details,
      // friends: req.body.friends
    });

    newPlace.save();

    res.render("tourscreen", {
      destination,
      description,name,email,phone_number,transport
    });
    //    registerTourist.save();

    console.log("hi");
  } catch (error) {
    //  res.status(400).error;
    console.log("there is error");
  }
});

// const registerTourist= new ({
//     name: "atrishi",
//     email: "atrishijha@gmail.com",
//     phone_number: 658864,
//     password: "cdcewcc"
// })
// registerTourist.save();

app.listen(port, () => {
  console.log("Server has been connected");
});

// const oneDay= 1000*60*60*24;

// app.use(sessions({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false
// }));

// app.get('/profile',(req,res) => {

//     console.log("bla", session.userid)
//     if(session.userid){
//         res.send("Welcome User <a href=\'/'>click to logout</a>");
//     }else
//     res.sendFile('views/index.html',{root:__dirname})
// });
