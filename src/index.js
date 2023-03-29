import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <MyContext.Provider value= {{username: "safa", loggedIn: true}}> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </MyContext.Provider> */}
    {/* <Hello name="Med Ali"/>
    <Welcome name="safa"/> */}
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
