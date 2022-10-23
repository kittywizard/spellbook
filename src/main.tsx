import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import {ContextProvider} from "./Context";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
