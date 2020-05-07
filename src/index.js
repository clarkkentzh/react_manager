import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App';
import * as serviceWorker from './serviceWorker';

import Dva from './models/dva'
import models from './models'
let initialState={};
if(sessionStorage.getItem('store')){
  initialState=JSON.parse(sessionStorage.getItem('store'));
}
const app = Dva({
  initialState: initialState,
  models: models,
  onError(e) {
    console.log('onError', e)
  },
})

window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(app._store.getState()))
})

const App = app.start(<Apps/>)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
