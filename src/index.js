import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import TodoDetailerList from './containers/todoDetailerList';
import Login from './components/Login';
import Register from './components/Register';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/todos" component={App} />
      <Route path="/todos/:id" component={TodoDetailerList} />
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
