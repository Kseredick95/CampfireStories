import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RenderReg from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/register"]}>
            <RenderReg />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
