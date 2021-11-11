const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavour: String,
    quantity: Number,
    Cost: Number
})
module.exports = mongoose.model("Icecream",
    icecreamSchema)