// Libraries and Dependencies 
import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

// Store
import store from "./Store/";

// Components
import Home from './Pages/Home';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Provider>    
  );
}

export default App;
