const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavour: {type:String, required:true},
    quantity: { type: Number, min: 1, max: 30, default: 0 },
    Cost: { type: Number, min: 5, max: 70, default: 0 },
});
module.exports = mongoose.model("Icecream",icecreamSchema)