const express = require("express");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.listen(PORT || process.env.PORT, ()=>{
    console.log(`Backend server ${PORT ?? process.env.PORT}`)
});