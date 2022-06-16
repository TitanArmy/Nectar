import { LOGIN_SUCCESS } from "../actions/types";

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export default login = user => {
    return ({
        type: LOGIN_SUCCESS,
        payload: user
    })
}