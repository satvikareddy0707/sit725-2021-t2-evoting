var express = require("express");
var app = express()

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Application has started on port: ", port)
})