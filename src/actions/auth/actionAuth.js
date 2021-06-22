import { LOGIN, LOGOUT, AUTHCHECKINGFINISH } from '../../constants/constants';
import { notification, timerNotification } from "../../helpers/alert";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

export const logout = () => {
  return {
    type: LOGOUT,
    async payload () {
      console.log("Sesión cerrada")
      localStorage.clear();   
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

    if ( response.status === 200 || response.status === 201) {

      localStorage.setItem('token', body.token);
      localStorage.setItem('id', body.user.id);

      const response2 = await fetchWithToken(
        `users/${body.user.id}/profile`,
        {},
        'GET')
      const body2 = await response2.json();

      // set user info
      localStorage.setItem('username', body2.username);
      localStorage.setItem('email', body2.email);
      localStorage.setItem('name', body2.name);
      localStorage.setItem('last_names', body2.last_names);
      localStorage.setItem('city', body2.city);
      localStorage.setItem('region', body2.region);
      localStorage.setItem('experience', body2.experience);
      localStorage.setItem('level', body2.level);
      localStorage.setItem('achievements', body2.achievements);
      localStorage.setItem('expeditions', body2.expeditions);
      localStorage.setItem('photos', body2.photos);
      localStorage.setItem('species', body2.species);
      localStorage.setItem('region', body2.region);
      //console.log(body2)

      dispatch( login({
        token: body.token,
        username: body.user.username
      }) );
      //timerNotification( 'Inicio de Sesión exitoso!' );
    } else {
      notification( 'ERROR',body.error,'error' );
    }
  }
}

export const startChecking = () => {

  return async(dispatch) =>{

      const response = await fetchWithToken( 'refresh-token/' );
      const body = await response.json();

      if ( response.status === 200 ||  response.status === 201 ){

        localStorage.setItem('token', body.token);
        localStorage.setItem('id', body.user.id);

        const response2 = await fetchWithToken(
          `users/${body.user.id}/profile`,
          {},
          'GET')
        const body2 = await response2.json();

        // set user info
        localStorage.setItem('username', body2.username);
        localStorage.setItem('email', body2.email);
        localStorage.setItem('name', body2.name);
        localStorage.setItem('last_names', body2.last_names);
        localStorage.setItem('city', body2.city);
        localStorage.setItem('region', body2.region);
        localStorage.setItem('experience', body2.experience);
        localStorage.setItem('level', body2.level);
        localStorage.setItem('achievements', body2.achievements);
        localStorage.setItem('expeditions', body2.expeditions);
        localStorage.setItem('photos', body2.photos);
        localStorage.setItem('species', body2.species);
        localStorage.setItem('region', body2.region);
        
        dispatch( login({
              token: body.token,
              username: body.user.username
          }) );
      }else{
          dispatch( checkingFinish() );
      }
  }
}

const checkingFinish = () => ({ type: AUTHCHECKINGFINISH })

const login = ( user ) => ({
  type: LOGIN,
  payload: user
})
