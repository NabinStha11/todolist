const express = require("express");
const { options } = require("nodemon/lib/config");
const bodyparser= require("body-parser")
const date=require(__dirname + "/date.js")
const app= express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');
var items=""
var newItem=["FoodStore","BuyFood","EatFood"]
var workList=[];
app.get("/", function(req,res){
    const day =date.getDate()
    res.render("list", {listTitle :day,  listItem:newItem})
})

app.post("/",function(req,res){
    // console.log(req.body)
    items=req.body.newList
    if(req.body.list === "Work List"){
        workList.push(items)
        res.redirect("/wor k")
    }else{
    newItem.push(items)
    res.redirect("/")
    }
})

app.get("/work", function(req,res){
    res.render("list", {listTitle:"Work List" , listItem: workList})
})
app.get("/about", function(req,res){
    res.render("about")
})
// app.post("/work", function(req,res){
//     items=req.body.newList
//     workList.push(items)
//     res.redirect("/work")
// })
app.listen(5000, function(){
    console.log("The server is running in port 3000")
})
