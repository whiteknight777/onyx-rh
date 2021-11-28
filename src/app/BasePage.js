import React, { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { LayoutSplashScreen, ContentRoute } from '../_metronic/layout';
import { BuilderPage } from './pages/BuilderPage';
import { MyPage } from './pages/MyPage';
// TEAMS MANAGEMENT COMPONENTS
import Staff from './pages/HumanResources/Staff/Staff';

import DashboardPage from './pages/DashboardPage';
import NewStaff from './pages/HumanResources/Staff/NewStaff';
import ShowStaff from './pages/HumanResources/Staff/ShowStaff';
import Feeds from './pages/HumanResources/News/Feed';
import TeamsOverviews from './pages/HumanResources/TeamsOverviews';
import Teams from './pages/HumanResources/Teams/Teams';
import NewTeam from './pages/HumanResources/Teams/NewTeam';
import ShowTeam from './pages/HumanResources/Teams/ShowTeam';
import Absences from './pages/HumanResources/Absences/Absences';
import Planning from './pages/HumanResources/Absences/Planning';
import Documents from './pages/HumanResources/Documents/Documents';

const UserProfilepage = lazy(() => import('./modules/UserProfile/UserProfilePage'));

export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                  /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/tableau-de-bord" />
                }
                <ContentRoute path="/tableau-de-bord" component={TeamsOverviews} />
                <ContentRoute path="/actualites" component={Feeds} />
                <Route exact path="/collaborateurs" component={Staff} />
                <Route path="/collaborateurs/nouveau" component={NewStaff} />
                <Route path="/collaborateurs/details" component={ShowStaff} />
                <Route exact path="/unite-organisationnelle" component={Teams} />
                <Route path="/unite-organisationnelle/nouveau" component={NewTeam} />
                <Route path="/unite-organisationnelle/details" component={ShowTeam} />
                <Route path="/absences" component={Absences} />
                <Route path="/planning-absences" component={Planning} />
                <Route path="/documents-partages" component={Documents} />
                <ContentRoute path="/my-page" component={MyPage} />
                <ContentRoute path="/builder" component={BuilderPage} />
                <Route path="/user-profile" component={UserProfilepage} />
                <Redirect to="error/error-v1" />
            </Switch>
        </Suspense>
    );
}
