import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-mapstruct-entity.reducer';
import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestMapstructEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestMapstructEntityUpdateState {
  isNew: boolean;
}

export class FieldTestMapstructEntityUpdate extends React.Component<
  IFieldTestMapstructEntityUpdateProps,
  IFieldTestMapstructEntityUpdateState
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
    values.instantEva = new Date(values.instantEva);
    values.instanteRequiredEva = new Date(values.instanteRequiredEva);
    values.zonedDateTimeEva = new Date(values.zonedDateTimeEva);
    values.zonedDateTimeRequiredEva = new Date(values.zonedDateTimeRequiredEva);

    if (errors.length === 0) {
      const { fieldTestMapstructEntityEntity } = this.props;
      const entity = {
        ...fieldTestMapstructEntityEntity,
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
    this.props.history.push('/entity/field-test-mapstruct-entity');
  };

  render() {
    const { fieldTestMapstructEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageEva,
      byteImageEvaContentType,
      byteImageRequiredEva,
      byteImageRequiredEvaContentType,
      byteImageMinbytesEva,
      byteImageMinbytesEvaContentType,
      byteImageMaxbytesEva,
      byteImageMaxbytesEvaContentType,
      byteAnyEva,
      byteAnyEvaContentType,
      byteAnyRequiredEva,
      byteAnyRequiredEvaContentType,
      byteAnyMinbytesEva,
      byteAnyMinbytesEvaContentType,
      byteAnyMaxbytesEva,
      byteAnyMaxbytesEvaContentType,
      byteTextEva,
      byteTextRequiredEva,
      byteTextMinbytesEva,
      byteTextMaxbytesEva
    } = fieldTestMapstructEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestMapstructEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.home.createOrEditLabel">
                Create or edit a FieldTestMapstructEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestMapstructEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-mapstruct-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringEvaLabel" for="stringEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringEva">String Eva</Translate>
                  </Label>
                  <AvField id="field-test-mapstruct-entity-stringEva" type="text" name="stringEva" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredEvaLabel" for="stringRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringRequiredEva">String Required Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-stringRequiredEva"
                    type="text"
                    name="stringRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthEvaLabel" for="stringMinlengthEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringMinlengthEva">String Minlength Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-stringMinlengthEva"
                    type="text"
                    name="stringMinlengthEva"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthEvaLabel" for="stringMaxlengthEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringMaxlengthEva">String Maxlength Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-stringMaxlengthEva"
                    type="text"
                    name="stringMaxlengthEva"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternEvaLabel" for="stringPatternEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringPatternEva">String Pattern Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-stringPatternEva"
                    type="text"
                    name="stringPatternEva"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerEvaLabel" for="integerEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerEva">Integer Eva</Translate>
                  </Label>
                  <AvField id="field-test-mapstruct-entity-integerEva" type="number" className="form-control" name="integerEva" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredEvaLabel" for="integerRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerRequiredEva">Integer Required Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-integerRequiredEva"
                    type="number"
                    className="form-control"
                    name="integerRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinEvaLabel" for="integerMinEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerMinEva">Integer Min Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-integerMinEva"
                    type="number"
                    className="form-control"
                    name="integerMinEva"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxEvaLabel" for="integerMaxEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerMaxEva">Integer Max Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-integerMaxEva"
                    type="number"
                    className="form-control"
                    name="integerMaxEva"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longEvaLabel" for="longEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longEva">Long Eva</Translate>
                  </Label>
                  <AvField id="field-test-mapstruct-entity-longEva" type="number" className="form-control" name="longEva" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredEvaLabel" for="longRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longRequiredEva">Long Required Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-longRequiredEva"
                    type="number"
                    className="form-control"
                    name="longRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinEvaLabel" for="longMinEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longMinEva">Long Min Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-longMinEva"
                    type="number"
                    className="form-control"
                    name="longMinEva"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxEvaLabel" for="longMaxEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longMaxEva">Long Max Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-longMaxEva"
                    type="number"
                    className="form-control"
                    name="longMaxEva"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatEvaLabel" for="floatEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatEva">Float Eva</Translate>
                  </Label>
                  <AvField id="field-test-mapstruct-entity-floatEva" type="number" className="form-control" name="floatEva" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredEvaLabel" for="floatRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatRequiredEva">Float Required Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-floatRequiredEva"
                    type="number"
                    className="form-control"
                    name="floatRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinEvaLabel" for="floatMinEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatMinEva">Float Min Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-floatMinEva"
                    type="number"
                    className="form-control"
                    name="floatMinEva"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxEvaLabel" for="floatMaxEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatMaxEva">Float Max Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-floatMaxEva"
                    type="number"
                    className="form-control"
                    name="floatMaxEva"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredEvaLabel" for="doubleRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleRequiredEva">Double Required Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-doubleRequiredEva"
                    type="number"
                    className="form-control"
                    name="doubleRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinEvaLabel" for="doubleMinEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleMinEva">Double Min Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-doubleMinEva"
                    type="number"
                    className="form-control"
                    name="doubleMinEva"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxEvaLabel" for="doubleMaxEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleMaxEva">Double Max Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-doubleMaxEva"
                    type="number"
                    className="form-control"
                    name="doubleMaxEva"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredEvaLabel" for="bigDecimalRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalRequiredEva">
                      Big Decimal Required Eva
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-bigDecimalRequiredEva"
                    type="text"
                    name="bigDecimalRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinEvaLabel" for="bigDecimalMinEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalMinEva">Big Decimal Min Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-bigDecimalMinEva"
                    type="text"
                    name="bigDecimalMinEva"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxEvaLabel" for="bigDecimalMaxEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalMaxEva">Big Decimal Max Eva</Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-bigDecimalMaxEva"
                    type="text"
                    name="bigDecimalMaxEva"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateEvaLabel" for="localDateEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.localDateEva">Local Date Eva</Translate>
                  </Label>
                  <AvField id="field-test-mapstruct-entity-localDateEva" type="date" className="form-control" name="localDateEva" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredEvaLabel" for="localDateRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.localDateRequiredEva">
                      Local Date Required Eva
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-mapstruct-entity-localDateRequiredEva"
                    type="date"
                    className="form-control"
                    name="localDateRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantEvaLabel" for="instantEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.instantEva">Instant Eva</Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-instantEva"
                    type="datetime-local"
                    className="form-control"
                    name="instantEva"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestMapstructEntityEntity.instantEva)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredEvaLabel" for="instanteRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.instanteRequiredEva">Instante Required Eva</Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-instanteRequiredEva"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredEva"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestMapstructEntityEntity.instanteRequiredEva)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeEvaLabel" for="zonedDateTimeEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.zonedDateTimeEva">Zoned Date Time Eva</Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-zonedDateTimeEva"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeEva"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestMapstructEntityEntity.zonedDateTimeEva)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredEvaLabel" for="zonedDateTimeRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.zonedDateTimeRequiredEva">
                      Zoned Date Time Required Eva
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-zonedDateTimeRequiredEva"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredEva"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestMapstructEntityEntity.zonedDateTimeRequiredEva)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanEvaLabel" check>
                    <AvInput id="field-test-mapstruct-entity-booleanEva" type="checkbox" className="form-control" name="booleanEva" />
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.booleanEva">Boolean Eva</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredEvaLabel" check>
                    <AvInput
                      id="field-test-mapstruct-entity-booleanRequiredEva"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredEva"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.booleanRequiredEva">Boolean Required Eva</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumEvaLabel">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.enumEva">Enum Eva</Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-enumEva"
                    type="select"
                    className="form-control"
                    name="enumEva"
                    value={(!isNew && fieldTestMapstructEntityEntity.enumEva) || 'ENUM_VALUE_1'}
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
                  <Label id="enumRequiredEvaLabel">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.enumRequiredEva">Enum Required Eva</Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-enumRequiredEva"
                    type="select"
                    className="form-control"
                    name="enumRequiredEva"
                    value={(!isNew && fieldTestMapstructEntityEntity.enumRequiredEva) || 'ENUM_VALUE_1'}
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
                    <Label id="byteImageEvaLabel" for="byteImageEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageEva">Byte Image Eva</Translate>
                    </Label>
                    <br />
                    {byteImageEva ? (
                      <div>
                        <a onClick={openFile(byteImageEvaContentType, byteImageEva)}>
                          <img src={`data:${byteImageEvaContentType};base64,${byteImageEva}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageEvaContentType}, {byteSize(byteImageEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageEva" type="file" onChange={this.onBlobChange(true, 'byteImageEva')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageEva" value={byteImageEva} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredEvaLabel" for="byteImageRequiredEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageRequiredEva">
                        Byte Image Required Eva
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredEva ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredEvaContentType, byteImageRequiredEva)}>
                          <img
                            src={`data:${byteImageRequiredEvaContentType};base64,${byteImageRequiredEva}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredEvaContentType}, {byteSize(byteImageRequiredEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredEva"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredEva')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredEva"
                      value={byteImageRequiredEva}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesEvaLabel" for="byteImageMinbytesEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageMinbytesEva">
                        Byte Image Minbytes Eva
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesEva ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesEvaContentType, byteImageMinbytesEva)}>
                          <img
                            src={`data:${byteImageMinbytesEvaContentType};base64,${byteImageMinbytesEva}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesEvaContentType}, {byteSize(byteImageMinbytesEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesEva"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesEva')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesEva" value={byteImageMinbytesEva} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesEvaLabel" for="byteImageMaxbytesEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageMaxbytesEva">
                        Byte Image Maxbytes Eva
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesEva ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesEvaContentType, byteImageMaxbytesEva)}>
                          <img
                            src={`data:${byteImageMaxbytesEvaContentType};base64,${byteImageMaxbytesEva}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesEvaContentType}, {byteSize(byteImageMaxbytesEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesEva"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesEva')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesEva" value={byteImageMaxbytesEva} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyEvaLabel" for="byteAnyEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyEva">Byte Any Eva</Translate>
                    </Label>
                    <br />
                    {byteAnyEva ? (
                      <div>
                        <a onClick={openFile(byteAnyEvaContentType, byteAnyEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyEvaContentType}, {byteSize(byteAnyEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyEva" type="file" onChange={this.onBlobChange(false, 'byteAnyEva')} />
                    <AvInput type="hidden" name="byteAnyEva" value={byteAnyEva} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredEvaLabel" for="byteAnyRequiredEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyRequiredEva">
                        Byte Any Required Eva
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredEva ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredEvaContentType, byteAnyRequiredEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredEvaContentType}, {byteSize(byteAnyRequiredEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredEva" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredEva')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredEva"
                      value={byteAnyRequiredEva}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesEvaLabel" for="byteAnyMinbytesEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyMinbytesEva">
                        Byte Any Minbytes Eva
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesEva ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesEvaContentType, byteAnyMinbytesEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesEvaContentType}, {byteSize(byteAnyMinbytesEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesEva" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesEva')} />
                    <AvInput type="hidden" name="byteAnyMinbytesEva" value={byteAnyMinbytesEva} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesEvaLabel" for="byteAnyMaxbytesEva">
                      <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyMaxbytesEva">
                        Byte Any Maxbytes Eva
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesEva ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesEvaContentType, byteAnyMaxbytesEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesEvaContentType}, {byteSize(byteAnyMaxbytesEva)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesEva')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesEva" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesEva')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesEva" value={byteAnyMaxbytesEva} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextEvaLabel" for="byteTextEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextEva">Byte Text Eva</Translate>
                  </Label>
                  <AvInput id="field-test-mapstruct-entity-byteTextEva" type="textarea" name="byteTextEva" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredEvaLabel" for="byteTextRequiredEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextRequiredEva">
                      Byte Text Required Eva
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-entity-byteTextRequiredEva"
                    type="textarea"
                    name="byteTextRequiredEva"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesEvaLabel" for="byteTextMinbytesEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextMinbytesEva">
                      Byte Text Minbytes Eva
                    </Translate>
                  </Label>
                  <AvInput id="field-test-mapstruct-entity-byteTextMinbytesEva" type="textarea" name="byteTextMinbytesEva" validate={{}} />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesEvaLabel" for="byteTextMaxbytesEva">
                    <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextMaxbytesEva">
                      Byte Text Maxbytes Eva
                    </Translate>
                  </Label>
                  <AvInput id="field-test-mapstruct-entity-byteTextMaxbytesEva" type="textarea" name="byteTextMaxbytesEva" validate={{}} />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-mapstruct-entity" replace color="info">
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
  fieldTestMapstructEntityEntity: storeState.fieldTestMapstructEntity.entity,
  loading: storeState.fieldTestMapstructEntity.loading,
  updating: storeState.fieldTestMapstructEntity.updating
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
)(FieldTestMapstructEntityUpdate);
