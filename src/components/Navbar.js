import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Login from "./Login";

function App() {
  // Define state variable to keep track of login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  function handleLogin() {
    setIsLoggedIn(true);
  }

  // Function to handle logout
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {/* Render Navbar component and pass in isLoggedIn and handleLogout props */}
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      {/* Use Switch and Route components from react-router-dom to define routes */}
      <Switch>
        {/* Define route for About component */}
        <Route exact path="/about">
          {/* Render About component */}
          <About />
        </Route>

        {/* Define route for Home component */}
        <Route exact path="/">
          {/* Render Home component */}
          <Home />
        </Route>

        {/* Define route for Login component */}
        <Route exact path="/login">
          {/* Render Login component and pass in handleLogin prop */}
          <Login handleLogin={handleLogin} />
        </Route>

        {/* Redirect any other paths to Home */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
