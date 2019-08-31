import React from 'react';
import NavBar from './NavBar';
import '../styles/app.css';
import { Switch, Route } from 'react-router';
import Properties from './Properties';
import AddProperty from './AddProperty';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
