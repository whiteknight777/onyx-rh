import React, { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { LayoutSplashScreen, ContentRoute } from '../_metronic/layout';
import { BuilderPage } from './pages/BuilderPage';
// TEAMS MANAGEMENT COMPONENTS
import Collaborators from './pages/HumanResources/Collaborators/Collaborators';

// import DashboardPage from './pages/DashboardPage';
import NewCollab from './pages/HumanResources/Collaborators/NewCollab';
import ShowCollab from './pages/HumanResources/Collaborators/ShowCollab';
import Feeds from './pages/HumanResources/News/Feed';
import Overviews from './pages/HumanResources/overviews';
import Departments from './pages/HumanResources/Departments/Departments';
import NewDepartment from './pages/HumanResources/Departments/NewDepartment';
import ShowDepartment from './pages/HumanResources/Departments/ShowDepartment';
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
                <ContentRoute path="/tableau-de-bord" component={Overviews} />
                <ContentRoute path="/actualites" component={Feeds} />
                <Route exact path="/collaborateurs" component={Collaborators} />
                <Route path="/collaborateurs/nouveau" component={NewCollab} />
                <Route path="/collaborateurs/details" component={ShowCollab} />
                <Route exact path="/unite-organisationnelle" component={Departments} />
                <Route path="/unite-organisationnelle/nouveau" component={NewDepartment} />
                <Route path="/unite-organisationnelle/details" component={ShowDepartment} />
                <Route path="/absences" component={Absences} />
                <Route path="/planning-absences" component={Planning} />
                <Route path="/documents-partages" component={Documents} />
                <ContentRoute path="/builder" component={BuilderPage} />
                <Route path="/user-profile" component={UserProfilepage} />
                <Redirect to="error/error-v1" />
            </Switch>
        </Suspense>
    );
}
