import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RenderReg from "./pages/Register";
import RenderStoryPage from "./pages/StoryPage"
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Footer from "./components/Footer"
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StoryPage from "./components/StoryPage/Container/Container";
>>>>>>> 0731e6c74ef0ebe79fb0ef5eefb8a88093f5f51c

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Navbar />
        <Switch>
          <Route exact path="/" component={RenderReg} />
          <Route exact path="/register" component={RenderReg} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/storypage" component={RenderStoryPage} /> */}
        </Switch>
        <Footer />
=======
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/storypage" component={StoryPage} />
>>>>>>> 0731e6c74ef0ebe79fb0ef5eefb8a88093f5f51c
      </div>
    </Router>
  );
}

export default App;
