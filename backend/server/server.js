const express = require("express")
const App = express()

App.get('/', function (req, res) {
    res.send("<h1>Hello world</h1>")
})

App.listen(4000, function (req, res) {
    console.log("server is running")
})