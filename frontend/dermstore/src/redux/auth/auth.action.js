import axios from "axios"
import { Login, Logout } from './auth.actionTypes';

export const login = (obj) => async (dispatch) => {
    let res = await axios.post("", obj);
    dispatch({ type: Login, payload: res.data.token })
}

export const logout = () => ({ type: Logout})