import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// import Toaster from './common/sharedComponents/Toaster'
import store from './redux/store'
import Images from './components/Images'
// import PracConsole from './components/PracticeConsole'
// import oneTimeLogin from './components/Auth/OnetimeLogin'
/* eslint-disable no-undef */

const Root = ({ store: storeProp }) => (
  <Provider store={storeProp}>
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            path="/images"
            component={Images}
          />
          <Redirect
            from="/"
            to="/images"
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  </Provider>
)

render(
  <Root store={store} />,
  document.getElementById('content')
)
