import React from 'react';
import logo from '../css/logo.svg';
import '../css/App.css';

const StatelessApp = (props) => (
  <div className="App StatelessApp">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Stateless Component for App
      </p>
      <a className="App-link" href="/" target="_blank">
        ...
      </a>
      {props.children}
    </header>
    
  </div>
);


export default StatelessApp;