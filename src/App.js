import React from "react";
import store from "./store";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home";
import AddNew from "./components/AddNew";
import Details from "./components/Details";
import Spinner from "./components/Spinner";

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <h1>App</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-new">Add new</Link>
            <Link to="/spinner">Spinner</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-new" component={AddNew} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/spinner" component={Spinner} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
