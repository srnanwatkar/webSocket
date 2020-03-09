import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import reducer from './../reducer/index';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk, multi), window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

export default store; 