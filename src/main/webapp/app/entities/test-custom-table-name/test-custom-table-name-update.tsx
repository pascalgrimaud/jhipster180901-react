import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { getEntities as getTestManyToManies } from 'app/entities/test-many-to-many-my-suffix/test-many-to-many-my-suffix.reducer';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { getEntities as getTestOneToOnes } from 'app/entities/test-one-to-one-my-suffix/test-one-to-one-my-suffix.reducer';
import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { getEntities as getTestEntities } from 'app/entities/test-entity-my-suffix-alt/test-entity-my-suffix-alt.reducer';
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-custom-table-name.reducer';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestCustomTableNameUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ITestCustomTableNameUpdateState {
  isNew: boolean;
  idsuserManyToMany: any[];
  testManyToManyId: number;
  testOneToOneId: number;
  testEntityId: number;
  userOneToManyId: number;
  userOneToOneId: number;
}

export class TestCustomTableNameUpdate extends React.Component<ITestCustomTableNameUpdateProps, ITestCustomTableNameUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsuserManyToMany: [],
      testManyToManyId: 0,
      testOneToOneId: 0,
      testEntityId: 0,
      userOneToManyId: 0,
      userOneToOneId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getTestManyToManies();
    this.props.getTestOneToOnes();
    this.props.getTestEntities();
    this.props.getUsers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testCustomTableNameEntity } = this.props;
      const entity = {
        ...testCustomTableNameEntity,
        ...values,
        userManyToManies: mapIdList(values.userManyToManies)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/test-custom-table-name');
  };

  render() {
    const { testCustomTableNameEntity, testManyToManies, testOneToOnes, testEntities, users, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.testCustomTableName.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.testCustomTableName.home.createOrEditLabel">
                Create or edit a TestCustomTableName
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testCustomTableNameEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-custom-table-name-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="testEntity.id">
                    <Translate contentKey="jhipster180901App.testCustomTableName.testEntity">Test Entity</Translate>
                  </Label>
                  <AvInput
                    id="test-custom-table-name-testEntity"
                    type="select"
                    className="form-control"
                    name="testEntity.id"
                    value={isNew ? testEntities[0] && testEntities[0].id : testCustomTableNameEntity.testEntity.id}
                  >
                    {testEntities
                      ? testEntities.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="userOneToMany.login">
                    <Translate contentKey="jhipster180901App.testCustomTableName.userOneToMany">User One To Many</Translate>
                  </Label>
                  <AvInput id="test-custom-table-name-userOneToMany" type="select" className="form-control" name="userOneToMany.id">
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="users">
                    <Translate contentKey="jhipster180901App.testCustomTableName.userManyToMany">User Many To Many</Translate>
                  </Label>
                  <AvInput
                    id="test-custom-table-name-userManyToMany"
                    type="select"
                    multiple
                    className="form-control"
                    name="userManyToManies"
                    value={testCustomTableNameEntity.userManyToManies && testCustomTableNameEntity.userManyToManies.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="userOneToOne.login">
                    <Translate contentKey="jhipster180901App.testCustomTableName.userOneToOne">User One To One</Translate>
                  </Label>
                  <AvInput id="test-custom-table-name-userOneToOne" type="select" className="form-control" name="userOneToOne.id">
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/test-custom-table-name" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  testManyToManies: storeState.testManyToMany.entities,
  testOneToOnes: storeState.testOneToOne.entities,
  testEntities: storeState.testEntity.entities,
  users: storeState.userManagement.users,
  testCustomTableNameEntity: storeState.testCustomTableName.entity,
  loading: storeState.testCustomTableName.loading,
  updating: storeState.testCustomTableName.updating
});

const mapDispatchToProps = {
  getTestManyToManies,
  getTestOneToOnes,
  getTestEntities,
  getUsers,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCustomTableNameUpdate);
