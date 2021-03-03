import React from 'react';
import { Route, Switch } from 'react-router';
import DashboardContext from './components/dashboard-context/DashboardContext';
import Siderbar from './components/sidebar/Sidebar';
import routes from './routes';

export default class LaTabacologieApp extends React.Component {

  render() {
    return (
      <div className="la-tabacologie-app">
        <DashboardContext>

          <Siderbar />

          <Switch>
            {routes.map(function (routes) {
              return (

                <Route
                  exact
                  key={routes.route}
                  path={routes.route}
                  render={(routeProps) => (
                    <routes.component />
                  )}
                />

              )
            })}
          </Switch>

        </DashboardContext>
      </div>
    )
  }
}