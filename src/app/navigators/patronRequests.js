import React, { useState } from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';

import WhiteHeader from '@common/headers/WhiteHeader';
import StorkRequestsMatches from '@screens/stork/StorkRequestsMatches';
import StorkRequestsAccepted from '@screens/stork/StorkRequestsAccepted';
import PatronPostsHistory from '@screens/patron/PatronPostsHistory';

const getNavSelectedByRouting = (pathname) => {
  let navSelected = 'matches';
  if (pathname.includes('completed')) {
    navSelected = 'completed';
  } else if (pathname.includes('accepted')) {
    navSelected = 'accepted';
  }
  return navSelected;
};

const PatronRequestsNavigator = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { pathname } = history.location;

  const [navSelected, setNavSelected] = useState(
    getNavSelectedByRouting(pathname),
  );
  const getNavClass = (nav) => {
    const navBaseClass =
      'flex flex-1 py-2 border-b-2 border-teal justify-center ';
    const opacityClass = navSelected === nav ? 'opacity-100' : 'opacity-50';
    return navBaseClass + opacityClass;
  };
  const navList = [
    {
      key: 'accepted',
      label: 'Accepted',
    },
    {
      key: 'matches',
      label: 'Matches',
    },
    {
      key: 'completed',
      label: 'Completed',
    },
  ];
  const onClickNav = (key) => () => {
    setNavSelected(key);
    switch (key) {
      case 'accepted':
        history.push('/home/patron-requests/accepted');
        break;
      case 'matches':
        history.push('/home/patron-requests');
        break;
      case 'completed':
        history.push('/home/patron-requests/completed');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto h-screen flex flex-col">
      <WhiteHeader
        onClickLeft={() => history.push('/home')}
        title="PATRON REQUESTS"
        withRightIcons
        withAvatar
      />
      <div className="px-4 flex-1 py-5">
        <div className="flex">
          {navList.map(({ key, label }) => {
            const navLabelColor = navSelected === key ? 'teal' : 'blue-gray';
            return (
              <div
                className={getNavClass(key)}
                onClick={onClickNav(key)}
                role="presentation"
                key={key}
              >
                <p
                  className={`font-gotham-bold text-blue-gray text-xs text-${navLabelColor}`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
        <Switch>
          <Route path={`${match.path}/accepted`}>
            <StorkRequestsAccepted />
          </Route>
          <Route path={`${match.path}/completed`}>
            <PatronPostsHistory />
          </Route>
          <Route path={match.path}>
            <StorkRequestsMatches />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PatronRequestsNavigator;
