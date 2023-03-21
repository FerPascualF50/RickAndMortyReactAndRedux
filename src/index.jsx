import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {compose} from 'redux';
import {createStore, apllyMiddleware} from 'redux';
import logger from 'redux';
import reducer  from './reducers';
import App from './routes/App';


const initialState = {
  favoritesCharacters: [],
  sectionActive: 'Characters',
};

const composeEnahnders =  window.__REDDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnahnders(apllyMiddleware(logger)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);


