import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import './index.css';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
