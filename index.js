const express = require("express");
const router = require("./controllers/eleveController");
const bodyParser = require("body-parser");
require("./models/dbConfig")

const app = express();

app.use(bodyParser.json());
app.use("/eleves", router);

app.listen(8080, ()=> {
    console.log("server en ecoute sur le port 8080 ...")
})