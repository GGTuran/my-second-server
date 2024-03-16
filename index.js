const express = require('express');
const phones = require("./phones.json");
const app = express();
const port = 4000;

app.get('/', (req,res) =>{
    res.send("Hello from the better side of the world");
})

app.get("/phones",(req,res) =>{
    res.send(phones);
})

app.get("/phones/:id", (req,res) =>{
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
} )


app.get("/data", (req, res) =>{
    res.send("need to assign some data asap i learn how to load");
})

app.listen(port, () =>{
    console.log(`Serving from port: ${port}`)
} )