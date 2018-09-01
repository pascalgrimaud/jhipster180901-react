import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-many-to-one-my-suffix.reducer';
import { ITestManyToOneMySuffix } from 'app/shared/model/test-many-to-one-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestManyToOneMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class TestManyToOneMySuffixDetail extends React.Component<ITestManyToOneMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testManyToOneEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipster180901App.testManyToOne.detail.title">TestManyToOne</Translate> [<b>{testManyToOneEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testEntity">Test Entity</Translate>
            </dt>
            <dd>{testManyToOneEntity.testEntity ? testManyToOneEntity.testEntity.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testMapstruct">Test Mapstruct</Translate>
            </dt>
            <dd>{testManyToOneEntity.testMapstruct ? testManyToOneEntity.testMapstruct.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testServiceClass">Test Service Class</Translate>
            </dt>
            <dd>{testManyToOneEntity.testServiceClass ? testManyToOneEntity.testServiceClass.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testServiceImpl">Test Service Impl</Translate>
            </dt>
            <dd>{testManyToOneEntity.testServiceImpl ? testManyToOneEntity.testServiceImpl.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testInfiniteScroll">Test Infinite Scroll</Translate>
            </dt>
            <dd>{testManyToOneEntity.testInfiniteScroll ? testManyToOneEntity.testInfiniteScroll.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testPager">Test Pager</Translate>
            </dt>
            <dd>{testManyToOneEntity.testPager ? testManyToOneEntity.testPager.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testPagination">Test Pagination</Translate>
            </dt>
            <dd>{testManyToOneEntity.testPagination ? testManyToOneEntity.testPagination.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testManyToOne.testCustomTableName">Test Custom Table Name</Translate>
            </dt>
            <dd>{testManyToOneEntity.testCustomTableName ? testManyToOneEntity.testCustomTableName.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/test-many-to-one-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/test-many-to-one-my-suffix/${testManyToOneEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ testManyToOne }: IRootState) => ({
  testManyToOneEntity: testManyToOne.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyToOneMySuffixDetail);
