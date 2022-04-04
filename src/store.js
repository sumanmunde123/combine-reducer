import { createStore, combineReducers } from "redux";
import { todoReducer } from "./Redux/Todos/reducer";
import { authReducer } from "./Redux/Auth/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer
})

export const store = createStore(rootReducer);