// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Motor } from '@motor-js/engine';
import './styles/index.css';

//
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import Store from './store/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { qlikConfig } from './config';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <Motor config={qlikConfig} licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg=">
      <Store value="dark">
        <CollapseDrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </Store>
    </Motor>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
