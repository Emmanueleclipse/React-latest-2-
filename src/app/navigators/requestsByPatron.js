import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PatronBidMessages from '@screens/patron/PatronBidMessages';
import StorkFinalAdjustment from '@screens/stork/StorkFinalAdjustment';
import StorkFinalAdjustmentItem from '@screens/stork/StorkFinalAdjustmentItem';
import StorkFinalShipping from '@screens/stork/StorkFinalShipping';
import StorkFinalShippingBox from '@screens/stork/StorkFinalShippingBox';
import StorkFinalShippingItems from '@screens/stork/StorkFinalShippingItems';

const RequestsByPatronNavigator = () => {
  const match = useRouteMatch();

  return (
    <div className="container mx-auto">
      <Switch>
        <Route path={`${match.path}/:patronId/messages`}>
          <PatronBidMessages />
        </Route>
        <Route path={`${match.path}/:patronId/adjustments/items/:itemId`}>
          <StorkFinalAdjustmentItem />
        </Route>
        <Route path={`${match.path}/:patronId/adjustments`}>
          <StorkFinalAdjustment />
        </Route>
        <Route path={`${match.path}/:patronId/shipping/add-box`}>
          <StorkFinalShippingBox />
        </Route>
        <Route path={`${match.path}/:patronId/shipping/items`}>
          <StorkFinalShippingItems />
        </Route>
        <Route path={`${match.path}/:patronId/shipping`}>
          <StorkFinalShipping />
        </Route>
      </Switch>
    </div>
  );
};

export default RequestsByPatronNavigator;
