import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './providers/AuthProvider';

ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));

serviceWorker.unregister();
