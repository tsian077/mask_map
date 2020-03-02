const express = require('express')

var app = express()

app.use(express.static(__dirname + "/"));
app.get('/', function (req, res) {
    // res.sendFile("D:/MachineLearing/Machine_Project/node/node_midderware/index.html");

    res.sendFile("D:/Web/mask_map/leaflet.html")
    // res.sendFile("leaflet.html")
    // res.send("hello")
  });

var port = 3000 || preocess.env.PORT
app.listen(port,(req,res)=>{
    console.log('port listen on 3000');
});