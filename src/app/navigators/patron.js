import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PatronDashboard from '@screens/patron/PatronDashboard';
import PatronRequestPosting from '@screens/patron/PatronRequestPosting';
import PatronRequest from '@screens/patron/PatronRequest';
import PatronAddItem from '@screens/patron/PatronAddItem';
import PatronRequestPay from '@screens/patron/PatronRequestPay';
import PatronCardDetails from '@screens/patron/PatronCardDetails';

const PatronNavigator = () => {
  const match = useRouteMatch();

  return (
    <div className="container mx-auto">
      <Switch>
        <Route path={`${match.path}/request-posting`}>
          <PatronRequestPosting />
        </Route>
        <Route path={`${match.path}/card-details`}>
          <PatronCardDetails />
        </Route>
        <Route path={`${match.path}/request-pay`}>
          <PatronRequestPay />
        </Route>
        <Route path={`${match.path}/add-item`}>
          <PatronAddItem />
        </Route>
        <Route path={`${match.path}/request`}>
          <PatronRequest />
        </Route>
        <Route path={`${match.path}/dashboard`}>
          <PatronDashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default PatronNavigator;
