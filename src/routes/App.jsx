import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Project, AboutMe, NotFound } from '../containers';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/about" component={AboutMe} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;