import React                            from 'react'
import ReactDOM                         from 'react-dom'
import './index.css'
import App                              from './components/app/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router}        from "react-router-dom"
import { Provider }                     from 'react-redux'
import ErrorBoundry                     from "./components/error-boundry"
import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import {rootReducer}                    from "./store/reducer"
import {loadPokemons}                   from './utils'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(loadPokemons())

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App />
            </Router>
        </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);
