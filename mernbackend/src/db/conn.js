const mongoose= require("mongoose");
const mongoString="mongodb+srv://atrishi:atrishi@cluster0.jj3zjxf.mongodb.net/Travel?retryWrites=true&w=majority"
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("hi");
});

database.once("connected", () => {
  console.log("Database Connected");
}); 