import Axios from './axiosSetup';

export const API_URL = `${process.env.REACT_APP_API_URL}`;
export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth/login`;
export const LOGOUT_URL = `${process.env.REACT_APP_API_URL}/auth/logout`;
export const REGISTER_URL = 'api/auth/register';
export const REQUEST_PASSWORD_URL = 'api/auth/forgot-password';
export const ME_URL = `${process.env.REACT_APP_API_URL}/auth/profile`;

export function login(email, password) {
    return Axios.post(LOGIN_URL, { email, password });
}

export function logout() {
    return Axios.get(LOGOUT_URL);
}

export function register(email, fullname, username, password) {
    return Axios.post(REGISTER_URL, {
        email, fullname, username, password
    });
}

export function requestPassword(email) {
    return Axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    Axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('accessToken')}`;
    return Axios.get(ME_URL);
}
