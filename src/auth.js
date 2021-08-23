import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import Header from "./components/Header/Header";
import CellOverviewView from "./views/CellOverviewView/CellOverviewView";
import TaskOverviewView from "./views/TaskOverviewView/TaskOverviewView";
import UserContext from "./contexts/UserContext";
import AllTasksOverviewView from "./views/AllTasksOverviewView/AllTasksOverviewView";
import './App.css';
import { render } from 'react-dom';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Dimensions } from 'react-native';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

Amplify.configure(Object.assign(awsconfig, {
  API: {
    endpoints: [
      {
        name: "metcellbotapi",
        endpoint: "https://itypzmqu9f.execute-api.eu-west-2.amazonaws.com/dev",
        custom_header: async () => { 
          return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
        }
      }
    ]
  }
}));

function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={CellOverviewView} />
            <Route path="/cells/:cellName" component={TaskOverviewView} />
            <Route path="/tasks" component={AllTasksOverviewView} />
            <Route path="/tasks/open" component={AllTasksOverviewView} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn hideSignUp slot="sign-in" />
    </AmplifyAuthenticator>
  );
}

export default App;