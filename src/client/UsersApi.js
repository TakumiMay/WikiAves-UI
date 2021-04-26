import { config } from '../constants/config'
import { HTTP_METHODS } from "../constants/constants";
import axios from "axios";
import URI from 'urijs';

class UsersApi {
    constructor(_config) {
        this._config = _config;
    }

    getX = () => {
        //TO-DO
        //const endpoint = new URI(this._config.baseUrl).path(this._config.endpoints.X).toString();
        return axios({
            url: endpoint,
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });
    }
}

const usersApi = new UsersApi(config);
export default usersApi;