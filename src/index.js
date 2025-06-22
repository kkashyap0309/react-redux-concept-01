import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'  // Provide from react-redux
import store from './store/index.js';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <Provider> custom element with prop store  where store is the state of created redux store and we
// wrap them using <Provider> around the required Component which will be having dispatch and subsrber component
// dispatch - to update the redux store and subscriber - will be triggerd when ther is any change in the store
root.render(<Provider store={store}><App /></Provider>);
