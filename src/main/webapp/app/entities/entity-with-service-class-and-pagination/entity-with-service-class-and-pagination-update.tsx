import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-class-and-pagination.reducer';
import { IEntityWithServiceClassAndPagination } from 'app/shared/model/entity-with-service-class-and-pagination.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceClassAndPaginationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IEntityWithServiceClassAndPaginationUpdateState {
  isNew: boolean;
}

export class EntityWithServiceClassAndPaginationUpdate extends React.Component<
  IEntityWithServiceClassAndPaginationUpdateProps,
  IEntityWithServiceClassAndPaginationUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { entityWithServiceClassAndPaginationEntity } = this.props;
      const entity = {
        ...entityWithServiceClassAndPaginationEntity,
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
    this.props.history.push('/entity/entity-with-service-class-and-pagination');
  };

  render() {
    const { entityWithServiceClassAndPaginationEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.entityWithServiceClassAndPagination.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.entityWithServiceClassAndPagination.home.createOrEditLabel">
                Create or edit a EntityWithServiceClassAndPagination
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithServiceClassAndPaginationEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput
                      id="entity-with-service-class-and-pagination-id"
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                    />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="enzoLabel" for="enzo">
                    <Translate contentKey="jhipster180901App.entityWithServiceClassAndPagination.enzo">Enzo</Translate>
                  </Label>
                  <AvField id="entity-with-service-class-and-pagination-enzo" type="text" name="enzo" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/entity-with-service-class-and-pagination" replace color="info">
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
  entityWithServiceClassAndPaginationEntity: storeState.entityWithServiceClassAndPagination.entity,
  loading: storeState.entityWithServiceClassAndPagination.loading,
  updating: storeState.entityWithServiceClassAndPagination.updating
});

const mapDispatchToProps = {
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
)(EntityWithServiceClassAndPaginationUpdate);
