import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-entity.reducer';
import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestEntityUpdateState {
  isNew: boolean;
}

export class FieldTestEntityUpdate extends React.Component<IFieldTestEntityUpdateProps, IFieldTestEntityUpdateState> {
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
    values.instantTom = new Date(values.instantTom);
    values.instantRequiredTom = new Date(values.instantRequiredTom);
    values.zonedDateTimeTom = new Date(values.zonedDateTimeTom);
    values.zonedDateTimeRequiredTom = new Date(values.zonedDateTimeRequiredTom);

    if (errors.length === 0) {
      const { fieldTestEntityEntity } = this.props;
      const entity = {
        ...fieldTestEntityEntity,
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
    this.props.history.push('/entity/field-test-entity');
  };

  render() {
    const { fieldTestEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageTom,
      byteImageTomContentType,
      byteImageRequiredTom,
      byteImageRequiredTomContentType,
      byteImageMinbytesTom,
      byteImageMinbytesTomContentType,
      byteImageMaxbytesTom,
      byteImageMaxbytesTomContentType,
      byteAnyTom,
      byteAnyTomContentType,
      byteAnyRequiredTom,
      byteAnyRequiredTomContentType,
      byteAnyMinbytesTom,
      byteAnyMinbytesTomContentType,
      byteAnyMaxbytesTom,
      byteAnyMaxbytesTomContentType,
      byteTextTom,
      byteTextRequiredTom,
      byteTextMinbytesTom,
      byteTextMaxbytesTom
    } = fieldTestEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestEntity.home.createOrEditLabel">Create or edit a FieldTestEntity</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringTomLabel" for="stringTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.stringTom">String Tom</Translate>
                  </Label>
                  <AvField id="field-test-entity-stringTom" type="text" name="stringTom" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredTomLabel" for="stringRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.stringRequiredTom">String Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-stringRequiredTom"
                    type="text"
                    name="stringRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthTomLabel" for="stringMinlengthTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.stringMinlengthTom">String Minlength Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-stringMinlengthTom"
                    type="text"
                    name="stringMinlengthTom"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthTomLabel" for="stringMaxlengthTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.stringMaxlengthTom">String Maxlength Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-stringMaxlengthTom"
                    type="text"
                    name="stringMaxlengthTom"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternTomLabel" for="stringPatternTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.stringPatternTom">String Pattern Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-stringPatternTom"
                    type="text"
                    name="stringPatternTom"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerTomLabel" for="integerTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.integerTom">Integer Tom</Translate>
                  </Label>
                  <AvField id="field-test-entity-integerTom" type="number" className="form-control" name="integerTom" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredTomLabel" for="integerRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.integerRequiredTom">Integer Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-integerRequiredTom"
                    type="number"
                    className="form-control"
                    name="integerRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinTomLabel" for="integerMinTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.integerMinTom">Integer Min Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-integerMinTom"
                    type="number"
                    className="form-control"
                    name="integerMinTom"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxTomLabel" for="integerMaxTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.integerMaxTom">Integer Max Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-integerMaxTom"
                    type="number"
                    className="form-control"
                    name="integerMaxTom"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longTomLabel" for="longTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.longTom">Long Tom</Translate>
                  </Label>
                  <AvField id="field-test-entity-longTom" type="number" className="form-control" name="longTom" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredTomLabel" for="longRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.longRequiredTom">Long Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-longRequiredTom"
                    type="number"
                    className="form-control"
                    name="longRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinTomLabel" for="longMinTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.longMinTom">Long Min Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-longMinTom"
                    type="number"
                    className="form-control"
                    name="longMinTom"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxTomLabel" for="longMaxTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.longMaxTom">Long Max Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-longMaxTom"
                    type="number"
                    className="form-control"
                    name="longMaxTom"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatTomLabel" for="floatTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.floatTom">Float Tom</Translate>
                  </Label>
                  <AvField id="field-test-entity-floatTom" type="number" className="form-control" name="floatTom" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredTomLabel" for="floatRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.floatRequiredTom">Float Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-floatRequiredTom"
                    type="number"
                    className="form-control"
                    name="floatRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinTomLabel" for="floatMinTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.floatMinTom">Float Min Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-floatMinTom"
                    type="number"
                    className="form-control"
                    name="floatMinTom"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxTomLabel" for="floatMaxTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.floatMaxTom">Float Max Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-floatMaxTom"
                    type="number"
                    className="form-control"
                    name="floatMaxTom"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredTomLabel" for="doubleRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.doubleRequiredTom">Double Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-doubleRequiredTom"
                    type="number"
                    className="form-control"
                    name="doubleRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinTomLabel" for="doubleMinTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.doubleMinTom">Double Min Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-doubleMinTom"
                    type="number"
                    className="form-control"
                    name="doubleMinTom"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxTomLabel" for="doubleMaxTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.doubleMaxTom">Double Max Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-doubleMaxTom"
                    type="number"
                    className="form-control"
                    name="doubleMaxTom"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredTomLabel" for="bigDecimalRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.bigDecimalRequiredTom">Big Decimal Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-bigDecimalRequiredTom"
                    type="text"
                    name="bigDecimalRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinTomLabel" for="bigDecimalMinTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.bigDecimalMinTom">Big Decimal Min Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-bigDecimalMinTom"
                    type="text"
                    name="bigDecimalMinTom"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxTomLabel" for="bigDecimalMaxTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.bigDecimalMaxTom">Big Decimal Max Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-bigDecimalMaxTom"
                    type="text"
                    name="bigDecimalMaxTom"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateTomLabel" for="localDateTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.localDateTom">Local Date Tom</Translate>
                  </Label>
                  <AvField id="field-test-entity-localDateTom" type="date" className="form-control" name="localDateTom" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredTomLabel" for="localDateRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.localDateRequiredTom">Local Date Required Tom</Translate>
                  </Label>
                  <AvField
                    id="field-test-entity-localDateRequiredTom"
                    type="date"
                    className="form-control"
                    name="localDateRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantTomLabel" for="instantTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.instantTom">Instant Tom</Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-instantTom"
                    type="datetime-local"
                    className="form-control"
                    name="instantTom"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestEntityEntity.instantTom)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantRequiredTomLabel" for="instantRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.instantRequiredTom">Instant Required Tom</Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-instantRequiredTom"
                    type="datetime-local"
                    className="form-control"
                    name="instantRequiredTom"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestEntityEntity.instantRequiredTom)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeTomLabel" for="zonedDateTimeTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.zonedDateTimeTom">Zoned Date Time Tom</Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-zonedDateTimeTom"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeTom"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestEntityEntity.zonedDateTimeTom)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredTomLabel" for="zonedDateTimeRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.zonedDateTimeRequiredTom">
                      Zoned Date Time Required Tom
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-zonedDateTimeRequiredTom"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredTom"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestEntityEntity.zonedDateTimeRequiredTom)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanTomLabel" check>
                    <AvInput id="field-test-entity-booleanTom" type="checkbox" className="form-control" name="booleanTom" />
                    <Translate contentKey="jhipster180901App.fieldTestEntity.booleanTom">Boolean Tom</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredTomLabel" check>
                    <AvInput id="field-test-entity-booleanRequiredTom" type="checkbox" className="form-control" name="booleanRequiredTom" />
                    <Translate contentKey="jhipster180901App.fieldTestEntity.booleanRequiredTom">Boolean Required Tom</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumTomLabel">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.enumTom">Enum Tom</Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-enumTom"
                    type="select"
                    className="form-control"
                    name="enumTom"
                    value={(!isNew && fieldTestEntityEntity.enumTom) || 'ENUM_VALUE_1'}
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
                  <Label id="enumRequiredTomLabel">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.enumRequiredTom">Enum Required Tom</Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-enumRequiredTom"
                    type="select"
                    className="form-control"
                    name="enumRequiredTom"
                    value={(!isNew && fieldTestEntityEntity.enumRequiredTom) || 'ENUM_VALUE_1'}
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
                    <Label id="byteImageTomLabel" for="byteImageTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteImageTom">Byte Image Tom</Translate>
                    </Label>
                    <br />
                    {byteImageTom ? (
                      <div>
                        <a onClick={openFile(byteImageTomContentType, byteImageTom)}>
                          <img src={`data:${byteImageTomContentType};base64,${byteImageTom}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageTomContentType}, {byteSize(byteImageTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageTom" type="file" onChange={this.onBlobChange(true, 'byteImageTom')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageTom" value={byteImageTom} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredTomLabel" for="byteImageRequiredTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteImageRequiredTom">Byte Image Required Tom</Translate>
                    </Label>
                    <br />
                    {byteImageRequiredTom ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredTomContentType, byteImageRequiredTom)}>
                          <img
                            src={`data:${byteImageRequiredTomContentType};base64,${byteImageRequiredTom}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredTomContentType}, {byteSize(byteImageRequiredTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredTom"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredTom')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredTom"
                      value={byteImageRequiredTom}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesTomLabel" for="byteImageMinbytesTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteImageMinbytesTom">Byte Image Minbytes Tom</Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesTom ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesTomContentType, byteImageMinbytesTom)}>
                          <img
                            src={`data:${byteImageMinbytesTomContentType};base64,${byteImageMinbytesTom}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesTomContentType}, {byteSize(byteImageMinbytesTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesTom"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesTom')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesTom" value={byteImageMinbytesTom} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesTomLabel" for="byteImageMaxbytesTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteImageMaxbytesTom">Byte Image Maxbytes Tom</Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesTom ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesTomContentType, byteImageMaxbytesTom)}>
                          <img
                            src={`data:${byteImageMaxbytesTomContentType};base64,${byteImageMaxbytesTom}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesTomContentType}, {byteSize(byteImageMaxbytesTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesTom"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesTom')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesTom" value={byteImageMaxbytesTom} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyTomLabel" for="byteAnyTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteAnyTom">Byte Any Tom</Translate>
                    </Label>
                    <br />
                    {byteAnyTom ? (
                      <div>
                        <a onClick={openFile(byteAnyTomContentType, byteAnyTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyTomContentType}, {byteSize(byteAnyTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyTom" type="file" onChange={this.onBlobChange(false, 'byteAnyTom')} />
                    <AvInput type="hidden" name="byteAnyTom" value={byteAnyTom} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredTomLabel" for="byteAnyRequiredTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteAnyRequiredTom">Byte Any Required Tom</Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredTom ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredTomContentType, byteAnyRequiredTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredTomContentType}, {byteSize(byteAnyRequiredTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredTom" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredTom')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredTom"
                      value={byteAnyRequiredTom}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesTomLabel" for="byteAnyMinbytesTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteAnyMinbytesTom">Byte Any Minbytes Tom</Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesTom ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesTomContentType, byteAnyMinbytesTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesTomContentType}, {byteSize(byteAnyMinbytesTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesTom" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesTom')} />
                    <AvInput type="hidden" name="byteAnyMinbytesTom" value={byteAnyMinbytesTom} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesTomLabel" for="byteAnyMaxbytesTom">
                      <Translate contentKey="jhipster180901App.fieldTestEntity.byteAnyMaxbytesTom">Byte Any Maxbytes Tom</Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesTom ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesTomContentType, byteAnyMaxbytesTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesTomContentType}, {byteSize(byteAnyMaxbytesTom)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesTom')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesTom" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesTom')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesTom" value={byteAnyMaxbytesTom} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextTomLabel" for="byteTextTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.byteTextTom">Byte Text Tom</Translate>
                  </Label>
                  <AvInput id="field-test-entity-byteTextTom" type="textarea" name="byteTextTom" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredTomLabel" for="byteTextRequiredTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.byteTextRequiredTom">Byte Text Required Tom</Translate>
                  </Label>
                  <AvInput
                    id="field-test-entity-byteTextRequiredTom"
                    type="textarea"
                    name="byteTextRequiredTom"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesTomLabel" for="byteTextMinbytesTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.byteTextMinbytesTom">Byte Text Minbytes Tom</Translate>
                  </Label>
                  <AvInput id="field-test-entity-byteTextMinbytesTom" type="textarea" name="byteTextMinbytesTom" validate={{}} />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesTomLabel" for="byteTextMaxbytesTom">
                    <Translate contentKey="jhipster180901App.fieldTestEntity.byteTextMaxbytesTom">Byte Text Maxbytes Tom</Translate>
                  </Label>
                  <AvInput id="field-test-entity-byteTextMaxbytesTom" type="textarea" name="byteTextMaxbytesTom" validate={{}} />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-entity" replace color="info">
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
  fieldTestEntityEntity: storeState.fieldTestEntity.entity,
  loading: storeState.fieldTestEntity.loading,
  updating: storeState.fieldTestEntity.updating
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
)(FieldTestEntityUpdate);
