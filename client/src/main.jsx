import React from 'react';
import  ReactDOM  from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';

import { StateContextProvider } from './context';

import App from './App';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'))


root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
            <StateContextProvider>
               <App /> 
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)