const mongoose= require("mongoose");
const mongoString="mongodb+srv://atrishi:atrishi@cluster0.jj3zjxf.mongodb.net/TravelGuide?retryWrites=true&w=majority"
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});