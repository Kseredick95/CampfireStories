import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RenderReg from "./pages/Register";
import RenderStoryPage from "./pages/StoryPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/register"]}>
            <RenderReg />
          </Route>
        </Switch>

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
