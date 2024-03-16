const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req,res) =>{
    res.send("Hello from the better side of the world");
})


app.get("/data", (req, res) =>{
    res.send("need to assign some data asap");
})

app.listen(port, () =>{
    console.log(`Serving from port: ${port}`)
} )