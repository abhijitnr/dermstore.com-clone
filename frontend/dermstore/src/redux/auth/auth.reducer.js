
import { Logout, Login } from './auth.actionTypes';

let token = localStorage.getItem("token");

const initState = {
    isAuth: token ? true : false,
    token: token
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case Login:
            {
                localStorage.setItem("token", payload);
                return { ...state, isAuth: true, token: payload }
            }
        case Logout:
            {
                localStorage.removeItem("token");
                return { ...state, isAuth: false, token: null }
            }
        default:
            return state;
    }
}