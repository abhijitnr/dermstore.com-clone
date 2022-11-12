import { AddCart, CartDecQty, CartIncQty, GetCart, RmoveCart } from "./cart.actionType"


const initState = {
    cartItems: [],
    price: 0
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case GetCart:
            {
                let price = 0;
                payload.map((e, i) => price += (e.price * e.quantity))
                return { cartItems: payload, price: price }
            }

        case CartIncQty:
            {
                return {
                    cartItems: state.cartItems.map((e) => {
                        if (e._id == payload.id)
                            return { ...e, quantity: e.quantity + 1 }
                        else return e;
                    }),
                    price: state.price + payload.price
                }
            }
        case CartDecQty:
            {
                return {
                    cartItems: state.cartItems.map((e) => {
                        if (e._id == payload.id)
                            return { ...e, quantity: e.quantity - 1 }
                        else return e;
                    }),
                    price: state.price - payload.price
                }
            }

        case AddCart:
            return {
                price: state.price + payload.price,
                cartItems: [...state.cartItems, payload.product]
            }

        case RmoveCart:
            return {
                price: state.price - payload.price,
                cartItems: [...state.cartItems, payload.product]
            }


        default:
            return state;
    }
}