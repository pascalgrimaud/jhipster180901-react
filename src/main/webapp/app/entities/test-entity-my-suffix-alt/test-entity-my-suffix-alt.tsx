import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-entity-my-suffix-alt.reducer';
import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestEntityMySuffixAltProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestEntityMySuffixAlt extends React.Component<ITestEntityMySuffixAltProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testEntityList, match } = this.props;
    return (
      <div>
        <h2 id="test-entity-my-suffix-alt-heading">
          <Translate contentKey="jhipster180901App.testEntity.home.title">Test Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.testEntity.home.createLabel">Create new Test Entity</Translate>
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
                  <Translate contentKey="jhipster180901App.testEntity.userOneToMany">User One To Many</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testEntity.userManyToMany">User Many To Many</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testEntity.userOneToOne">User One To One</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {testEntityList.map((testEntity, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${testEntity.id}`} color="link" size="sm">
                      {testEntity.id}
                    </Button>
                  </td>
                  <td>{testEntity.userOneToMany ? testEntity.userOneToMany.login : ''}</td>
                  <td>
                    {testEntity.userManyToManies
                      ? testEntity.userManyToManies.map((val, j) => (
                          <span key={j}>
                            {val.login}
                            {j === testEntity.userManyToManies.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td>{testEntity.userOneToOne ? testEntity.userOneToOne.login : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${testEntity.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${testEntity.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${testEntity.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ testEntity }: IRootState) => ({
  testEntityList: testEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestEntityMySuffixAlt);
