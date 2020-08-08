import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import LibraryContainer from "..//Library/LibraryContainer/LibraryContainer";
import StoryPage from "../StoryPage/Container/Container";
import Profile from "../../pages/Profile";
import Footer from "../Footer/";
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;