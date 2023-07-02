import { todoReducer } from "./todoOp";

import { combineReducers } from "redux";


const rootReducer = combineReducers({todoReducer});

export default rootReducer;