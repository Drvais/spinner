import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello(props){

    let text = 'world';
    return(
        <div>
            <h1>Hello {text}</h1>
            <p>My name is {props.name}</p>
        </div>
    )
};

ReactDOM.render(<Hello name="ilan" />, document.getElementById('root'));
serviceWorker.unregister();
