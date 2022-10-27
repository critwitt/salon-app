import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Services from "./components/Services"
import Reviews from "./components/Reviews"
import AppointmentForm from "./components/AppointmentForm";
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
      fetch(`/authorized_user`).then((response) => {
        response.json().then((user) => setUser(user))
      })
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route>
            <Profile setUser={setUser} user={user} path="/profile"/>
          </Route>
          <Route>
            <AppointmentForm user={user} exact path="/appointments"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;