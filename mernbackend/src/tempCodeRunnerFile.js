const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/login", (req, res)=>{
    res.render("login");
})

// app.get("/tourist", (req, res)=>{
//     res.render("register");
// })

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
           res.render("index");
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
             console.log("snjsaj");
        const email= req.body.email;
        const password= req.body.password;
