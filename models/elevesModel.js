const mongoose = require("mongoose");

const elevesModel = mongoose.model("api-node2",
{
    nom :{
        type   : String,
        require: true
    },

    penom :{
        type   : String,
        require: true
    },

    message :{
        type   : String,
        require: true
    },

    date :{
        type : Date,
        default: Date.now
    }
},
    "eleves"
)

module.exports = { elevesModel };