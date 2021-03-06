import { combineReducers } from "redux";
import { LOGOUT } from "../constants/constants";
import AuthReducer from "./reducerAuth";
import RegisterReducer from "./reducerRegister";

const appReducer = combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === `${LOGOUT}_FULFILLED`) {
      state = undefined;
    }
  
    return appReducer(state, action);
};

export default rootReducer;
