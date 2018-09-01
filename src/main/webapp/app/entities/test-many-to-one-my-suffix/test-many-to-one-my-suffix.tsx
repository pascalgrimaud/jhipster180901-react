import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-many-to-one-my-suffix.reducer';
import { ITestManyToOneMySuffix } from 'app/shared/model/test-many-to-one-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestManyToOneMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestManyToOneMySuffix extends React.Component<ITestManyToOneMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testManyToOneList, match } = this.props;
    return (
      <div>
        <h2 id="test-many-to-one-my-suffix-heading">
          <Translate contentKey="jhipster180901App.testManyToOne.home.title">Test Many To Ones</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.testManyToOne.home.createLabel">Create new Test Many To One</Translate>
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
                  <Translate contentKey="jhipster180901App.testManyToOne.testEntity">Test Entity</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testMapstruct">Test Mapstruct</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testServiceClass">Test Service Class</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testServiceImpl">Test Service Impl</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testInfiniteScroll">Test Infinite Scroll</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testPager">Test Pager</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testPagination">Test Pagination</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testManyToOne.testCustomTableName">Test Custom Table Name</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {testManyToOneList.map((testManyToOne, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${testManyToOne.id}`} color="link" size="sm">
                      {testManyToOne.id}
                    </Button>
                  </td>
                  <td>
                    {testManyToOne.testEntity ? (
                      <Link to={`test-entity-my-suffix-alt/${testManyToOne.testEntity.id}`}>{testManyToOne.testEntity.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testMapstruct ? (
                      <Link to={`test-mapstruct/${testManyToOne.testMapstruct.id}`}>{testManyToOne.testMapstruct.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testServiceClass ? (
                      <Link to={`test-service-class/${testManyToOne.testServiceClass.id}`}>{testManyToOne.testServiceClass.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testServiceImpl ? (
                      <Link to={`test-service-impl/${testManyToOne.testServiceImpl.id}`}>{testManyToOne.testServiceImpl.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testInfiniteScroll ? (
                      <Link to={`test-infinite-scroll/${testManyToOne.testInfiniteScroll.id}`}>{testManyToOne.testInfiniteScroll.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testPager ? (
                      <Link to={`test-pager/${testManyToOne.testPager.id}`}>{testManyToOne.testPager.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testPagination ? (
                      <Link to={`test-pagination/${testManyToOne.testPagination.id}`}>{testManyToOne.testPagination.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {testManyToOne.testCustomTableName ? (
                      <Link to={`test-custom-table-name/${testManyToOne.testCustomTableName.id}`}>
                        {testManyToOne.testCustomTableName.id}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${testManyToOne.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${testManyToOne.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${testManyToOne.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ testManyToOne }: IRootState) => ({
  testManyToOneList: testManyToOne.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyToOneMySuffix);
