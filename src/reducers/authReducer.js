// src/reducers/authReducer.js

const initialState = {
    isAuthenticated: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isAuthenticated: true,
                user: action.payload
            };
        case 'LOGOUT_SUCCESS':
            return {
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
