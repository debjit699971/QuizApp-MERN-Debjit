import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Homenav from "./components/HomeHeader.component";
import Loginnav from "./components/LoginNav.component";
import Taketest from "./components/TakeTest.component";
import Login from "./components/LoginRegister.component";
import Dashboard from "./components/Dashboard.component";
import Testresult from "./components/TestResult.component";
import Ques from "./components/Question.component";

function App() {
  const [loggedin, setloggedin] = useState(false);
  let location = useLocation();

  // ✅ Clear session on every fresh app load
  useEffect(() => {
    localStorage.clear();
    setloggedin(false);
  }, []);

  return (
    <React.Fragment>
      <nav>
        {location.pathname !== "/test" ? (
          loggedin ? (
            <Loginnav setloggedin={setloggedin} />
          ) : (
            <Homenav setloggedin={setloggedin} />
          )
        ) : (
          <Fragment></Fragment>
        )}
      </nav>
      <main>
        <Switch>
          {/* Default route → Login/Register */}
          <Route exact path="/" render={() => <Login setloggedin={setloggedin} />} />
          <Route exact path="/taketest" component={Taketest} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/abouttest" component={Testresult} />
          <Route exact path="/test" component={Ques} />

          {/* Redirect unknown routes to login */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
