import React, {useContext, useEffect} from "react";
import {Redirect} from "react-router-dom";
import {LayoutSplashScreen} from "../../../../_metronic/layout";
import { UserContext, ActionTypes } from '../contexts/userProvider';
import { logout } from "../contexts/authCrud";

function Logout () {
  
  const { userStore, dispatch } = useContext(UserContext);
  const { isAuthorized } = userStore;

  useEffect(() => {
    // ON MOUNT
    const logoutUser = async () => {
      try {
          const { data } = await logout();
          if(data) dispatch({type: ActionTypes.logout});
      } catch (e) {
          console.error(e)
          dispatch({type: ActionTypes.logout});
      }

    };
    logoutUser()
    // eslint-disable-next-line
  }, [])


  return isAuthorized ? <LayoutSplashScreen /> : <Redirect to="/auth/login" />
}

export default Logout;
