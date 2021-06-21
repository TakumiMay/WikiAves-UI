import { LOGIN, LOGOUT, UPDATED } from "../constants/constants";

const INITIAL_STATE = {
    isLoggedIn: false,
    userId: '',
    userName: '',
}

function newState(
    state,
    isLoggedIn,
    userId,
    userName,
) {
    return {
        ...state,
        isLoggedIn,
        userId,
        userName
    };
}

export default function (state = INITIAL_STATE, action) {
    const isError = /.*_ERROR(.*?)$/;
    switch (action.type) {
    case `${LOGIN}_FULFILLED`:

      return newState(
        state,
        true,
        action.payload.data.userId,
        action.payload.data.userName,
      );
    case UPDATED:

      return new newState( state,
        true,
        action.payload.data.userId,
        action.payload.data.userName,
      );
      case `${LOGIN}_REJECT`:
 

        return INITIAL_STATE;
  
      case `${LOGOUT}_FULFILLED`:
        localStorage.clear();
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