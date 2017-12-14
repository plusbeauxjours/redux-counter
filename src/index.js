import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// redux
import { createStore } from 'redux'
import reducers from './reducers';

// store
const store = createStore(reducers);

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
