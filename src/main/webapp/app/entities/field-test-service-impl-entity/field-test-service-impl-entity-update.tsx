import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-service-impl-entity.reducer';
import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestServiceImplEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestServiceImplEntityUpdateState {
  isNew: boolean;
}

export class FieldTestServiceImplEntityUpdate extends React.Component<
  IFieldTestServiceImplEntityUpdateProps,
  IFieldTestServiceImplEntityUpdateState
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
    values.instantMika = new Date(values.instantMika);
    values.instanteRequiredMika = new Date(values.instanteRequiredMika);
    values.zonedDateTimeMika = new Date(values.zonedDateTimeMika);
    values.zonedDateTimeRequiredMika = new Date(values.zonedDateTimeRequiredMika);

    if (errors.length === 0) {
      const { fieldTestServiceImplEntityEntity } = this.props;
      const entity = {
        ...fieldTestServiceImplEntityEntity,
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
    this.props.history.push('/entity/field-test-service-impl-entity');
  };

  render() {
    const { fieldTestServiceImplEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageMika,
      byteImageMikaContentType,
      byteImageRequiredMika,
      byteImageRequiredMikaContentType,
      byteImageMinbytesMika,
      byteImageMinbytesMikaContentType,
      byteImageMaxbytesMika,
      byteImageMaxbytesMikaContentType,
      byteAnyMika,
      byteAnyMikaContentType,
      byteAnyRequiredMika,
      byteAnyRequiredMikaContentType,
      byteAnyMinbytesMika,
      byteAnyMinbytesMikaContentType,
      byteAnyMaxbytesMika,
      byteAnyMaxbytesMikaContentType,
      byteTextMika,
      byteTextRequiredMika,
      byteTextMinbytesMika,
      byteTextMaxbytesMika
    } = fieldTestServiceImplEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestServiceImplEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.home.createOrEditLabel">
                Create or edit a FieldTestServiceImplEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestServiceImplEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-service-impl-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringMikaLabel" for="stringMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringMika">String Mika</Translate>
                  </Label>
                  <AvField id="field-test-service-impl-entity-stringMika" type="text" name="stringMika" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredMikaLabel" for="stringRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringRequiredMika">String Required Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-stringRequiredMika"
                    type="text"
                    name="stringRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthMikaLabel" for="stringMinlengthMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringMinlengthMika">
                      String Minlength Mika
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-stringMinlengthMika"
                    type="text"
                    name="stringMinlengthMika"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthMikaLabel" for="stringMaxlengthMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringMaxlengthMika">
                      String Maxlength Mika
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-stringMaxlengthMika"
                    type="text"
                    name="stringMaxlengthMika"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternMikaLabel" for="stringPatternMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringPatternMika">String Pattern Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-stringPatternMika"
                    type="text"
                    name="stringPatternMika"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMikaLabel" for="integerMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerMika">Integer Mika</Translate>
                  </Label>
                  <AvField id="field-test-service-impl-entity-integerMika" type="number" className="form-control" name="integerMika" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredMikaLabel" for="integerRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerRequiredMika">
                      Integer Required Mika
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-integerRequiredMika"
                    type="number"
                    className="form-control"
                    name="integerRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinMikaLabel" for="integerMinMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerMinMika">Integer Min Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-integerMinMika"
                    type="number"
                    className="form-control"
                    name="integerMinMika"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxMikaLabel" for="integerMaxMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerMaxMika">Integer Max Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-integerMaxMika"
                    type="number"
                    className="form-control"
                    name="integerMaxMika"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMikaLabel" for="longMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longMika">Long Mika</Translate>
                  </Label>
                  <AvField id="field-test-service-impl-entity-longMika" type="number" className="form-control" name="longMika" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredMikaLabel" for="longRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longRequiredMika">Long Required Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-longRequiredMika"
                    type="number"
                    className="form-control"
                    name="longRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinMikaLabel" for="longMinMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longMinMika">Long Min Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-longMinMika"
                    type="number"
                    className="form-control"
                    name="longMinMika"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxMikaLabel" for="longMaxMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longMaxMika">Long Max Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-longMaxMika"
                    type="number"
                    className="form-control"
                    name="longMaxMika"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMikaLabel" for="floatMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatMika">Float Mika</Translate>
                  </Label>
                  <AvField id="field-test-service-impl-entity-floatMika" type="number" className="form-control" name="floatMika" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredMikaLabel" for="floatRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatRequiredMika">Float Required Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-floatRequiredMika"
                    type="number"
                    className="form-control"
                    name="floatRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinMikaLabel" for="floatMinMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatMinMika">Float Min Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-floatMinMika"
                    type="number"
                    className="form-control"
                    name="floatMinMika"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxMikaLabel" for="floatMaxMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatMaxMika">Float Max Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-floatMaxMika"
                    type="number"
                    className="form-control"
                    name="floatMaxMika"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredMikaLabel" for="doubleRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.doubleRequiredMika">Double Required Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-doubleRequiredMika"
                    type="number"
                    className="form-control"
                    name="doubleRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinMikaLabel" for="doubleMinMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.doubleMinMika">Double Min Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-doubleMinMika"
                    type="number"
                    className="form-control"
                    name="doubleMinMika"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxMikaLabel" for="doubleMaxMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.doubleMaxMika">Double Max Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-doubleMaxMika"
                    type="number"
                    className="form-control"
                    name="doubleMaxMika"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredMikaLabel" for="bigDecimalRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.bigDecimalRequiredMika">
                      Big Decimal Required Mika
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-bigDecimalRequiredMika"
                    type="text"
                    name="bigDecimalRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinMikaLabel" for="bigDecimalMinMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.bigDecimalMinMika">Big Decimal Min Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-bigDecimalMinMika"
                    type="text"
                    name="bigDecimalMinMika"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxMikaLabel" for="bigDecimalMaxMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.bigDecimalMaxMika">Big Decimal Max Mika</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-bigDecimalMaxMika"
                    type="text"
                    name="bigDecimalMaxMika"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateMikaLabel" for="localDateMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.localDateMika">Local Date Mika</Translate>
                  </Label>
                  <AvField id="field-test-service-impl-entity-localDateMika" type="date" className="form-control" name="localDateMika" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredMikaLabel" for="localDateRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.localDateRequiredMika">
                      Local Date Required Mika
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-impl-entity-localDateRequiredMika"
                    type="date"
                    className="form-control"
                    name="localDateRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantMikaLabel" for="instantMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.instantMika">Instant Mika</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-instantMika"
                    type="datetime-local"
                    className="form-control"
                    name="instantMika"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceImplEntityEntity.instantMika)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredMikaLabel" for="instanteRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.instanteRequiredMika">
                      Instante Required Mika
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-instanteRequiredMika"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredMika"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceImplEntityEntity.instanteRequiredMika)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeMikaLabel" for="zonedDateTimeMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.zonedDateTimeMika">Zoned Date Time Mika</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-zonedDateTimeMika"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeMika"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceImplEntityEntity.zonedDateTimeMika)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredMikaLabel" for="zonedDateTimeRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.zonedDateTimeRequiredMika">
                      Zoned Date Time Required Mika
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-zonedDateTimeRequiredMika"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredMika"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceImplEntityEntity.zonedDateTimeRequiredMika)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanMikaLabel" check>
                    <AvInput id="field-test-service-impl-entity-booleanMika" type="checkbox" className="form-control" name="booleanMika" />
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.booleanMika">Boolean Mika</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredMikaLabel" check>
                    <AvInput
                      id="field-test-service-impl-entity-booleanRequiredMika"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredMika"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.booleanRequiredMika">
                      Boolean Required Mika
                    </Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumMikaLabel">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.enumMika">Enum Mika</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-enumMika"
                    type="select"
                    className="form-control"
                    name="enumMika"
                    value={(!isNew && fieldTestServiceImplEntityEntity.enumMika) || 'ENUM_VALUE_1'}
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
                  <Label id="enumRequiredMikaLabel">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.enumRequiredMika">Enum Required Mika</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-enumRequiredMika"
                    type="select"
                    className="form-control"
                    name="enumRequiredMika"
                    value={(!isNew && fieldTestServiceImplEntityEntity.enumRequiredMika) || 'ENUM_VALUE_1'}
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
                    <Label id="byteImageMikaLabel" for="byteImageMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageMika">Byte Image Mika</Translate>
                    </Label>
                    <br />
                    {byteImageMika ? (
                      <div>
                        <a onClick={openFile(byteImageMikaContentType, byteImageMika)}>
                          <img src={`data:${byteImageMikaContentType};base64,${byteImageMika}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMikaContentType}, {byteSize(byteImageMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageMika" type="file" onChange={this.onBlobChange(true, 'byteImageMika')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageMika" value={byteImageMika} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredMikaLabel" for="byteImageRequiredMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageRequiredMika">
                        Byte Image Required Mika
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredMika ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredMikaContentType, byteImageRequiredMika)}>
                          <img
                            src={`data:${byteImageRequiredMikaContentType};base64,${byteImageRequiredMika}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredMikaContentType}, {byteSize(byteImageRequiredMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredMika"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredMika')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredMika"
                      value={byteImageRequiredMika}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesMikaLabel" for="byteImageMinbytesMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageMinbytesMika">
                        Byte Image Minbytes Mika
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesMika ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesMikaContentType, byteImageMinbytesMika)}>
                          <img
                            src={`data:${byteImageMinbytesMikaContentType};base64,${byteImageMinbytesMika}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesMikaContentType}, {byteSize(byteImageMinbytesMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesMika"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesMika')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesMika" value={byteImageMinbytesMika} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesMikaLabel" for="byteImageMaxbytesMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageMaxbytesMika">
                        Byte Image Maxbytes Mika
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesMika ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesMikaContentType, byteImageMaxbytesMika)}>
                          <img
                            src={`data:${byteImageMaxbytesMikaContentType};base64,${byteImageMaxbytesMika}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesMikaContentType}, {byteSize(byteImageMaxbytesMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesMika"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesMika')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesMika" value={byteImageMaxbytesMika} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMikaLabel" for="byteAnyMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyMika">Byte Any Mika</Translate>
                    </Label>
                    <br />
                    {byteAnyMika ? (
                      <div>
                        <a onClick={openFile(byteAnyMikaContentType, byteAnyMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMikaContentType}, {byteSize(byteAnyMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMika" type="file" onChange={this.onBlobChange(false, 'byteAnyMika')} />
                    <AvInput type="hidden" name="byteAnyMika" value={byteAnyMika} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredMikaLabel" for="byteAnyRequiredMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyRequiredMika">
                        Byte Any Required Mika
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredMika ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredMikaContentType, byteAnyRequiredMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredMikaContentType}, {byteSize(byteAnyRequiredMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredMika" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredMika')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredMika"
                      value={byteAnyRequiredMika}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesMikaLabel" for="byteAnyMinbytesMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyMinbytesMika">
                        Byte Any Minbytes Mika
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesMika ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesMikaContentType, byteAnyMinbytesMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesMikaContentType}, {byteSize(byteAnyMinbytesMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesMika" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesMika')} />
                    <AvInput type="hidden" name="byteAnyMinbytesMika" value={byteAnyMinbytesMika} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesMikaLabel" for="byteAnyMaxbytesMika">
                      <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyMaxbytesMika">
                        Byte Any Maxbytes Mika
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesMika ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesMikaContentType, byteAnyMaxbytesMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesMikaContentType}, {byteSize(byteAnyMaxbytesMika)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesMika')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesMika" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesMika')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesMika" value={byteAnyMaxbytesMika} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMikaLabel" for="byteTextMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextMika">Byte Text Mika</Translate>
                  </Label>
                  <AvInput id="field-test-service-impl-entity-byteTextMika" type="textarea" name="byteTextMika" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredMikaLabel" for="byteTextRequiredMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextRequiredMika">
                      Byte Text Required Mika
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-byteTextRequiredMika"
                    type="textarea"
                    name="byteTextRequiredMika"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesMikaLabel" for="byteTextMinbytesMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextMinbytesMika">
                      Byte Text Minbytes Mika
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-byteTextMinbytesMika"
                    type="textarea"
                    name="byteTextMinbytesMika"
                    validate={{}}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesMikaLabel" for="byteTextMaxbytesMika">
                    <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextMaxbytesMika">
                      Byte Text Maxbytes Mika
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-impl-entity-byteTextMaxbytesMika"
                    type="textarea"
                    name="byteTextMaxbytesMika"
                    validate={{}}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-service-impl-entity" replace color="info">
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
  fieldTestServiceImplEntityEntity: storeState.fieldTestServiceImplEntity.entity,
  loading: storeState.fieldTestServiceImplEntity.loading,
  updating: storeState.fieldTestServiceImplEntity.updating
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
)(FieldTestServiceImplEntityUpdate);
