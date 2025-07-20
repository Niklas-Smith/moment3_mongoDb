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


const WorkexperienceSchema = new mongoose.Schema({
companyname : {
 type: String, 
 required :  [true, "you need to add companyname to post"]

},
jobtitle  : {
 type: String, required : [true, "you need to add jobtitle to post"]

},
location: {
 type: String, required : [true, "you need to add location to post"]


}
}); 


const Workexperience = mongoose.model("Workexperience" , WorkexperienceSchema);


app.get("/api/jobs", async(req, res) => {
try{
let result = await Workexperience.find({});

return res.json(result);

} catch(err){

    return res.status(500).json(err)
}

});


app.post("/api/jobs" , async(req, res) =>{
try {

let result = await Workexperience.create(req.body);


 return res.json(result)
}  catch(err) {
return res.status(400).json(err);

}

});





app.listen(port, () => {
console.log("server is on port: " + port)

});





/*
{
  "companyname" : "test",
  "jobtitle": "test2",
    "location": "test3"
  
}




*/