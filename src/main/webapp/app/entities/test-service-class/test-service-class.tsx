import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-service-class.reducer';
import { ITestServiceClass } from 'app/shared/model/test-service-class.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestServiceClassProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestServiceClass extends React.Component<ITestServiceClassProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testServiceClassList, match } = this.props;
    return (
      <div>
        <h2 id="test-service-class-heading">
          <Translate contentKey="jhipster180901App.testServiceClass.home.title">Test Service Classes</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.testServiceClass.home.createLabel">Create new Test Service Class</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testServiceClass.userOneToMany">User One To Many</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testServiceClass.userManyToMany">User Many To Many</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testServiceClass.userOneToOne">User One To One</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {testServiceClassList.map((testServiceClass, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${testServiceClass.id}`} color="link" size="sm">
                      {testServiceClass.id}
                    </Button>
                  </td>
                  <td>{testServiceClass.userOneToMany ? testServiceClass.userOneToMany.login : ''}</td>
                  <td>
                    {testServiceClass.userManyToManies
                      ? testServiceClass.userManyToManies.map((val, j) => (
                          <span key={j}>
                            {val.login}
                            {j === testServiceClass.userManyToManies.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td>{testServiceClass.userOneToOne ? testServiceClass.userOneToOne.login : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${testServiceClass.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${testServiceClass.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${testServiceClass.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testServiceClass }: IRootState) => ({
  testServiceClassList: testServiceClass.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestServiceClass);
