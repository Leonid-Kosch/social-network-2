import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './state/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

let mainRender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App dialogPage={state.dialogPage} profilePage={state.profilePage} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};
mainRender(store.getState());
store.subcribe(mainRender); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
