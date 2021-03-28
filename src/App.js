import "./App.css";
import Contacts from "./Contacts";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tickets from "./Tickets";

function App() {
  return (
    <Router>
      <div
        data-new-gr-c-s-check-loaded="14.1001.0"
        data-gr-ext-installed=""
        className="ember-application"
        data-identifyelement="7"
        data-new-gr-c-s-loaded="14.1001.0"
      >
        <div id="nucleus-banner-wormhole" data-identifyelement="8"></div>
        <div id="freshworks-overlay-background" data-identifyelement="9"></div>
        <div
          id="freshworks-product-promote-container"
          data-identifyelement="10"
        ></div>
        <div
          id="freshworks-products-sidebar-container"
          data-identifyelement="11"
        ></div>
        <div id="nucleus-modal-wormhole" data-identifyelement="17"></div>
        <div
          id="nucleus-toast-messages-wormhole"
          data-identifyelement="18"
        ></div>
        <div id="ember-basic-dropdown-wormhole" data-identifyelement="19"></div>
        <div className="ember-view" id="ember13" data-identifyelement="21">
          <div
            id="ember810"
            className="ember-view"
            data-identifyelement="22"
          ></div>
          <div
            id="ember14"
            className="app-container ember-view"
            data-identifyelement="23"
          >
            <Sidebar></Sidebar>
            <div
              className="navbar-addon-widgets"
              data-identifyelement="70"
            ></div>
            <div
              id="ember847"
              className="ember-view"
              data-identifyelement="71"
            ></div>
            <div className="app-main-wrapper" data-identifyelement="72">
              <div
                id="ember29"
                className="ember-view"
                data-identifyelement="73"
              >
                <header
                  className="application-header"
                  data-identifyelement="74"
                >
                  <Topbar></Topbar>
                  <div
                    id="ember853"
                    className="__marketplace-list ember-view"
                    data-identifyelement="151"
                  ></div>
                  <div id="ember4733" className="ember-view">
                    <Switch>
                      <Route path="/contacts" component={Contacts}></Route>
                      <Route path="/tickets" component={Tickets}></Route>
                    </Switch>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
