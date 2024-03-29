import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import '../src/styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);

// ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>, 
// document.getElementById('root'));



