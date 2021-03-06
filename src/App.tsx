import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Page from './pages/Page';
import Login from './pages/auth/Login';
import store from './redux/store';
import { actions, reducers } from './redux'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Provider, useDispatch } from 'react-redux';
import SignupPage from './pages/auth/Signup';
import DetailPage from './pages/DetailTour';
import AdminSite from './pages/AdminSite';

setupIonicReact();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/* <Menu /> */}
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Login></Login>
            </Route>
            <Route path="/page" exact={true}>
              <Page/>
            </Route>
            <Route path="/login" exact={true}>
              <Login/>
            </Route>
            <Route path="/signup" exact={true}>
              <SignupPage/>
            </Route>
            <Route path="/detail/:id" exact={true}>
              <DetailPage></DetailPage>
            </Route>
            <Route path="/admin-site">
              <AdminSite></AdminSite>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
    </Provider>
  );
};

export default App;
