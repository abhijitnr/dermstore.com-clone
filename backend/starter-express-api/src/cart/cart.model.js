const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product: {
        type:Object,
        required: true
    },
    user: {
        type: String,
        // required: true
    },
    quantity: { type: Number, required: true },
    id:{
        type: Number
    }
}, {
    versionKey: false,
    timestamps: true
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;