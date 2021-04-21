import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { LOGOUT } from "../actions/constants";

const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === `${LOGOUT}_FULFILLED`) {
      state = undefined;
    }
  
    return appReducer(state, action);
};

export default rootReducer;