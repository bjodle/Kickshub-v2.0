const mongoose = require('mongoose')
const Schema = mongoose.Schema

//enkel schema for å lage Shoes
const shoeSchema = new Schema({
    
    model: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    brand: {
        type:String,
        required:true
    },
    articleNumber: {
        type:String,
        required:true
    }
    
}, {timestamps: true });

const Shoe = mongoose.model('Shoe', shoeSchema);
module.exports = Shoe