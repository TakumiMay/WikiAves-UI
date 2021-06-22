import { LOGIN, LOGOUT } from '../../constants/constants';
import { notification, timerNotification } from "../../helpers/alert";
import { fetchWithoutToken } from "../../helpers/fetch";

export function logout() {
  return {
    type: LOGOUT,
    async payload () {
      /*   localStorage.clear();     */   
    }
  };
}

export const startLogin = (username, password) => {
  return async( dispatch ) => {
    const response = await fetchWithoutToken(
                            'login/',
                            { username, password },
                            'POST')
    const body = await response.json();

    console.log(body);
    console.log(response.status);

    if ( response.status === 200 || response.status === 201) {
      // set user info
      localStorage.setItem('token', body.token);
      localStorage.setItem('username', body.user.username);

      dispatch( login({
        token: body.token,
        username: body.user.username
      }) );

      timerNotification( 'Inicio de Sesión exitoso!' );

    } else {
      notification( 'ERROR',body.error,'error' );
    }

  }
}

const login = ( user ) => ({
  type: LOGIN,
  payload: user
})
