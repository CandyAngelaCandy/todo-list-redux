import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import TodoList from './containers/todoList';
import UserList from './containers/userList';
import TodoDetailerList from './containers/todoDetailerList';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const store = createStore(reducer)

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={()=><App />}/>
                <Route path="/detail" component={()=><TodoDetailerList />}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();