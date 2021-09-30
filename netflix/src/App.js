import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import * as ROUTES from './constants/Routes';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Browse from "./pages/Browse";
import { IsUserRedirect, ProtectedRoute } from './helpers/Routes1';
import useAuthListener from "./hooks/useAuthListener";

function App() {
    const {user} = useAuthListener();
    console.log(user);
  return (
      <Router>
              <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_IN}
                  exact>
                  <Signin />
              </IsUserRedirect>

          <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}
              exact
          >
              <Signup />
          </IsUserRedirect>
          <ProtectedRoute
              user={user}
              path={ROUTES.BROWSE}
          >
              <Browse

              />
          </ProtectedRoute>
          <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
              exact
          >
              <Home />
          </IsUserRedirect>
      </Router>
  );
}

export default App;
