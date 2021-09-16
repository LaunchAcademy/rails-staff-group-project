import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import ResourceList from './layout/ResourceList'
import ResourceShow from './layout/ResourceShow'
import ResourceForm from './layout/ResourceForm'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/resources" component={ResourceList} />
        <Route exact path="/resources/new" component={ResourceForm} />
        <Route exact path="/resources/:id" component={ResourceShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
