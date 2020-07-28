import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RenderLogin from "./pages/Login";
import RenderReg from "./pages/Register";
import RenderStoryPage from "./pages/StoryPage";

function App() {
  return (
    <Router>
      <div>
        {/* Calls for login page */}
        <Switch>
          <Route exact path={["/", "/login"]}>
            <RenderLogin />
          </Route>
        </Switch>

        {/* Calls for register page */}
        {/* <Switch>
          <Route exact path={["/", "/register"]}>
            <RenderReg />
          </Route>
        </Switch> */}

        {/* Calls for story page */}
        {/* <Switch>
          <Route exact path={["/", "/storypage"]}>
            <RenderStoryPage />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
