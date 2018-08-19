import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import TodoDetailerList from './containers/todoDetailerList';
import Login from './components/Login';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App}/>
            <Route path="/detail/:id" component={TodoDetailerList}/>
            <Route path="/login" component={Login}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
