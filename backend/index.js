// Forma para importar variables o funciones, cuando lo que se exporta es un objeto
const { getExperts } = require("./src/db/crud.js");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/get-experts',function(req, res){
    getExperts(function(arrayExperts){
        res.json(arrayExperts);
    }) 
})

app.get('/users',function(req, res){
    res.send('Esta es la lista de usuarios');
})

app.listen(port, () => {
    console.log("Running on port " + port);
})