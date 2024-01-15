const mongoose = require("mongoose")

const PulseProd = mongoose.model("PulseProd", new mongoose.Schema({
    title: String,
    desc: String,
    ingredient: String,
    price: Number,
    img: String,
}))

module.exports={PulseProd}