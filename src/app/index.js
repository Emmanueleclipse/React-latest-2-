import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import SignIn from '@screens/onboarding/SignIn';
import PatronOnboarding from '@screens/onboarding/PatronOnboarding';
import StorkOnboarding from '@screens/onboarding/StorkOnboarding';
import SignUpNavigator from '@navigators/signUp';
import HomeNavigator from '@navigators/home';

const queryClient = new QueryClient();

const App = () => {
  const isUserAuthenticated = false;
  const initialRender = () => {
    return isUserAuthenticated ? (
      <Redirect to="/home" />
    ) : (
      <Redirect to="/patron-onboarding" />
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={initialRender} exact />
          <Route path="/home">
            <HomeNavigator />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUpNavigator />
          </Route>
          <Route path="/patron-onboarding">
            <PatronOnboarding />
          </Route>
          <Route path="/stork-onboarding">
            <StorkOnboarding />
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
