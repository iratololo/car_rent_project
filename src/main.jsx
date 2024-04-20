import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx'; 
import './index.css';
// import { persistor, store } from './redux/store.js';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/car_rent_project">
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
