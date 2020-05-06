import {createStore} from "redux";
import {rootReducer, initialState} from "./happinessReducer";

export const ConfigureStore = () => {
    const store = createStore(rootReducer);
    
    return store;
};