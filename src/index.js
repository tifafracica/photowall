import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import './styles/stylesheet.css';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import {database} from './database/config'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
