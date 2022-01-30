import React, {
    useRef, useEffect, useState, useContext
} from 'react';
import { LayoutSplashScreen } from '../../../../_metronic/layout';
import { UserContext, ActionTypes } from './userProvider';
import { getUserByToken } from './authCrud';

function AuthInit(props) {
    const didRequest = useRef(false);
    const { userStore, dispatch } = useContext(UserContext);
    const { isAuthorized } = userStore;
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const accessToken = sessionStorage.getItem('accessToken');

    // We should request user by authToken before rendering the application
    useEffect(() => {
        const requestUser = async () => {
            try {
                getUserByToken(accessToken).then(res => {
                    const { data } = res;
                    dispatch({
                        type: ActionTypes.userLoaded,
                        payload: { user: data.user }
                    });
                });
            } catch (error) {
                dispatch({ type: ActionTypes.logout });
                console.error(error);
            } finally {
                setShowSplashScreen(false);
            }

            return () => {
                didRequest.current = true;
            };
        };
        requestUser();
        // eslint-disable-next-line
    }, [isAuthorized, accessToken, dispatch]);

    return showSplashScreen ? <LayoutSplashScreen /> : <>{props.children}</>;
}

export default AuthInit;
