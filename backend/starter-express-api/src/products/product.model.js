const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: Number },
    description: { type: String, },
    price: { type: Number, required: true }
}, {
    versionKey: false,
    timestamps: true
});

const product = mongoose.model("products", productSchema);

module.exports = product;