import { fetchWithToken } from '../helpers/fetch';
import { notification } from "../helpers/alert";

export const loadUserData = () => {

    return async( dispatch ) => {

        const response = await fetchWithToken(`users/${localStorage.getItem('id')}/profile`);
        const body2 = await response.json();

        if ( response.status === 200 || response.status === 201) {

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
        } else {
            notification( 'ERROR',body2.error,'error' );
        }
    }
}
