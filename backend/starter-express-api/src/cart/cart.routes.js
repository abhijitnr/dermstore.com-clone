const express = require("express");
const Cart = require("./cart.model");
const Product = require("../products/product.model")
const User = require("../users/user.model")


const Auth = async (req, res, next) => {
    let { token } = req.headers;

    req.userId = token;
    next();

}

const app = express.Router();
app.use(Auth);


app.get("/", async (req, res) => {
    let { token } = req.headers || req.userId;

    let carts = await Cart.find({ user: token })
    res.send(carts);
});



app.post("/", async (req, res) => {
    let id = req.userId || req.headers.token;
    console.log(id, req.body)
    try {

        // let item = await Cart.create({      ...req.body,        })
        let b = await Product.findOne({ id: req.body.product })
        let cart = await Cart.create({
            product: b,
            user: id,
            quantity: req.body.quantity,
            id: b.id
        })
        res.send(cart);

    }
    catch (e) {
        res.send(e);
    }

})

app.delete("/", async (req, res) => {
    let [uid, id] = req.userId && req.userId.split(" ");
    // console.log(uid, id)
    try {

        let cart = await Cart.findOneAndDelete({ id: id, user: uid })
        console.log(cart)
        res.send(cart);
    }
    catch (e) {
        res.send(e);
    }

})


// console.log(c)


app.patch("/", async (req, res) => {
    let id = req.userId;
    try {
        let c = await Cart.findOne({ id: req.body.product, user: req.body.uid })
        let cart = await Cart.findByIdAndUpdate(c._id, { quantity: req.body.quantity })
        res.send(cart);
    }
    catch (e) {
        res.send(e);
    }

})

module.exports = app;