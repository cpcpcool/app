import React from 'react';
// ReactDOM의 package.json의 export를 보면 './'경로 표시 없이도 사용할 수 있게 되어있다.
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Webpack에서는 (./App.js) JS만은 확장자가 없어도 인식을 해준다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
