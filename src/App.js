import React from "react";
import { Switch, Route } from "react-router-dom";
import Error from "./pages/Error/Error";

import Home from "./pages/Home";
import Movie from "./components/SingleMovie";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id" children={<Movie />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
