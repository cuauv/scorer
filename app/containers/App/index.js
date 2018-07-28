/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Site Title</li>
            {/* <li>
              <a href="#">One</a>
            </li>
            <li>
              <a href="#">Two</a>
            </li>
            <li>
              <a href="#">Three</a>
            </li> */}
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search" />
            </li>
            <li>
              <button type="button" className="button">
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid-container">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}
