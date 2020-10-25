import React, { Suspense } from 'react';
import './styles/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

function App() {
  return (
    <div className="app">
      <Switch>
        <PublicRoute exact path="/projects/:id" component={Project} heroActive />
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
        <Suspense fallback={(<Loading />)}>
          <Component {...matchProps} />
        </Suspense>
      )}
    />
  );
};