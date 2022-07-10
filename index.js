const express= require("express")
const app = express()
const cors= require("cors")
const bp= require("body-parser")
app.use(bp.json())
app.use(cors())
app.use(express.json())
const path= require("path")
const _ = require("lodash")

app.use("/",express.static(path.join(__dirname, "public")))

app.post("/add",(req,res)=>{
    let a= parseInt(req.body.a);
    let b= parseInt(req.body.b);
    let ans= _.add(a,b);
    res.send(JSON.stringify({ans:ans}))
})

app.post("/div",(req,res)=>{
    let a= parseInt(req.body.a);
    let b= parseInt(req.body.b);
    let ans= _.divide(a,b)
    res.send(JSON.stringify({ans:ans}))
})

app.post("/mul",(req,res)=>{
    let a= parseInt(req.body.a);
    let b= parseInt(req.body.b);
    let ans= _.multiply(a,b);
    res.send(JSON.stringify({ans:ans}))
})

app.post("/sub",(req,res)=>{
    let a= parseInt(req.body.a);
    let b= parseInt(req.body.b);
    let ans= _.subtract(a,b);
    res.send(JSON.stringify({ans:ans}))
})

app.listen(3000,()=>console.log("server built !"))