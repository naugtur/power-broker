import '../hardenpreact.js'; // replace with noop to disable hardening
// import '../noop.js';

import { h, render } from 'preact';
import App from './App';

// Render the App component into the div with id 'app'
render(<App />, document.getElementById('app'));