import {
    CONFIRM, CONFIRM_RESET
} from "../constants/constants";

const INITIAL_STATE = {
    isLoggedIn: false,
    info: {
        userId: '',
    },
};

function newState(state, info, isLoggedIn) {
    return { ...state, info, isLoggedIn};
}

export default function (state = INITIAL_STATE, action) {
    const isError = /.*_ERROR(.*?)$/;
    switch (action.type) {
      case `${CONFIRM}_FULFILLED`:
        
        return newState(state, action.payload, false);
      case CONFIRM_RESET :
        return  newState(state, action.payload, false);
      case `${CONFIRM}_REJECT`:
        return INITIAL_STATE;
      default:
        if (action.type.match(isError)) {
          if (action.payload.status === 401) {
            return INITIAL_STATE;
          }
        }
    }
    return state;
}