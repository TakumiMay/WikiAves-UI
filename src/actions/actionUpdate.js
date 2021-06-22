import { UPDATED } from '../constants/constants';

export function updateInfo(isLoggedIn2, token2, id2, username2) {
 
    return {
        type: UPDATED,
        payload: {
            isLoggedIn: isLoggedIn2,
            token: token2,
            id: id2,
            username: username2
        }
    }
}