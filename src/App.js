import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/signIn/SignIn";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profiles";
import CssBaseline from '@mui/material/CssBaseline';
import CreatePost from "./pages/createPost/CreatePost";
function App() {
  return (
    <Router>
       <CssBaseline />
      {/* <TopBar /> */}
      <Switch>
        {/* <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/settings">
        {user ?  <Settings /> : <Register />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route> */}
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
