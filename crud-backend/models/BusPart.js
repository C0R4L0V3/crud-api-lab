const mongoose = require('mongoose')


//place holder name for now
const BusPartsSchema = mongoose.Schema({

    itemName: String,
    brand: String,
    img: String,
    cost: Number,
    link: String,
    hasBought: Boolean,

});

const BusParts = mongoose.model('BusParts', BusPartsSchema)

module.exports = BusParts
