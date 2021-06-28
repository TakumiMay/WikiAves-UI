import { notification } from "../../helpers/alert";
import { fetchWithoutToken } from "../../helpers/fetch";

export const register = (password, name, last_names, username, email, city, region, xp, pages_visited) => {

    return async( dispatch ) => {

        const response = await fetchWithoutToken(
            'users/user', 
            {password, name, last_names, username, email, city, region, xp, pages_visited}, 
            'POST')
        const body = await response.json();

        if ( response.status === 200 || response.status === 201) {

            //set user info
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('name', name);
            localStorage.setItem('last_names', last_names);
            localStorage.setItem('city', city);
            localStorage.setItem('region', region);
            localStorage.setItem('experience', 0);

        } else {
            notification( 'ERROR',body.error,'error' );
        }
    }
}
