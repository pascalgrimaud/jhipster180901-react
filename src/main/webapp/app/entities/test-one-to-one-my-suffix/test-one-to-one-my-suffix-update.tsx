import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { getEntities as getTestEntities } from 'app/entities/test-entity-my-suffix-alt/test-entity-my-suffix-alt.reducer';
import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { getEntities as getTestMapstructs } from 'app/entities/test-mapstruct/test-mapstruct.reducer';
import { ITestServiceClass } from 'app/shared/model/test-service-class.model';
import { getEntities as getTestServiceClasses } from 'app/entities/test-service-class/test-service-class.reducer';
import { ITestServiceImpl } from 'app/shared/model/test-service-impl.model';
import { getEntities as getTestServiceImpls } from 'app/entities/test-service-impl/test-service-impl.reducer';
import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { getEntities as getTestInfiniteScrolls } from 'app/entities/test-infinite-scroll/test-infinite-scroll.reducer';
import { ITestPager } from 'app/shared/model/test-pager.model';
import { getEntities as getTestPagers } from 'app/entities/test-pager/test-pager.reducer';
import { ITestPagination } from 'app/shared/model/test-pagination.model';
import { getEntities as getTestPaginations } from 'app/entities/test-pagination/test-pagination.reducer';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';
import { getEntities as getTestCustomTableNames } from 'app/entities/test-custom-table-name/test-custom-table-name.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-one-to-one-my-suffix.reducer';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestOneToOneMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ITestOneToOneMySuffixUpdateState {
  isNew: boolean;
  testEntityId: number;
  testMapstructId: number;
  testServiceClassId: number;
  testServiceImplId: number;
  testInfiniteScrollId: number;
  testPagerId: number;
  testPaginationId: number;
  testCustomTableNameId: number;
}

export class TestOneToOneMySuffixUpdate extends React.Component<ITestOneToOneMySuffixUpdateProps, ITestOneToOneMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      testEntityId: 0,
      testMapstructId: 0,
      testServiceClassId: 0,
      testServiceImplId: 0,
      testInfiniteScrollId: 0,
      testPagerId: 0,
      testPaginationId: 0,
      testCustomTableNameId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getTestEntities();
    this.props.getTestMapstructs();
    this.props.getTestServiceClasses();
    this.props.getTestServiceImpls();
    this.props.getTestInfiniteScrolls();
    this.props.getTestPagers();
    this.props.getTestPaginations();
    this.props.getTestCustomTableNames();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testOneToOneEntity } = this.props;
      const entity = {
        ...testOneToOneEntity,
        ...values
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
    this.props.history.push('/entity/test-one-to-one-my-suffix');
  };

  render() {
    const {
      testOneToOneEntity,
      testEntities,
      testMapstructs,
      testServiceClasses,
      testServiceImpls,
      testInfiniteScrolls,
      testPagers,
      testPaginations,
      testCustomTableNames,
      loading,
      updating
    } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.testOneToOne.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.testOneToOne.home.createOrEditLabel">Create or edit a TestOneToOne</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testOneToOneEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-one-to-one-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="testEntity.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testEntity">Test Entity</Translate>
                  </Label>
                  <AvInput id="test-one-to-one-my-suffix-testEntity" type="select" className="form-control" name="testEntity.id">
                    <option value="" key="0" />
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
                  <Label for="testMapstruct.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testMapstruct">Test Mapstruct</Translate>
                  </Label>
                  <AvInput id="test-one-to-one-my-suffix-testMapstruct" type="select" className="form-control" name="testMapstruct.id">
                    <option value="" key="0" />
                    {testMapstructs
                      ? testMapstructs.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="testServiceClass.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testServiceClass">Test Service Class</Translate>
                  </Label>
                  <AvInput
                    id="test-one-to-one-my-suffix-testServiceClass"
                    type="select"
                    className="form-control"
                    name="testServiceClass.id"
                  >
                    <option value="" key="0" />
                    {testServiceClasses
                      ? testServiceClasses.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="testServiceImpl.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testServiceImpl">Test Service Impl</Translate>
                  </Label>
                  <AvInput id="test-one-to-one-my-suffix-testServiceImpl" type="select" className="form-control" name="testServiceImpl.id">
                    <option value="" key="0" />
                    {testServiceImpls
                      ? testServiceImpls.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="testInfiniteScroll.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testInfiniteScroll">Test Infinite Scroll</Translate>
                  </Label>
                  <AvInput
                    id="test-one-to-one-my-suffix-testInfiniteScroll"
                    type="select"
                    className="form-control"
                    name="testInfiniteScroll.id"
                  >
                    <option value="" key="0" />
                    {testInfiniteScrolls
                      ? testInfiniteScrolls.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="testPager.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testPager">Test Pager</Translate>
                  </Label>
                  <AvInput id="test-one-to-one-my-suffix-testPager" type="select" className="form-control" name="testPager.id">
                    <option value="" key="0" />
                    {testPagers
                      ? testPagers.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="testPagination.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testPagination">Test Pagination</Translate>
                  </Label>
                  <AvInput id="test-one-to-one-my-suffix-testPagination" type="select" className="form-control" name="testPagination.id">
                    <option value="" key="0" />
                    {testPaginations
                      ? testPaginations.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="testCustomTableName.id">
                    <Translate contentKey="jhipster180901App.testOneToOne.testCustomTableName">Test Custom Table Name</Translate>
                  </Label>
                  <AvInput
                    id="test-one-to-one-my-suffix-testCustomTableName"
                    type="select"
                    className="form-control"
                    name="testCustomTableName.id"
                  >
                    <option value="" key="0" />
                    {testCustomTableNames
                      ? testCustomTableNames.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/test-one-to-one-my-suffix" replace color="info">
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
  testEntities: storeState.testEntity.entities,
  testMapstructs: storeState.testMapstruct.entities,
  testServiceClasses: storeState.testServiceClass.entities,
  testServiceImpls: storeState.testServiceImpl.entities,
  testInfiniteScrolls: storeState.testInfiniteScroll.entities,
  testPagers: storeState.testPager.entities,
  testPaginations: storeState.testPagination.entities,
  testCustomTableNames: storeState.testCustomTableName.entities,
  testOneToOneEntity: storeState.testOneToOne.entity,
  loading: storeState.testOneToOne.loading,
  updating: storeState.testOneToOne.updating
});

const mapDispatchToProps = {
  getTestEntities,
  getTestMapstructs,
  getTestServiceClasses,
  getTestServiceImpls,
  getTestInfiniteScrolls,
  getTestPagers,
  getTestPaginations,
  getTestCustomTableNames,
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
)(TestOneToOneMySuffixUpdate);
