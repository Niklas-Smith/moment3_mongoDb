const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/moment3_mongodb").then(() =>{
console.log("Succefully connected to mongoDB!");
}).catch((err) => {
 console.log("MongoDB Failed to connect..." + err);
} 
)



app.listen(port, () => {
console.log("server is on port: " + port)

})


