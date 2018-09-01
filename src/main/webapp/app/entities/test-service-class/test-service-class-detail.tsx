import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-service-class.reducer';
import { ITestServiceClass } from 'app/shared/model/test-service-class.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestServiceClassDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class TestServiceClassDetail extends React.Component<ITestServiceClassDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testServiceClassEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipster180901App.testServiceClass.detail.title">TestServiceClass</Translate> [<b>
              {testServiceClassEntity.id}
            </b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="jhipster180901App.testServiceClass.userOneToMany">User One To Many</Translate>
            </dt>
            <dd>{testServiceClassEntity.userOneToMany ? testServiceClassEntity.userOneToMany.login : ''}</dd>
            <dt>
              <Translate contentKey="jhipster180901App.testServiceClass.userManyToMany">User Many To Many</Translate>
            </dt>
            <dd>
              {testServiceClassEntity.userManyToManies
                ? testServiceClassEntity.userManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === testServiceClassEntity.userManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="jhipster180901App.testServiceClass.userOneToOne">User One To One</Translate>
            </dt>
            <dd>{testServiceClassEntity.userOneToOne ? testServiceClassEntity.userOneToOne.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/test-service-class" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/test-service-class/${testServiceClassEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testServiceClass }: IRootState) => ({
  testServiceClassEntity: testServiceClass.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestServiceClassDetail);
