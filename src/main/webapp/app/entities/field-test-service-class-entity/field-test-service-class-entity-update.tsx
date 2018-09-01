import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-service-class-entity.reducer';
import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestServiceClassEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestServiceClassEntityUpdateState {
  isNew: boolean;
}

export class FieldTestServiceClassEntityUpdate extends React.Component<
  IFieldTestServiceClassEntityUpdateProps,
  IFieldTestServiceClassEntityUpdateState
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
    values.instantBob = new Date(values.instantBob);
    values.instanteRequiredBob = new Date(values.instanteRequiredBob);
    values.zonedDateTimeBob = new Date(values.zonedDateTimeBob);
    values.zonedDateTimeRequiredBob = new Date(values.zonedDateTimeRequiredBob);

    if (errors.length === 0) {
      const { fieldTestServiceClassEntityEntity } = this.props;
      const entity = {
        ...fieldTestServiceClassEntityEntity,
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
    this.props.history.push('/entity/field-test-service-class-entity');
  };

  render() {
    const { fieldTestServiceClassEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageBob,
      byteImageBobContentType,
      byteImageRequiredBob,
      byteImageRequiredBobContentType,
      byteImageMinbytesBob,
      byteImageMinbytesBobContentType,
      byteImageMaxbytesBob,
      byteImageMaxbytesBobContentType,
      byteAnyBob,
      byteAnyBobContentType,
      byteAnyRequiredBob,
      byteAnyRequiredBobContentType,
      byteAnyMinbytesBob,
      byteAnyMinbytesBobContentType,
      byteAnyMaxbytesBob,
      byteAnyMaxbytesBobContentType,
      byteTextBob,
      byteTextRequiredBob,
      byteTextMinbytesBob,
      byteTextMaxbytesBob
    } = fieldTestServiceClassEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestServiceClassEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.home.createOrEditLabel">
                Create or edit a FieldTestServiceClassEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestServiceClassEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-service-class-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringBobLabel" for="stringBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.stringBob">String Bob</Translate>
                  </Label>
                  <AvField id="field-test-service-class-entity-stringBob" type="text" name="stringBob" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredBobLabel" for="stringRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.stringRequiredBob">String Required Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-stringRequiredBob"
                    type="text"
                    name="stringRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthBobLabel" for="stringMinlengthBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.stringMinlengthBob">
                      String Minlength Bob
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-stringMinlengthBob"
                    type="text"
                    name="stringMinlengthBob"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthBobLabel" for="stringMaxlengthBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.stringMaxlengthBob">
                      String Maxlength Bob
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-stringMaxlengthBob"
                    type="text"
                    name="stringMaxlengthBob"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternBobLabel" for="stringPatternBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.stringPatternBob">String Pattern Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-stringPatternBob"
                    type="text"
                    name="stringPatternBob"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerBobLabel" for="integerBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.integerBob">Integer Bob</Translate>
                  </Label>
                  <AvField id="field-test-service-class-entity-integerBob" type="number" className="form-control" name="integerBob" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredBobLabel" for="integerRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.integerRequiredBob">
                      Integer Required Bob
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-integerRequiredBob"
                    type="number"
                    className="form-control"
                    name="integerRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinBobLabel" for="integerMinBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.integerMinBob">Integer Min Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-integerMinBob"
                    type="number"
                    className="form-control"
                    name="integerMinBob"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxBobLabel" for="integerMaxBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.integerMaxBob">Integer Max Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-integerMaxBob"
                    type="number"
                    className="form-control"
                    name="integerMaxBob"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longBobLabel" for="longBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.longBob">Long Bob</Translate>
                  </Label>
                  <AvField id="field-test-service-class-entity-longBob" type="number" className="form-control" name="longBob" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredBobLabel" for="longRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.longRequiredBob">Long Required Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-longRequiredBob"
                    type="number"
                    className="form-control"
                    name="longRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinBobLabel" for="longMinBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.longMinBob">Long Min Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-longMinBob"
                    type="number"
                    className="form-control"
                    name="longMinBob"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxBobLabel" for="longMaxBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.longMaxBob">Long Max Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-longMaxBob"
                    type="number"
                    className="form-control"
                    name="longMaxBob"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatBobLabel" for="floatBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.floatBob">Float Bob</Translate>
                  </Label>
                  <AvField id="field-test-service-class-entity-floatBob" type="number" className="form-control" name="floatBob" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredBobLabel" for="floatRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.floatRequiredBob">Float Required Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-floatRequiredBob"
                    type="number"
                    className="form-control"
                    name="floatRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinBobLabel" for="floatMinBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.floatMinBob">Float Min Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-floatMinBob"
                    type="number"
                    className="form-control"
                    name="floatMinBob"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxBobLabel" for="floatMaxBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.floatMaxBob">Float Max Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-floatMaxBob"
                    type="number"
                    className="form-control"
                    name="floatMaxBob"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredBobLabel" for="doubleRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.doubleRequiredBob">Double Required Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-doubleRequiredBob"
                    type="number"
                    className="form-control"
                    name="doubleRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinBobLabel" for="doubleMinBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.doubleMinBob">Double Min Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-doubleMinBob"
                    type="number"
                    className="form-control"
                    name="doubleMinBob"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxBobLabel" for="doubleMaxBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.doubleMaxBob">Double Max Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-doubleMaxBob"
                    type="number"
                    className="form-control"
                    name="doubleMaxBob"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredBobLabel" for="bigDecimalRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.bigDecimalRequiredBob">
                      Big Decimal Required Bob
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-bigDecimalRequiredBob"
                    type="text"
                    name="bigDecimalRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinBobLabel" for="bigDecimalMinBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.bigDecimalMinBob">Big Decimal Min Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-bigDecimalMinBob"
                    type="text"
                    name="bigDecimalMinBob"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxBobLabel" for="bigDecimalMaxBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.bigDecimalMaxBob">Big Decimal Max Bob</Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-bigDecimalMaxBob"
                    type="text"
                    name="bigDecimalMaxBob"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateBobLabel" for="localDateBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.localDateBob">Local Date Bob</Translate>
                  </Label>
                  <AvField id="field-test-service-class-entity-localDateBob" type="date" className="form-control" name="localDateBob" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredBobLabel" for="localDateRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.localDateRequiredBob">
                      Local Date Required Bob
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-service-class-entity-localDateRequiredBob"
                    type="date"
                    className="form-control"
                    name="localDateRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantBobLabel" for="instantBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.instantBob">Instant Bob</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-instantBob"
                    type="datetime-local"
                    className="form-control"
                    name="instantBob"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceClassEntityEntity.instantBob)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredBobLabel" for="instanteRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.instanteRequiredBob">
                      Instante Required Bob
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-instanteRequiredBob"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredBob"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceClassEntityEntity.instanteRequiredBob)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeBobLabel" for="zonedDateTimeBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.zonedDateTimeBob">Zoned Date Time Bob</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-zonedDateTimeBob"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeBob"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceClassEntityEntity.zonedDateTimeBob)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredBobLabel" for="zonedDateTimeRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.zonedDateTimeRequiredBob">
                      Zoned Date Time Required Bob
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-zonedDateTimeRequiredBob"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredBob"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestServiceClassEntityEntity.zonedDateTimeRequiredBob)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanBobLabel" check>
                    <AvInput id="field-test-service-class-entity-booleanBob" type="checkbox" className="form-control" name="booleanBob" />
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.booleanBob">Boolean Bob</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredBobLabel" check>
                    <AvInput
                      id="field-test-service-class-entity-booleanRequiredBob"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredBob"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.booleanRequiredBob">
                      Boolean Required Bob
                    </Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumBobLabel">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.enumBob">Enum Bob</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-enumBob"
                    type="select"
                    className="form-control"
                    name="enumBob"
                    value={(!isNew && fieldTestServiceClassEntityEntity.enumBob) || 'ENUM_VALUE_1'}
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
                  <Label id="enumRequiredBobLabel">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.enumRequiredBob">Enum Required Bob</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-enumRequiredBob"
                    type="select"
                    className="form-control"
                    name="enumRequiredBob"
                    value={(!isNew && fieldTestServiceClassEntityEntity.enumRequiredBob) || 'ENUM_VALUE_1'}
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
                    <Label id="byteImageBobLabel" for="byteImageBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteImageBob">Byte Image Bob</Translate>
                    </Label>
                    <br />
                    {byteImageBob ? (
                      <div>
                        <a onClick={openFile(byteImageBobContentType, byteImageBob)}>
                          <img src={`data:${byteImageBobContentType};base64,${byteImageBob}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageBobContentType}, {byteSize(byteImageBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageBob" type="file" onChange={this.onBlobChange(true, 'byteImageBob')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageBob" value={byteImageBob} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredBobLabel" for="byteImageRequiredBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteImageRequiredBob">
                        Byte Image Required Bob
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredBob ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredBobContentType, byteImageRequiredBob)}>
                          <img
                            src={`data:${byteImageRequiredBobContentType};base64,${byteImageRequiredBob}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredBobContentType}, {byteSize(byteImageRequiredBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredBob"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredBob')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredBob"
                      value={byteImageRequiredBob}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesBobLabel" for="byteImageMinbytesBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteImageMinbytesBob">
                        Byte Image Minbytes Bob
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesBob ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesBobContentType, byteImageMinbytesBob)}>
                          <img
                            src={`data:${byteImageMinbytesBobContentType};base64,${byteImageMinbytesBob}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesBobContentType}, {byteSize(byteImageMinbytesBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesBob"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesBob')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesBob" value={byteImageMinbytesBob} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesBobLabel" for="byteImageMaxbytesBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteImageMaxbytesBob">
                        Byte Image Maxbytes Bob
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesBob ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesBobContentType, byteImageMaxbytesBob)}>
                          <img
                            src={`data:${byteImageMaxbytesBobContentType};base64,${byteImageMaxbytesBob}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesBobContentType}, {byteSize(byteImageMaxbytesBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesBob"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesBob')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesBob" value={byteImageMaxbytesBob} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyBobLabel" for="byteAnyBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteAnyBob">Byte Any Bob</Translate>
                    </Label>
                    <br />
                    {byteAnyBob ? (
                      <div>
                        <a onClick={openFile(byteAnyBobContentType, byteAnyBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyBobContentType}, {byteSize(byteAnyBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyBob" type="file" onChange={this.onBlobChange(false, 'byteAnyBob')} />
                    <AvInput type="hidden" name="byteAnyBob" value={byteAnyBob} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredBobLabel" for="byteAnyRequiredBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteAnyRequiredBob">
                        Byte Any Required Bob
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredBob ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredBobContentType, byteAnyRequiredBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredBobContentType}, {byteSize(byteAnyRequiredBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredBob" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredBob')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredBob"
                      value={byteAnyRequiredBob}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesBobLabel" for="byteAnyMinbytesBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteAnyMinbytesBob">
                        Byte Any Minbytes Bob
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesBob ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesBobContentType, byteAnyMinbytesBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesBobContentType}, {byteSize(byteAnyMinbytesBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesBob" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesBob')} />
                    <AvInput type="hidden" name="byteAnyMinbytesBob" value={byteAnyMinbytesBob} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesBobLabel" for="byteAnyMaxbytesBob">
                      <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteAnyMaxbytesBob">
                        Byte Any Maxbytes Bob
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesBob ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesBobContentType, byteAnyMaxbytesBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesBobContentType}, {byteSize(byteAnyMaxbytesBob)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesBob')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesBob" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesBob')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesBob" value={byteAnyMaxbytesBob} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextBobLabel" for="byteTextBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteTextBob">Byte Text Bob</Translate>
                  </Label>
                  <AvInput id="field-test-service-class-entity-byteTextBob" type="textarea" name="byteTextBob" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredBobLabel" for="byteTextRequiredBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteTextRequiredBob">
                      Byte Text Required Bob
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-byteTextRequiredBob"
                    type="textarea"
                    name="byteTextRequiredBob"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesBobLabel" for="byteTextMinbytesBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteTextMinbytesBob">
                      Byte Text Minbytes Bob
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-byteTextMinbytesBob"
                    type="textarea"
                    name="byteTextMinbytesBob"
                    validate={{}}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesBobLabel" for="byteTextMaxbytesBob">
                    <Translate contentKey="jhipster180901App.fieldTestServiceClassEntity.byteTextMaxbytesBob">
                      Byte Text Maxbytes Bob
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-entity-byteTextMaxbytesBob"
                    type="textarea"
                    name="byteTextMaxbytesBob"
                    validate={{}}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-service-class-entity" replace color="info">
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
  fieldTestServiceClassEntityEntity: storeState.fieldTestServiceClassEntity.entity,
  loading: storeState.fieldTestServiceClassEntity.loading,
  updating: storeState.fieldTestServiceClassEntity.updating
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
)(FieldTestServiceClassEntityUpdate);
