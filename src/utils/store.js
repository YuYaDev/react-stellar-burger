import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "../services/reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer
});