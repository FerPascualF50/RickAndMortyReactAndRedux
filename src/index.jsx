import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer  from './reducers';
import App from './routes/App';


const initialState = {
  favoriteCharacters: [],
  sectionActive: 'Characters',
};

const composeEnahnders =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ||compose;
const store = createStore(
  reducer,
  initialState,
  composeEnahnders(applyMiddleware(logger))
  );


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


