import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import PolygonMap from './Components/PolygonMap/polygonMap';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PolygonMap} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
