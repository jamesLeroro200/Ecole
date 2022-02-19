const router      = require("express").Router();
const { elevesModel } = require("../models/elevesModel");
const objectId = require("mongoose").Types.ObjectId;

router.get("/", (req, res)=>{
    elevesModel.find((err, docs)=>{
        if(!err) {
                    res.status(200).send(docs);
                    console.log(docs);
                 }

        else console.log("erreur :" +err);
    })
})

router.post("/", (req, res)=>{
    const eleve = new elevesModel({
        nom    : req.body.nom,
        prenom : req.body.prenom,
        message: req.body.message
    
    })

    eleve.save((err, docs)=>{
        if(!err) {
            res.status(200).send(docs);
            console.log(docs);
        }
        else console.log("erreur d'ajout: "+err);
    });
})


router.put("/:id", (req, res)=>{

    if(!objectId.isValid(req.params.id)) return res.status(404).send("Id inconnu : "+req.params.id);
    
    const eleveModified = {
        nom    : req.body.nom,
        prenom : req.body.prenom,
        message: req.body.message
    }

    elevesModel.findByIdAndUpdate(req.params.id,
        {$set : eleveModified},
         {new : true},
        (err, docs)=>{
            if(!err){ 
                res.status(200).send(docs);
                console.log(docs);
            }
            else console.log("erreur de modification "+err);
        })
})


router.delete("/:id", (req, res)=>{
    if(!objectId.isValid(req.params.id)) return res.status(404).send("Id inconnu : "+req.params.id);

    elevesModel.findByIdAndDelete(req.params.id, (err, docs)=>{
        if (!err) {
            console.log(docs);
            res.status(200).send(docs);
        }
        else console.log(" erreur de suppression : "+err);
    })
})

module.exports = router;