/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../styles/global-styles';
import HomePageContainer from 'containers/HomePage';
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/money" component={() => <h1>hey!</h1>}/>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
