const express= require("express");
var bodyParser= require("body-parser");
const app= express();
const path = require("path");
const hbs= require("hbs");
const bcrypt= require("bcryptjs");
const sessions= require("express-session");
const cookieParser= require("cookie-parser");


require("./db/conn");
const Tourist =require("./models/registers");
const { Router } = require("express");
const port= process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

// app.use(bodyParser.json());
//
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(cookieParser());
// const securePassword = async (password)=>{

//  
//     console.log(hashpassword);
//     console.log(matchpassword);
// }

// securePassword("ash123");


app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/index", (req, res)=>{
    res.render("index");
})

app.get("/login", (req, res)=>{
    res.render("login");
})



app.get("/dashboard", (req, res)=>{
    res.render("dashboard");
})


app.post("/register", async (req, res)=>{
    try{

        const password= req.body.password;
        const cpassword= req.body.confirm_password;

        if(password===cpassword){
            const registerTourist= new Tourist({
                name: req.body.name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                password: req.body.password,
            })
           registerTourist.save();
           res.render("login");
        //    registerTourist.save();
        
        }else{
            res.send("Passwords do not Match");
        }
    }catch(error){
        res.status(400).error;
    }
})
app.post("/login", async(req, res)=>{
    try{
        console.log("boo", req.body.email, req.body.password);

        const email= req.body.email; 
        const password= req.body.password;        
        const useremail= await Tourist.findOne({email:email});
        const isMatch= await bcrypt.compare(password, useremail.password);
   

        if(isMatch){
            res.render("dashboard",{
                "username":useremail.name,
                "userEmail": useremail.email,
                "userPhone": useremail.phone_number,
            });
            app.get("/profile", (req, res)=>{
                res.render("profile",{
                    "username":useremail.name,
                    "userEmail": useremail.email,
                    "userPhone": useremail.phone_number,
                });
            })
          
        }
        else{
            res.send("Passwords do not match");
        }


    }catch(error){
        console.log(error)
        const email= req.body.email; 
        res.send(email);
    }
})




app.listen(port,()=>{
    console.log("Server has been connected");
})

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
