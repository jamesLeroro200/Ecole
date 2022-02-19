const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/node-api2",
            {useNewUrlParser:true, useUnifiedTopology:true},
            (err)=>{
                if(!err) console.log("mongodb connectê avec succès ...");
                else console.log("erreur de connexion db : "+err);
            })