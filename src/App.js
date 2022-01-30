import * as React from "react";
import { useEffect, useState } from "react";
// import { AddColor } from "./color/AddColor";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
//materialUi links
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import InfoIcon from "@mui/icons-material/Info";

import Tooltip from "@mui/material/Tooltip";
//Compontent links
import "./App.css";
import { Adduser } from "./user/Adduser";
import { EditUser } from "./user/EditUser";
import { UserList } from "./user/UserList";

export default function App() {
  const history = useHistory();
  const [user, setUser] = useState([]); //common one
  //fetch
  useEffect(() => {
    fetch("https://614ed775b4f6d30017b483a0.mockapi.io/sample", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setUser(mvs));
  }, []);

  // button hover

  return (
    <div className="App">
      {/* <h1>**********Add info************</h1> */}
      <AppBar position="static" className="tabcolor">
        <Toolbar disableGutters className="main-menu">
          <Tooltip disableFocusListener title="Home page">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/")}
            >
              Home
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener title="Add user">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<PersonAddAltIcon />}
              onClick={() => history.push("/user/adduser")}
            >
              Add User
            </Button>
          </Tooltip>

          <Tooltip disableFocusListener title="User List">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<AssignmentIndIcon />}
              onClick={() => history.push("/user")}
            >
              Users List
            </Button>
          </Tooltip>

          <Tooltip disableFocusListener title="About">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<InfoIcon />}
              onClick={() => history.push("/about")}
            >
              About
            </Button>
          </Tooltip>
          {/* <Tooltip disableFocusListener title="Color Game">
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              startIcon={<ColorLensIcon />}
              onClick={() => history.push("/colorgame")}
            >
              Color Game
            </Button>
          </Tooltip> */}
          {/* <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/user/adduser">Add User</Link>
                </li>
                <li>
                  <Link to="/user">Users List</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/colorgame">Color Game</Link>
                </li>
              </ul>
            </div> */}
        </Toolbar>
      </AppBar>
      <hr />
      <Switch>
        <Route exact path="/">
          <div className="welcome">
            <h3 className="welcome-text">Welcome</h3>
          </div>
        </Route>
        <Route path="/about">
          <h1>About Page</h1>
        </Route>
        <Route path="/user/adduser">
          <Adduser />
        </Route>
        <Route path="/user/edit/:user_id">
          <EditUser />
        </Route>
        <Route path="/allusers">
          <Redirect to="/user" />
        </Route>
        <Route path="/user">
          <UserList user={user} setUser={setUser} />
        </Route>
        {/* <Route path="/colorgame">
          <AddColor />
        </Route> */}
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Page NotFound</h1>
    </div>
  );
}
