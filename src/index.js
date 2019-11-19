import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './index.css';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import PageWrapper from "./containers/PageWrapper";
import StarWarsPageWrapper from "./containers/StarWarsPageWrapper";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./saga/root.saga";


const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

console.log(process.env);
const store = createStore(rootReducer,
    storeEnhancer);


sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <PageWrapper/>
                </Route>
                <Route path="/star-wars">
                    <StarWarsPageWrapper/>
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
