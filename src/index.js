import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorContextProvider from './contexts/ErrorContext';
import AuthContextProvider from './contexts/AuthContext';
import CryptoContext from './contexts/CryptoContext';
import RateContext from './contexts/RateContext';
import TransactionContextProvider from './contexts/TransactionContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <CryptoContext>
          <AuthContextProvider>
            <RateContext>
              <TransactionContextProvider>
                <App />
              </TransactionContextProvider>
            </RateContext>
          </AuthContextProvider>
        </CryptoContext>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
