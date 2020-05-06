import { combineReducers } from 'redux'

export const initialState = ['gamberetti', 'cipolle puzzolenti'];

export const happinessReducer = (state = {happy: true}, action) => {
    switch (action.type) {
        case "HAPPY":
            return { happy: true };
        case "SAD":
            return { happy: false };
        default:
            return state;
    }
};

export const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let newMeals = state;
            state.push(action.value);
            return newMeals;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    mealsReducer,
    happinessReducer
})