import { LOGIN_SUCCESS } from "../actions/types";
const user = AsyncStorage.getItem('user');
const initialState = user ?
    {
        isLoggedIn: true,
        user
    } :
    {
        isLoggedIn: false,
        user: null
    };
export default auth = (state = initialState, action) => {
const { type, payload } = action;
switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        default:
            return state;
    }
}; 