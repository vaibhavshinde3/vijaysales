var express=require('express');
var app=express();
app.get("/",(req,res)=>{

    res.send(
        "<h1>Vijay sales</h1>"
        + "<hr/>"
        +"<h3>Smart devices for sales</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobiles</li>"
        +"<li>Halolens</li>"
        +"<li> Smart watches</li>"
        +"<li>gaming consoles</li>"
        +"</ol>"
    );
}); 

var server = app.listen(9000);
console.log("Vijay sales online shopping application running on 9000");