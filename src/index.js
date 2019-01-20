import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import './index.css';

const root: ?Element = document.getElementById('root');

if (root) {
    render(<App />, root);
}
