import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RenderReg from "./pages/Register";
import RenderStoryPage from "./pages/StoryPage"
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RenderReg} />
          <Route exact path="/register" component={RenderReg} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/storypage" component={RenderStoryPage} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
