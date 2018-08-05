import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers';
import TodoDetailerList from './containers/todoDetailerList';
import Register from './components/Register';
import Login from './components/Login';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/detail/:id" component={TodoDetailerList}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();