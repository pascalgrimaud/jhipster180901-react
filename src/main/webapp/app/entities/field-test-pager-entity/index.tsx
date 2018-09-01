import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestPagerEntity from './field-test-pager-entity';
import FieldTestPagerEntityDetail from './field-test-pager-entity-detail';
import FieldTestPagerEntityUpdate from './field-test-pager-entity-update';
import FieldTestPagerEntityDeleteDialog from './field-test-pager-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestPagerEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestPagerEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestPagerEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestPagerEntity} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={FieldTestPagerEntityDeleteDialog} />
  </>
);

export default Routes;
