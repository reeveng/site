import React from 'react';
import './styles/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app" id="app">
      <Switch>
        <PublicRoute exact path="/" component={Home} heroActive />
        <PublicRoute exact path="/home" component={Home} heroActive />
        <PublicRoute exact path="/notFound" component={NotFound} />
        <PublicRoute component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Component {...matchProps} />
      )}
    />
  );
};