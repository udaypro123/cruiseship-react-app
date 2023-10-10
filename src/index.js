import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { myStore } from './components/resduxToolkit/store';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Provider store={myStore}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);


