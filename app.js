const express=require("express")
const app=express();
const mongoose= require("mongoose")
const port=process.env.PORT || 9090
const Employee=require("./models/Employee")
//midleware
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false").then(data=>{
    console.log("Mongodb is connected successfully")
}).catch(err=>{
    console.log(err);
})
//post data
app.post("/api/save",(req, res)=>{
    const employee= new Employee({
        fullName:req.body.fullName,
        birtDate:req.body.birtDate,
        age:req.body.age,
        address:req.body.address,
        city:req.body.city,
        zipcode:req.body.zipcode,
        phoneNo:req.body.phoneNo,

    })
    employee.save().then(data=>{
        res.json({message:"success", data:data})
    })
})
//get data
app.get("/api/get", (req, res)=>{
    Employee.find().then(data=>{
        res.json({message:"success", data:data})
    }).catch(err=>{
        console.log(err)
    })
})
// delete operation
app.delete("/api/delete/:id", (req, res) => {

    const { id } = req.params;
  
    Employee.find({ _id: id }).remove().then((data) => {
  
        res.json({ message: "success", data: data });
  
      }).catch((err) => {
  
        console.log(err);
  
      });
  
  });

app.listen(port, ()=>{
    console.log("your server is started at port "+port)
})