import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestPager from './test-pager';
import TestPagerDetail from './test-pager-detail';
import TestPagerUpdate from './test-pager-update';
import TestPagerDeleteDialog from './test-pager-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestPagerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestPagerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestPagerDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestPager} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestPagerDeleteDialog} />
  </>
);

export default Routes;
