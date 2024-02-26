import '../hardenpreact.js';
import { h, render } from 'preact';
import App from './App';

// Render the App component into the div with id 'app'
render(<App />, document.getElementById('app'));