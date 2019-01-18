import React from 'react';
import MyComponent from '../MyComponent/MyComponent';
import s from './App.module.css';

const App = () => (
    <main className={s.container}>
        <MyComponent />
    </main>
);

export default App;
