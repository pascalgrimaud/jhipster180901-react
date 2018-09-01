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
import { getEntity, updateEntity, createEntity, reset } from './test-many-to-many-my-suffix.reducer';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestManyToManyMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ITestManyToManyMySuffixUpdateState {
  isNew: boolean;
  idstestEntity: any[];
  idstestMapstruct: any[];
  idstestServiceClass: any[];
  idstestServiceImpl: any[];
  idstestInfiniteScroll: any[];
  idstestPager: any[];
  idstestPagination: any[];
  idstestCustomTableName: any[];
}

export class TestManyToManyMySuffixUpdate extends React.Component<ITestManyToManyMySuffixUpdateProps, ITestManyToManyMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idstestEntity: [],
      idstestMapstruct: [],
      idstestServiceClass: [],
      idstestServiceImpl: [],
      idstestInfiniteScroll: [],
      idstestPager: [],
      idstestPagination: [],
      idstestCustomTableName: [],
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
      const { testManyToManyEntity } = this.props;
      const entity = {
        ...testManyToManyEntity,
        ...values,
        testEntities: mapIdList(values.testEntities),
        testMapstructs: mapIdList(values.testMapstructs),
        testServiceClasses: mapIdList(values.testServiceClasses),
        testServiceImpls: mapIdList(values.testServiceImpls),
        testInfiniteScrolls: mapIdList(values.testInfiniteScrolls),
        testPagers: mapIdList(values.testPagers),
        testPaginations: mapIdList(values.testPaginations),
        testCustomTableNames: mapIdList(values.testCustomTableNames)
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
    this.props.history.push('/entity/test-many-to-many-my-suffix');
  };

  render() {
    const {
      testManyToManyEntity,
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
            <h2 id="jhipster180901App.testManyToMany.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.testManyToMany.home.createOrEditLabel">Create or edit a TestManyToMany</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testManyToManyEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-many-to-many-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="testEntities">
                    <Translate contentKey="jhipster180901App.testManyToMany.testEntity">Test Entity</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testEntity"
                    type="select"
                    multiple
                    className="form-control"
                    name="testEntities"
                    value={testManyToManyEntity.testEntities && testManyToManyEntity.testEntities.map(e => e.id)}
                  >
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
                  <Label for="testMapstructs">
                    <Translate contentKey="jhipster180901App.testManyToMany.testMapstruct">Test Mapstruct</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testMapstruct"
                    type="select"
                    multiple
                    className="form-control"
                    name="testMapstructs"
                    value={testManyToManyEntity.testMapstructs && testManyToManyEntity.testMapstructs.map(e => e.id)}
                  >
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
                  <Label for="testServiceClasses">
                    <Translate contentKey="jhipster180901App.testManyToMany.testServiceClass">Test Service Class</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testServiceClass"
                    type="select"
                    multiple
                    className="form-control"
                    name="testServiceClasses"
                    value={testManyToManyEntity.testServiceClasses && testManyToManyEntity.testServiceClasses.map(e => e.id)}
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
                  <Label for="testServiceImpls">
                    <Translate contentKey="jhipster180901App.testManyToMany.testServiceImpl">Test Service Impl</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testServiceImpl"
                    type="select"
                    multiple
                    className="form-control"
                    name="testServiceImpls"
                    value={testManyToManyEntity.testServiceImpls && testManyToManyEntity.testServiceImpls.map(e => e.id)}
                  >
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
                  <Label for="testInfiniteScrolls">
                    <Translate contentKey="jhipster180901App.testManyToMany.testInfiniteScroll">Test Infinite Scroll</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testInfiniteScroll"
                    type="select"
                    multiple
                    className="form-control"
                    name="testInfiniteScrolls"
                    value={testManyToManyEntity.testInfiniteScrolls && testManyToManyEntity.testInfiniteScrolls.map(e => e.id)}
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
                  <Label for="testPagers">
                    <Translate contentKey="jhipster180901App.testManyToMany.testPager">Test Pager</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testPager"
                    type="select"
                    multiple
                    className="form-control"
                    name="testPagers"
                    value={testManyToManyEntity.testPagers && testManyToManyEntity.testPagers.map(e => e.id)}
                  >
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
                  <Label for="testPaginations">
                    <Translate contentKey="jhipster180901App.testManyToMany.testPagination">Test Pagination</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testPagination"
                    type="select"
                    multiple
                    className="form-control"
                    name="testPaginations"
                    value={testManyToManyEntity.testPaginations && testManyToManyEntity.testPaginations.map(e => e.id)}
                  >
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
                  <Label for="testCustomTableNames">
                    <Translate contentKey="jhipster180901App.testManyToMany.testCustomTableName">Test Custom Table Name</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testCustomTableName"
                    type="select"
                    multiple
                    className="form-control"
                    name="testCustomTableNames"
                    value={testManyToManyEntity.testCustomTableNames && testManyToManyEntity.testCustomTableNames.map(e => e.id)}
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
                <Button tag={Link} id="cancel-save" to="/entity/test-many-to-many-my-suffix" replace color="info">
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
  testManyToManyEntity: storeState.testManyToMany.entity,
  loading: storeState.testManyToMany.loading,
  updating: storeState.testManyToMany.updating
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
)(TestManyToManyMySuffixUpdate);
