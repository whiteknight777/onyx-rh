import { ActionTypes } from './userProvider';

export const UserReducer = (state, action) => {
    const user = action.payload?.user;
    switch (action.type) {
        // LOGIN ACTION
        case ActionTypes.login:
            sessionStorage.setItem('accessToken', action.accessToken);
            return { user: undefined, isAuthorized: false, accessToken: action.accessToken };
        // REGISTER ACTION
        case ActionTypes.register:
            return { user: undefined };
        // LOGOUT ACTION
        case ActionTypes.logout:
            sessionStorage.removeItem('accessToken');
            return { user: undefined, isAuthorized: false };
        // LOAD USER ACTION
        case ActionTypes.userLoaded:
            return { ...state, user, isAuthorized: true };
        // SET USER ACTION
        case ActionTypes.setUser:
            return { ...state, user };
        // DEFAULT ACTION
        default:
            return state;
    }
};
