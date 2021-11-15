import React from "react"
import ReactDOM from "react-dom"
import history from "./history"
import store from "./store"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import PostalLookup from "./routers/PostalLookup"
import Tab from "./components/Tab"
import Loading from "./components/loading"
import { Switch, Route, Redirect } from "react-router-dom"
import "antd/dist/antd.css"
import "./style/common.css"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Loading />
        <div className="content">
          <div className="container">
            <Tab history={history} />
            <Switch>
              <Route path="/postalLookup" component={() => <PostalLookup />} />
              <Redirect to="/postalLookup" />
            </Switch>
          </div>
        </div>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
