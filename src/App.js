import React, { Suspense } from 'react';
import './styles/styles.scss';
import { Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import Home from './pages/Home';

function App() {

  return (
    <div className="app">
      <Switch>
        <PublicRoute exact path="/" component={Home} heroActive />
        <PublicRoute exact path="/home" component={Home} heroActive />
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
        <Suspense fallback={
          (
            <Loading />
          )
        }
        >
          <Component {...matchProps} />
        </Suspense>
      )}
    />
  );
};