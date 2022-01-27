import { combineReducers  } from "redux";
import { addData } from "./addData";

export const rootReducer = combineReducers({
    addData:addData
})