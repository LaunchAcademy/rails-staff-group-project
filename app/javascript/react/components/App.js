import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import ResourceList from "./layout/ResourceList"
import ResourceShow from "./layout/ResourceShow"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/resources" component={ResourceList} />
        <Route exact path="/resources/:id" component={ResourceShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
