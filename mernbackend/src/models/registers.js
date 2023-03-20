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

const placesSchema = new mongoose.Schema({
    place: {
        type:String,
        required: true
    },
    transport: {
        type:String,
        required: true
    },
    // myfile: {
    //     type:String,
    //     required: true
    // },
    friends: [{
        name: { type: String, required: true },
        email: { type: String, required: true  },
        phone_number: { type: Number, required: true  }
    }],
    details: { 
        type:String,
       required: true,
    }

    
        //  friends: {
    //      type:Number,
    //      required: true,
    //      unique: true
    //  }
   
    // password: {
    //     type:String,
    //     required: true
    // }
    
})

const votingSchema = new mongoose.Schema({
    Question: {
        type:String,
        required: true
    },
    option: [{
        option1: { type: Number, required: true },
        option2: { type: Number, required: true  },
        option3: { type: Number, required: true  },
        option4: { type: Number, required: true  },
        option5: { type: Number, required: true  } 
    }],

});

touristSchema.pre ("save",async function(next){
    if(this.isModified("password")){

       // console.log(`the current password is ${this.password}`);
        this.password= await bcrypt.hash(this.password, 10);
        console.log(`the current password is ${this.password}`);

    }
    next();
})

const Tourist = new mongoose.model("Tourist", touristSchema);
const Place = new mongoose.model("Place", placesSchema);
const Poll=new mongoose.model("Poll", votingSchema);
module.exports= { 
    Tourist,Place,Poll
}

