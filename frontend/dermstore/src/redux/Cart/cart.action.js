import axios from "axios";
import { AddCart, CartDecQty, CartIncQty, GetCart, RmoveCart } from "./cart.actionType";


let url = `https://wild-polo-shirt-calf.cyclic.app/carts`;
// let url = `http://localhost:3000/carts`;

export const getCarts = (token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token;
    let res = await axios.get(url)
    dispatch({ type: GetCart, payload: res.data })
}

export const addCart = (id, price, token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token;
    let res = await axios.post(url, {
        product: id,
        price: price
    });
    dispatch({ type: AddCart, payload: { product: id, price: price, } })
}

export const removeCart = (id, token) => async (dispatch) => {
    console.log(id, token)
    axios.defaults.headers.common["token"] = token + " " + id;
    let res = await axios.delete(url, { id: id });
    dispatch({ type: RmoveCart, payload: { id: id } })
}

export const cartIncQty = (id, price, qty, token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token;
    console.log(qty)
    let res = await axios.patch(url, { product: id, quantity: qty + 1, uid: token });
    dispatch({ type: CartIncQty, payload: { id: id, price: price, } })
}

export const cartDecQty = (id, price, qty, token) => async (dispatch) => {
    axios.defaults.headers.common["token"] = token + " " + id;
    let res = await axios.patch(url, { product: id, quantity: qty - 1, uid: token });
    dispatch({ type: CartDecQty, payload: { id: id, price: price, } })
}
