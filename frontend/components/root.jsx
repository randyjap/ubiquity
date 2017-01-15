import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import NavContainer from './nav/nav_container';
import SearchResultContainer from './search/search_result_container';
import GreetingContainer from './greeting/greeting_container';
import ListingShowContainer from './listing/listing_show_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _goToSearchIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('search');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ GreetingContainer } />
          <Route path="login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="search" component={ SearchResultContainer } onEnter={_ensureLoggedIn} />
          <Route path="listings/:listingId" component={ ListingShowContainer } onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
