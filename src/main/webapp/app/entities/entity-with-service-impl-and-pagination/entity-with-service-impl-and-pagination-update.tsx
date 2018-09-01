import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-impl-and-pagination.reducer';
import { IEntityWithServiceImplAndPagination } from 'app/shared/model/entity-with-service-impl-and-pagination.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceImplAndPaginationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IEntityWithServiceImplAndPaginationUpdateState {
  isNew: boolean;
}

export class EntityWithServiceImplAndPaginationUpdate extends React.Component<
  IEntityWithServiceImplAndPaginationUpdateProps,
  IEntityWithServiceImplAndPaginationUpdateState
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
      const { entityWithServiceImplAndPaginationEntity } = this.props;
      const entity = {
        ...entityWithServiceImplAndPaginationEntity,
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
    this.props.history.push('/entity/entity-with-service-impl-and-pagination');
  };

  render() {
    const { entityWithServiceImplAndPaginationEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.entityWithServiceImplAndPagination.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.entityWithServiceImplAndPagination.home.createOrEditLabel">
                Create or edit a EntityWithServiceImplAndPagination
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithServiceImplAndPaginationEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput
                      id="entity-with-service-impl-and-pagination-id"
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                    />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="hugoLabel" for="hugo">
                    <Translate contentKey="jhipster180901App.entityWithServiceImplAndPagination.hugo">Hugo</Translate>
                  </Label>
                  <AvField id="entity-with-service-impl-and-pagination-hugo" type="text" name="hugo" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/entity-with-service-impl-and-pagination" replace color="info">
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
  entityWithServiceImplAndPaginationEntity: storeState.entityWithServiceImplAndPagination.entity,
  loading: storeState.entityWithServiceImplAndPagination.loading,
  updating: storeState.entityWithServiceImplAndPagination.updating
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
)(EntityWithServiceImplAndPaginationUpdate);
