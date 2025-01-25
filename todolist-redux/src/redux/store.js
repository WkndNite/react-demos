import { createStore } from "redux";

import { todoReducer } from "./reducers";

export const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// import { configureStore } from "@reduxjs/toolkit";

// import { todoReducer } from "./reducers";

// export const store = configureStore({
//     reducer: todoReducer,
//     devTools: true,
// });