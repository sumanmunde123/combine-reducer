import { ADD_TODOS } from "./action";

const initTodos = {
    todos: []
}

export const todoReducer = (store = initTodos, { type, payload }) => {
    switch (type) {
        case ADD_TODOS:
            return { ...store, todos: payload };
        default:
            return store;
    }
}