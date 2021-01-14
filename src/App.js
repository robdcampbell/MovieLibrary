import React from "react";
import { Switch, Route } from "react-router-dom";
import Error from "./pages/Error/Error";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
