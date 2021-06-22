import { LOGIN, LOGOUT, UPDATED } from "../constants/constants";

const INITIAL_STATE = {
    isLoggedIn: false,
    token: '',
    id: '',
    username: '',
}

function newState(
    state,
    isLoggedIn,
    token,
    id,
    username
) {
  localStorage.setItem("token", token);
    return {
        ...state,
        isLoggedIn,
        token,
        id,
        username
    };
}

export default function (state = INITIAL_STATE, action) {
    const isError = /.*_ERROR(.*?)$/;
    switch (action.type) {
      case `${LOGIN}_FULFILLED`:
        return newState(
          state,
          true,
          action.payload.data.token,
          action.payload.data.id,
          action.payload.data.username,
        );
      case UPDATED:
        return new newState( state,
          true,
          action.payload.data.token,
          action.payload.data.id,
          action.payload.data.username,
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