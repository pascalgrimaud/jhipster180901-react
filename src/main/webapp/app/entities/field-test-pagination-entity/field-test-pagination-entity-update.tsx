import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-pagination-entity.reducer';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestPaginationEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestPaginationEntityUpdateState {
  isNew: boolean;
}

export class FieldTestPaginationEntityUpdate extends React.Component<
  IFieldTestPaginationEntityUpdateProps,
  IFieldTestPaginationEntityUpdateState
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

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  clearBlob = name => () => {
    this.props.setBlob(name, undefined, undefined);
  };

  saveEntity = (event, errors, values) => {
    values.instantAlice = new Date(values.instantAlice);
    values.instanteRequiredAlice = new Date(values.instanteRequiredAlice);
    values.zonedDateTimeAlice = new Date(values.zonedDateTimeAlice);
    values.zonedDateTimeRequiredAlice = new Date(values.zonedDateTimeRequiredAlice);

    if (errors.length === 0) {
      const { fieldTestPaginationEntityEntity } = this.props;
      const entity = {
        ...fieldTestPaginationEntityEntity,
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
    this.props.history.push('/entity/field-test-pagination-entity');
  };

  render() {
    const { fieldTestPaginationEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageAlice,
      byteImageAliceContentType,
      byteImageRequiredAlice,
      byteImageRequiredAliceContentType,
      byteImageMinbytesAlice,
      byteImageMinbytesAliceContentType,
      byteImageMaxbytesAlice,
      byteImageMaxbytesAliceContentType,
      byteAnyAlice,
      byteAnyAliceContentType,
      byteAnyRequiredAlice,
      byteAnyRequiredAliceContentType,
      byteAnyMinbytesAlice,
      byteAnyMinbytesAliceContentType,
      byteAnyMaxbytesAlice,
      byteAnyMaxbytesAliceContentType,
      byteTextAlice,
      byteTextRequiredAlice,
      byteTextMinbytesAlice,
      byteTextMaxbytesAlice
    } = fieldTestPaginationEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestPaginationEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.home.createOrEditLabel">
                Create or edit a FieldTestPaginationEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestPaginationEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-pagination-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringAliceLabel" for="stringAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringAlice">String Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-stringAlice" type="text" name="stringAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredAliceLabel" for="stringRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringRequiredAlice">
                      String Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringRequiredAlice"
                    type="text"
                    name="stringRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthAliceLabel" for="stringMinlengthAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringMinlengthAlice">
                      String Minlength Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringMinlengthAlice"
                    type="text"
                    name="stringMinlengthAlice"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthAliceLabel" for="stringMaxlengthAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringMaxlengthAlice">
                      String Maxlength Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringMaxlengthAlice"
                    type="text"
                    name="stringMaxlengthAlice"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternAliceLabel" for="stringPatternAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringPatternAlice">String Pattern Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringPatternAlice"
                    type="text"
                    name="stringPatternAlice"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerAliceLabel" for="integerAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-integerAlice" type="number" className="form-control" name="integerAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredAliceLabel" for="integerRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerRequiredAlice">
                      Integer Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-integerRequiredAlice"
                    type="number"
                    className="form-control"
                    name="integerRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinAliceLabel" for="integerMinAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-integerMinAlice"
                    type="number"
                    className="form-control"
                    name="integerMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxAliceLabel" for="integerMaxAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-integerMaxAlice"
                    type="number"
                    className="form-control"
                    name="integerMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longAliceLabel" for="longAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longAlice">Long Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-longAlice" type="number" className="form-control" name="longAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredAliceLabel" for="longRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longRequiredAlice">Long Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-longRequiredAlice"
                    type="number"
                    className="form-control"
                    name="longRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinAliceLabel" for="longMinAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-longMinAlice"
                    type="number"
                    className="form-control"
                    name="longMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxAliceLabel" for="longMaxAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-longMaxAlice"
                    type="number"
                    className="form-control"
                    name="longMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatAliceLabel" for="floatAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-floatAlice" type="number" className="form-control" name="floatAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredAliceLabel" for="floatRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatRequiredAlice">Float Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-floatRequiredAlice"
                    type="number"
                    className="form-control"
                    name="floatRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinAliceLabel" for="floatMinAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-floatMinAlice"
                    type="number"
                    className="form-control"
                    name="floatMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxAliceLabel" for="floatMaxAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-floatMaxAlice"
                    type="number"
                    className="form-control"
                    name="floatMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredAliceLabel" for="doubleRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.doubleRequiredAlice">
                      Double Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-doubleRequiredAlice"
                    type="number"
                    className="form-control"
                    name="doubleRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinAliceLabel" for="doubleMinAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-doubleMinAlice"
                    type="number"
                    className="form-control"
                    name="doubleMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxAliceLabel" for="doubleMaxAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-doubleMaxAlice"
                    type="number"
                    className="form-control"
                    name="doubleMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredAliceLabel" for="bigDecimalRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                      Big Decimal Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-bigDecimalRequiredAlice"
                    type="text"
                    name="bigDecimalRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinAliceLabel" for="bigDecimalMinAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.bigDecimalMinAlice">Big Decimal Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-bigDecimalMinAlice"
                    type="text"
                    name="bigDecimalMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxAliceLabel" for="bigDecimalMaxAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.bigDecimalMaxAlice">Big Decimal Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-bigDecimalMaxAlice"
                    type="text"
                    name="bigDecimalMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateAliceLabel" for="localDateAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-localDateAlice" type="date" className="form-control" name="localDateAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredAliceLabel" for="localDateRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.localDateRequiredAlice">
                      Local Date Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-localDateRequiredAlice"
                    type="date"
                    className="form-control"
                    name="localDateRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantAliceLabel" for="instantAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-instantAlice"
                    type="datetime-local"
                    className="form-control"
                    name="instantAlice"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.instantAlice)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredAliceLabel" for="instanteRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.instanteRequiredAlice">
                      Instante Required Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-instanteRequiredAlice"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredAlice"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.instanteRequiredAlice)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeAliceLabel" for="zonedDateTimeAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.zonedDateTimeAlice">Zoned Date Time Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-zonedDateTimeAlice"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeAlice"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.zonedDateTimeAlice)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredAliceLabel" for="zonedDateTimeRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                      Zoned Date Time Required Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-zonedDateTimeRequiredAlice"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredAlice"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.zonedDateTimeRequiredAlice)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanAliceLabel" check>
                    <AvInput id="field-test-pagination-entity-booleanAlice" type="checkbox" className="form-control" name="booleanAlice" />
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredAliceLabel" check>
                    <AvInput
                      id="field-test-pagination-entity-booleanRequiredAlice"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredAlice"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.booleanRequiredAlice">
                      Boolean Required Alice
                    </Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumAliceLabel">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-enumAlice"
                    type="select"
                    className="form-control"
                    name="enumAlice"
                    value={(!isNew && fieldTestPaginationEntityEntity.enumAlice) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">
                      <Translate contentKey="jhipster180901App.EnumFieldClass.ENUM_VALUE_1" />
                    </option>
                    <option value="ENUM_VALUE_2">
                      <Translate contentKey="jhipster180901App.EnumFieldClass.ENUM_VALUE_2" />
                    </option>
                    <option value="ENUM_VALUE_3">
                      <Translate contentKey="jhipster180901App.EnumFieldClass.ENUM_VALUE_3" />
                    </option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="enumRequiredAliceLabel">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.enumRequiredAlice">Enum Required Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-enumRequiredAlice"
                    type="select"
                    className="form-control"
                    name="enumRequiredAlice"
                    value={(!isNew && fieldTestPaginationEntityEntity.enumRequiredAlice) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">
                      <Translate contentKey="jhipster180901App.EnumRequiredFieldClass.ENUM_VALUE_1" />
                    </option>
                    <option value="ENUM_VALUE_2">
                      <Translate contentKey="jhipster180901App.EnumRequiredFieldClass.ENUM_VALUE_2" />
                    </option>
                    <option value="ENUM_VALUE_3">
                      <Translate contentKey="jhipster180901App.EnumRequiredFieldClass.ENUM_VALUE_3" />
                    </option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageAliceLabel" for="byteImageAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>
                    </Label>
                    <br />
                    {byteImageAlice ? (
                      <div>
                        <a onClick={openFile(byteImageAliceContentType, byteImageAlice)}>
                          <img src={`data:${byteImageAliceContentType};base64,${byteImageAlice}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageAliceContentType}, {byteSize(byteImageAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageAlice" type="file" onChange={this.onBlobChange(true, 'byteImageAlice')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageAlice" value={byteImageAlice} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredAliceLabel" for="byteImageRequiredAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageRequiredAlice">
                        Byte Image Required Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredAlice ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredAliceContentType, byteImageRequiredAlice)}>
                          <img
                            src={`data:${byteImageRequiredAliceContentType};base64,${byteImageRequiredAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredAliceContentType}, {byteSize(byteImageRequiredAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredAlice"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredAlice')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredAlice"
                      value={byteImageRequiredAlice}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesAliceLabel" for="byteImageMinbytesAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageMinbytesAlice">
                        Byte Image Minbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesAliceContentType, byteImageMinbytesAlice)}>
                          <img
                            src={`data:${byteImageMinbytesAliceContentType};base64,${byteImageMinbytesAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesAliceContentType}, {byteSize(byteImageMinbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesAlice"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesAlice')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesAlice" value={byteImageMinbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesAliceLabel" for="byteImageMaxbytesAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                        Byte Image Maxbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesAliceContentType, byteImageMaxbytesAlice)}>
                          <img
                            src={`data:${byteImageMaxbytesAliceContentType};base64,${byteImageMaxbytesAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesAliceContentType}, {byteSize(byteImageMaxbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesAlice"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesAlice')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesAlice" value={byteImageMaxbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyAliceLabel" for="byteAnyAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>
                    </Label>
                    <br />
                    {byteAnyAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyAliceContentType, byteAnyAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyAliceContentType}, {byteSize(byteAnyAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyAlice')} />
                    <AvInput type="hidden" name="byteAnyAlice" value={byteAnyAlice} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredAliceLabel" for="byteAnyRequiredAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyRequiredAlice">
                        Byte Any Required Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredAliceContentType, byteAnyRequiredAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredAliceContentType}, {byteSize(byteAnyRequiredAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredAlice')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredAlice"
                      value={byteAnyRequiredAlice}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesAliceLabel" for="byteAnyMinbytesAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyMinbytesAlice">
                        Byte Any Minbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesAliceContentType, byteAnyMinbytesAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesAliceContentType}, {byteSize(byteAnyMinbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesAlice')} />
                    <AvInput type="hidden" name="byteAnyMinbytesAlice" value={byteAnyMinbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesAliceLabel" for="byteAnyMaxbytesAlice">
                      <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyMaxbytesAlice">
                        Byte Any Maxbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesAliceContentType, byteAnyMaxbytesAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesAliceContentType}, {byteSize(byteAnyMaxbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesAlice')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesAlice" value={byteAnyMaxbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextAliceLabel" for="byteTextAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>
                  </Label>
                  <AvInput id="field-test-pagination-entity-byteTextAlice" type="textarea" name="byteTextAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredAliceLabel" for="byteTextRequiredAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextRequiredAlice">
                      Byte Text Required Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-byteTextRequiredAlice"
                    type="textarea"
                    name="byteTextRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesAliceLabel" for="byteTextMinbytesAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextMinbytesAlice">
                      Byte Text Minbytes Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-byteTextMinbytesAlice"
                    type="textarea"
                    name="byteTextMinbytesAlice"
                    validate={{}}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesAliceLabel" for="byteTextMaxbytesAlice">
                    <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextMaxbytesAlice">
                      Byte Text Maxbytes Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-byteTextMaxbytesAlice"
                    type="textarea"
                    name="byteTextMaxbytesAlice"
                    validate={{}}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-pagination-entity" replace color="info">
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
  fieldTestPaginationEntityEntity: storeState.fieldTestPaginationEntity.entity,
  loading: storeState.fieldTestPaginationEntity.loading,
  updating: storeState.fieldTestPaginationEntity.updating
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPaginationEntityUpdate);
