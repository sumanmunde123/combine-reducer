import { ADD_USER } from "./action";

const users = {
    auth: JSON.parse(localStorage.getItem("auth")) || false
};

export const authReducer = (store = users, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            localStorage.setItem("auth", payload);
            return { ...store, auth: payload }
        default:
            return store;
    }
}