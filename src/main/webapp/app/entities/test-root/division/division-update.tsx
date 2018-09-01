import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IPlace } from 'app/shared/model/test-root/place.model';
import { getEntities as getPlaces } from 'app/entities/test-root/place/place.reducer';
import { getEntity, updateEntity, createEntity, reset } from './division.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDivisionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IDivisionUpdateState {
  isNew: boolean;
  divisionsPlaceId: number;
  preferredPlaceId: number;
}

export class DivisionUpdate extends React.Component<IDivisionUpdateProps, IDivisionUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      divisionsPlaceId: 0,
      preferredPlaceId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getPlaces();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { divisionEntity } = this.props;
      const entity = {
        ...divisionEntity,
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
    this.props.history.push('/entity/division');
  };

  render() {
    const { divisionEntity, places, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.testRootDivision.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.testRootDivision.home.createOrEditLabel">Create or edit a Division</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : divisionEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="division-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="name">
                    <Translate contentKey="jhipster180901App.testRootDivision.name">Name</Translate>
                  </Label>
                  <AvField
                    id="division-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="shortNameLabel" for="shortName">
                    <Translate contentKey="jhipster180901App.testRootDivision.shortName">Short Name</Translate>
                  </Label>
                  <AvField id="division-shortName" type="text" name="shortName" validate={{}} />
                </AvGroup>
                <AvGroup>
                  <Label id="numberOfPeopleLabel" for="numberOfPeople">
                    <Translate contentKey="jhipster180901App.testRootDivision.numberOfPeople">Number Of People</Translate>
                  </Label>
                  <AvField id="division-numberOfPeople" type="number" className="form-control" name="numberOfPeople" />
                </AvGroup>
                <AvGroup>
                  <Label id="divisionTypeLabel">
                    <Translate contentKey="jhipster180901App.testRootDivision.divisionType">Division Type</Translate>
                  </Label>
                  <AvInput
                    id="division-divisionType"
                    type="select"
                    className="form-control"
                    name="divisionType"
                    value={(!isNew && divisionEntity.divisionType) || 'SCHOOL'}
                  >
                    <option value="SCHOOL">
                      <Translate contentKey="jhipster180901App.DivisionType.SCHOOL" />
                    </option>
                    <option value="CLASS">
                      <Translate contentKey="jhipster180901App.DivisionType.CLASS" />
                    </option>
                    <option value="SUBGROUP">
                      <Translate contentKey="jhipster180901App.DivisionType.SUBGROUP" />
                    </option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="colorBackgroundLabel" for="colorBackground">
                    <Translate contentKey="jhipster180901App.testRootDivision.colorBackground">Color Background</Translate>
                  </Label>
                  <AvField id="division-colorBackground" type="text" name="colorBackground" />
                </AvGroup>
                <AvGroup>
                  <Label id="colorTextLabel" for="colorText">
                    <Translate contentKey="jhipster180901App.testRootDivision.colorText">Color Text</Translate>
                  </Label>
                  <AvField id="division-colorText" type="text" name="colorText" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/division" replace color="info">
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
  places: storeState.place.entities,
  divisionEntity: storeState.division.entity,
  loading: storeState.division.loading,
  updating: storeState.division.updating
});

const mapDispatchToProps = {
  getPlaces,
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
)(DivisionUpdate);
