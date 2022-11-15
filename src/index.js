import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { LoadingProvider } from './contexts/LoadingContext';

ReactDOM.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>,
  document.getElementById('root')
);
