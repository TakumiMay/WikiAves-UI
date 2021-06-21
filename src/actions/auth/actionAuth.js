import { LOGIN, LOGOUT } from '../../constants/constants';
import axios from '../../utils/axios';

export function logout() {
  return {
    type: LOGOUT,
    async payload () {
      /*   localStorage.clear();     */   
    }
  };
}

export function login(username, password) {

  let data=  {
      username,
      password
  }
  console.log("holaaaa jeje")
  return {
    type: LOGIN,
    async payload () {
        return await axios.post("login/", data)      
    }
  };
}
