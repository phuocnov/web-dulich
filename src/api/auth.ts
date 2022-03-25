import { ILogin, ISignUp } from './apiInterfaces';
import { AxiosRequestConfig } from "axios";
import api from "./api";
import API_CONSTANTS from "./constants";
import { userInfo } from 'os';

export default {
    login: (params: ILogin) => {
        return api.post(API_CONSTANTS.USER.AUTH.SIGN_IN, params)
    },

    signUp: (params: ISignUp) => {
        return api.post(API_CONSTANTS.USER.AUTH.SIGN_UP, params)
    },
    getUserInfo: () => {
        return api.get(API_CONSTANTS.USER.CUSTOMER.INFO)
    },
    adminAccountList: () => {
        return api.get(API_CONSTANTS.ADMIN.CUSTOMER.GET)
    }

}