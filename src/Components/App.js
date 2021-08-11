import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Header,
  Home,
  Footer,
  ProductInfoPage,
  ChatPage,
  Login,
} from "./index";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/productInfo" component={ProductInfoPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
