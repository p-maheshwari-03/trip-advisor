import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { LoadingProvider } from './contexts/LoadingContext';

(() => {
  const existingScript = document.getElementById('googleMaps');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${process.env.REACT_APP_PLACES_API_KEY}`;
    script.id = 'googleMaps';
    document.body.appendChild(script);

    script.onload = () => { 
      ReactDOM.render(
        <LoadingProvider>
          <App />
        </LoadingProvider>,
        document.getElementById('root')
      );
    };
  }
})();
