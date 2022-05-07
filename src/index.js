import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from './App'
// 将App组件标签渲染到index页面上
ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>,
    document.getElementById('root'))