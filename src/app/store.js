import { createStore } from "redux";
import { enterTextReducer } from "./features/inputStringSlice";

export const store = createStore(enterTextReducer);