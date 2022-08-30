import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'
// import '../public/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter path={'/'}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
