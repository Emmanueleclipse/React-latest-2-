import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PatronStorksAvailable from '@screens/patron/PatronStorksAvailable';
import PatronBidReview from '@screens/patron/PatronBidReview';
import PatronBidStork from '@screens/patron/PatronBidStork';
import PatronBidMessages from '@screens/patron/PatronBidMessages';

const RequestsByStorkNavigator = () => {
  const match = useRouteMatch();

  return (
    <div className="container mx-auto">
      <Switch>
        <Route path={`${match.path}/:storkId/messages`}>
          <PatronBidMessages />
        </Route>
        <Route path={`${match.path}/:storkId/profile`}>
          <PatronBidStork />
        </Route>
        <Route path={`${match.path}/:storkId/live-bid`}>
          <PatronBidReview />
        </Route>
        <Route path={match.path}>
          <PatronStorksAvailable />
        </Route>
      </Switch>
    </div>
  );
};

export default RequestsByStorkNavigator;
