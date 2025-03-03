import express from "express";
import bodyParser from "body-parser";

const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.listen(PORT || process.env.PORT, ()=>{
    console.log(`Backend server ${PORT ?? process.env.PORT}`)
});