import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import LibraryContainer from "./components/Library/LibraryContainer/LibraryContainer";
import StoryPage from "./components/StoryPage/Container/Container";
import Profile from "./pages/Profile";
import Footer from "./components/Toolkit/Footer";
import Aboutus from "./pages/Aboutus";
import ProtectedRoute from "./helpers/ProtectedRoute"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/library" component={LibraryContainer} />
          <Route exact path="/storypage/:bookTitle" component={StoryPage} />
          <Route exact path="/profile/:_id" component={Profile} />
          <Route exact path="/profile/:_id/edit-profile" component={Profile} />
          <Route exact path="/about" component={Aboutus} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
