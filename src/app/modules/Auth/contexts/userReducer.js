import {ActionTypes} from './userProvider'

const initialAuthState = {
    user: undefined,
    isAuthorized: false,
}

export const UserReducer = (state, action) => {
    const user = action.payload?.user;
    switch (action.type) {
        // LOGIN ACTION
        case ActionTypes.login:
            return { user: undefined, isAuthorized: true };
        // REGISTER ACTION
        case ActionTypes.register: 
            return { user: undefined };
        // LOGOUT ACTION
        case ActionTypes.logout: 
            return initialAuthState;
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
