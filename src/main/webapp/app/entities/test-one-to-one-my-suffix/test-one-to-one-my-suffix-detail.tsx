import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-one-to-one-my-suffix.reducer';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestOneToOneMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class TestOneToOneMySuffixDetail extends React.Component<ITestOneToOneMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testOneToOneEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipster180901App.testOneToOne.detail.title">TestOneToOne</Translate> [<b>{testOneToOneEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testEntity">Test Entity</Translate>
            </dt>
            <dd>{testOneToOneEntity.testEntity ? testOneToOneEntity.testEntity.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testMapstruct">Test Mapstruct</Translate>
            </dt>
            <dd>{testOneToOneEntity.testMapstruct ? testOneToOneEntity.testMapstruct.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testServiceClass">Test Service Class</Translate>
            </dt>
            <dd>{testOneToOneEntity.testServiceClass ? testOneToOneEntity.testServiceClass.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testServiceImpl">Test Service Impl</Translate>
            </dt>
            <dd>{testOneToOneEntity.testServiceImpl ? testOneToOneEntity.testServiceImpl.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testInfiniteScroll">Test Infinite Scroll</Translate>
            </dt>
            <dd>{testOneToOneEntity.testInfiniteScroll ? testOneToOneEntity.testInfiniteScroll.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testPager">Test Pager</Translate>
            </dt>
            <dd>{testOneToOneEntity.testPager ? testOneToOneEntity.testPager.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testPagination">Test Pagination</Translate>
            </dt>
            <dd>{testOneToOneEntity.testPagination ? testOneToOneEntity.testPagination.id : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testOneToOne.testCustomTableName">Test Custom Table Name</Translate>
            </dt>
            <dd>{testOneToOneEntity.testCustomTableName ? testOneToOneEntity.testCustomTableName.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/test-one-to-one-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/test-one-to-one-my-suffix/${testOneToOneEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testOneToOne }: IRootState) => ({
  testOneToOneEntity: testOneToOne.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestOneToOneMySuffixDetail);
