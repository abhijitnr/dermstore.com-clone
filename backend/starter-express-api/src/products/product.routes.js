const express = require("express");
const product = require("./product.model");


const app = express.Router();


app.get("/", async (req, res) => {
    let prd = await product.find();

    let q = req.query.q;
    if (q)
        res.send(prd.filter((e, i) => e.name && e.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())))
    else
        res.send(prd);

})

app.get("/:id", async (req, res) => {
    let id = req.params.id;
    let prd = await product.findOne({ id: id });
    res.send(prd);

})


module.exports = app;