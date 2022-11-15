import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { FilterProvider } from './context/FilterContext';
import { CartContextProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Auth0Provider domain='dev-tyvhbrsji5yo4akg.us.auth0.com' 
        clientId='qLCza2m9PXk0yH0qHDP8lW0W9dQbvTPM'
        redirectUri={window.location.origin}
        cacheLocation="localstorage">
            <UserProvider>
                <ProductProvider>
                    <FilterProvider>
                        <CartContextProvider>
                            <App />
                        </CartContextProvider>
                    </FilterProvider>
                </ProductProvider>
            </UserProvider>
        </Auth0Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
