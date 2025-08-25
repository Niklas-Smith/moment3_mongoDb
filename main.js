// gör så jag kan använda express
const express = require("express");
// gör så jag kan använda cors
const cors = require("cors");
// gör så jag kan använda mongoose
const mongoose = require("mongoose");
// gör så att app använder express
const app = express();
// gör so port man starta på är den som står i env filen eller 3000
const port = process.env.PORT || 3000;
// gör så att app använder cors
app.use(cors());
// gör så att app använder express,json()
app.use(express.json());
// ansluter till databasen med mongoose
mongoose.connect("mongodb://127.0.0.1:27017/moment3_mongodb").then(() =>{
console.log("Succefully connected to mongoDB!");
}).catch((err) => {
 console.log("MongoDB Failed to connect..." + err);
} 
)

// skapar ett mongoose schema som bestämer uppbyggnade av min collection (mongosse table)
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

// skapar en model som använder WorkexperienceSchema med namn Workexperience
const Workexperience = mongoose.model("Workexperience" , WorkexperienceSchema);


// skapar ett get begäran som hämter alla alla job som finns i collection Workexperience (det blir Workexperiences i compass) (api)
app.get("/api/jobs", async(req, res) => {
try{
let result = await Workexperience.find({});

return res.json(result);

} catch(err){

    return res.status(500).json(err)
}

});

// skapar ett post begäran som gör att man kan lägga till ett nytt job  i collection Workexperience (api)
app.post("/api/jobs" , async(req, res) =>{
try {

let result = await Workexperience.create(req.body);


 return res.json(result)
}  catch(err) {
return res.status(400).json(err);

}

});

// skapar ett put begäran som gör att man kan uppdatera ett job i collection Workexperience (api)
app.put("/api/jobs/:id" , async(req,res) => {
const jobid = req.params.id;


let companyname = req.body.companyname;
let jobtitle = req.body.jobtitle;
let location = req.body.location;

try{
let result = await Workexperience.updateOne({_id: jobid}, {$set: {companyname,jobtitle,location} }  )
return res.json(result)
} catch(err) {

return res.status(400).json(err)

}


})


// skapar ett delete begäran som gör att man kan ta bort ett job i collection Workexperience (api)
app.delete("/api/jobs/:id" , async(req, res) => {
const jobid = req.params.id;

try{
  let result = await Workexperience.deleteOne( {_id: jobid} )
 
  return res.json(result)
} catch(err) {

return res.status(400).json(err)

}


})



// starta appen och på skriv ut  server is on port + vilken port

app.listen(port, () => {
console.log("server is on port: " + port)

});





/*
{
  "companyname" : "test",
  "jobtitle": "test2",
    "location": "test3"
  
}



app.put("/api/jobs/:id" , async(req,res) => {
const jobid = req.params.id;

/*
let companyname = req.body.companyname;
let jobtitle = req.body.jobtitle;
let location = req.body.location;
*/

/*
try{
let result = await Workexperience.updateOne({_id: jobid}, {$set: req.body }  )
return res.json(result)
} catch(err) {

return res.status(400).json(err)

}


})




*/