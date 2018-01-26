import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './modules/routes';
import { Navigation } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation menuRoutes={routes} />
        </header>
        <main>
          <Switch>
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
          </Switch>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
