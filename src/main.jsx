import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import App from './App';
import { persistor } from './store';
import store from './store';
import './index.css';
import { AppProvider } from './context/SidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(

    // <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <AppProvider>
                <App />
                <ToastContainer />
              </AppProvider>
            </BrowserRouter>
        </PersistGate>
      </Provider>
    // </React.StrictMode>
);
