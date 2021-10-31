import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Project, AboutMe, NotFound } from '../containers';
import { Layout } from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={AboutMe} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;