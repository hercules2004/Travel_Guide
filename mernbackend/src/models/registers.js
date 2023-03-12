const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");

const touristSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    phone_number: {
        type:Number,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }
    
})

touristSchema.pre("save",async function(next){
    if(this.isModified("password")){

       // console.log(`the current password is ${this.password}`);
        this.password= await bcrypt.hash(this.password, 10);
        console.log(`the current password is ${this.password}`);

    }
    next();
})

const Tourist = new mongoose.model("Tourist", touristSchema);
module.exports= Tourist;

