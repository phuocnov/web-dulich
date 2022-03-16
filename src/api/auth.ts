import { ILogin, ISignUp } from './apiInterfaces';
import { AxiosRequestConfig } from "axios";
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
    login: (params: ILogin) => {
        return api.post(API_CONSTANTS.AUTH.SIGN_IN, params)
    },

    signUp: (params: ISignUp) => {
        return api.post(API_CONSTANTS.AUTH.SIGN_UP, params)
    }
}