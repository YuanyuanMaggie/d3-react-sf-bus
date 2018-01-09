import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import Dashboard from './Dashboard'
import reducers from "../reducers";

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
    <Dashboard/>
  </Provider>
)

export default App;
