import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root'),
    () => {
        let domNode = document.querySelector('#root div');
        if(!domNode.firstChild) {
            // domNode.innerHTML = `
            //     <div style="height: 100vh;display: flex; justify-content: center;align-items: center;">
            //         <a style="color: red; font-size: 24px;" href="http://localhost:3000/login">去登陆</a>
            //     </div>
            // `;
            window.location.href = 'http://localhost:3000/login'
        } 
    }

);
registerServiceWorker();
