import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-pager-entity.reducer';
import { IFieldTestPagerEntity } from 'app/shared/model/field-test-pager-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestPagerEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestPagerEntityUpdateState {
  isNew: boolean;
}

export class FieldTestPagerEntityUpdate extends React.Component<IFieldTestPagerEntityUpdateProps, IFieldTestPagerEntityUpdateState> {
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
    values.instantJade = new Date(values.instantJade);
    values.instanteRequiredJade = new Date(values.instanteRequiredJade);
    values.zonedDateTimeJade = new Date(values.zonedDateTimeJade);
    values.zonedDateTimeRequiredJade = new Date(values.zonedDateTimeRequiredJade);

    if (errors.length === 0) {
      const { fieldTestPagerEntityEntity } = this.props;
      const entity = {
        ...fieldTestPagerEntityEntity,
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
    this.props.history.push('/entity/field-test-pager-entity');
  };

  render() {
    const { fieldTestPagerEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageJade,
      byteImageJadeContentType,
      byteImageRequiredJade,
      byteImageRequiredJadeContentType,
      byteImageMinbytesJade,
      byteImageMinbytesJadeContentType,
      byteImageMaxbytesJade,
      byteImageMaxbytesJadeContentType,
      byteAnyJade,
      byteAnyJadeContentType,
      byteAnyRequiredJade,
      byteAnyRequiredJadeContentType,
      byteAnyMinbytesJade,
      byteAnyMinbytesJadeContentType,
      byteAnyMaxbytesJade,
      byteAnyMaxbytesJadeContentType,
      byteTextJade,
      byteTextRequiredJade,
      byteTextMinbytesJade,
      byteTextMaxbytesJade
    } = fieldTestPagerEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestPagerEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestPagerEntity.home.createOrEditLabel">
                Create or edit a FieldTestPagerEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestPagerEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-pager-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringJadeLabel" for="stringJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringJade">String Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-stringJade" type="text" name="stringJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredJadeLabel" for="stringRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringRequiredJade">String Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringRequiredJade"
                    type="text"
                    name="stringRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthJadeLabel" for="stringMinlengthJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringMinlengthJade">String Minlength Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringMinlengthJade"
                    type="text"
                    name="stringMinlengthJade"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthJadeLabel" for="stringMaxlengthJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringMaxlengthJade">String Maxlength Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringMaxlengthJade"
                    type="text"
                    name="stringMaxlengthJade"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternJadeLabel" for="stringPatternJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringPatternJade">String Pattern Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-stringPatternJade"
                    type="text"
                    name="stringPatternJade"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerJadeLabel" for="integerJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerJade">Integer Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-integerJade" type="number" className="form-control" name="integerJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredJadeLabel" for="integerRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerRequiredJade">Integer Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-integerRequiredJade"
                    type="number"
                    className="form-control"
                    name="integerRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinJadeLabel" for="integerMinJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerMinJade">Integer Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-integerMinJade"
                    type="number"
                    className="form-control"
                    name="integerMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxJadeLabel" for="integerMaxJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerMaxJade">Integer Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-integerMaxJade"
                    type="number"
                    className="form-control"
                    name="integerMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longJadeLabel" for="longJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longJade">Long Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-longJade" type="number" className="form-control" name="longJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredJadeLabel" for="longRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longRequiredJade">Long Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-longRequiredJade"
                    type="number"
                    className="form-control"
                    name="longRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinJadeLabel" for="longMinJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longMinJade">Long Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-longMinJade"
                    type="number"
                    className="form-control"
                    name="longMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxJadeLabel" for="longMaxJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longMaxJade">Long Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-longMaxJade"
                    type="number"
                    className="form-control"
                    name="longMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatJadeLabel" for="floatJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatJade">Float Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-floatJade" type="number" className="form-control" name="floatJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredJadeLabel" for="floatRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatRequiredJade">Float Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-floatRequiredJade"
                    type="number"
                    className="form-control"
                    name="floatRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinJadeLabel" for="floatMinJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatMinJade">Float Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-floatMinJade"
                    type="number"
                    className="form-control"
                    name="floatMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxJadeLabel" for="floatMaxJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatMaxJade">Float Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-floatMaxJade"
                    type="number"
                    className="form-control"
                    name="floatMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredJadeLabel" for="doubleRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleRequiredJade">Double Required Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-doubleRequiredJade"
                    type="number"
                    className="form-control"
                    name="doubleRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinJadeLabel" for="doubleMinJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleMinJade">Double Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-doubleMinJade"
                    type="number"
                    className="form-control"
                    name="doubleMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxJadeLabel" for="doubleMaxJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleMaxJade">Double Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-doubleMaxJade"
                    type="number"
                    className="form-control"
                    name="doubleMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredJadeLabel" for="bigDecimalRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalRequiredJade">
                      Big Decimal Required Jade
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-bigDecimalRequiredJade"
                    type="text"
                    name="bigDecimalRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinJadeLabel" for="bigDecimalMinJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalMinJade">Big Decimal Min Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-bigDecimalMinJade"
                    type="text"
                    name="bigDecimalMinJade"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxJadeLabel" for="bigDecimalMaxJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalMaxJade">Big Decimal Max Jade</Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-bigDecimalMaxJade"
                    type="text"
                    name="bigDecimalMaxJade"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateJadeLabel" for="localDateJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.localDateJade">Local Date Jade</Translate>
                  </Label>
                  <AvField id="field-test-pager-entity-localDateJade" type="date" className="form-control" name="localDateJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredJadeLabel" for="localDateRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.localDateRequiredJade">
                      Local Date Required Jade
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pager-entity-localDateRequiredJade"
                    type="date"
                    className="form-control"
                    name="localDateRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantJadeLabel" for="instantJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.instantJade">Instant Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-instantJade"
                    type="datetime-local"
                    className="form-control"
                    name="instantJade"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.instantJade)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredJadeLabel" for="instanteRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.instanteRequiredJade">Instante Required Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-instanteRequiredJade"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredJade"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.instanteRequiredJade)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeJadeLabel" for="zonedDateTimeJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.zonedDateTimeJade">Zoned Date Time Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-zonedDateTimeJade"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeJade"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.zonedDateTimeJade)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredJadeLabel" for="zonedDateTimeRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.zonedDateTimeRequiredJade">
                      Zoned Date Time Required Jade
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-zonedDateTimeRequiredJade"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredJade"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPagerEntityEntity.zonedDateTimeRequiredJade)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanJadeLabel" check>
                    <AvInput id="field-test-pager-entity-booleanJade" type="checkbox" className="form-control" name="booleanJade" />
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.booleanJade">Boolean Jade</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredJadeLabel" check>
                    <AvInput
                      id="field-test-pager-entity-booleanRequiredJade"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredJade"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.booleanRequiredJade">Boolean Required Jade</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumJadeLabel">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.enumJade">Enum Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-enumJade"
                    type="select"
                    className="form-control"
                    name="enumJade"
                    value={(!isNew && fieldTestPagerEntityEntity.enumJade) || 'ENUM_VALUE_1'}
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
                  <Label id="enumRequiredJadeLabel">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.enumRequiredJade">Enum Required Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-enumRequiredJade"
                    type="select"
                    className="form-control"
                    name="enumRequiredJade"
                    value={(!isNew && fieldTestPagerEntityEntity.enumRequiredJade) || 'ENUM_VALUE_1'}
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
                    <Label id="byteImageJadeLabel" for="byteImageJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageJade">Byte Image Jade</Translate>
                    </Label>
                    <br />
                    {byteImageJade ? (
                      <div>
                        <a onClick={openFile(byteImageJadeContentType, byteImageJade)}>
                          <img src={`data:${byteImageJadeContentType};base64,${byteImageJade}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageJadeContentType}, {byteSize(byteImageJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageJade" type="file" onChange={this.onBlobChange(true, 'byteImageJade')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageJade" value={byteImageJade} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredJadeLabel" for="byteImageRequiredJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageRequiredJade">
                        Byte Image Required Jade
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredJade ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredJadeContentType, byteImageRequiredJade)}>
                          <img
                            src={`data:${byteImageRequiredJadeContentType};base64,${byteImageRequiredJade}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredJadeContentType}, {byteSize(byteImageRequiredJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredJade"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredJade')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredJade"
                      value={byteImageRequiredJade}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesJadeLabel" for="byteImageMinbytesJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageMinbytesJade">
                        Byte Image Minbytes Jade
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesJade ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesJadeContentType, byteImageMinbytesJade)}>
                          <img
                            src={`data:${byteImageMinbytesJadeContentType};base64,${byteImageMinbytesJade}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesJadeContentType}, {byteSize(byteImageMinbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesJade"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesJade')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesJade" value={byteImageMinbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesJadeLabel" for="byteImageMaxbytesJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageMaxbytesJade">
                        Byte Image Maxbytes Jade
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesJade ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesJadeContentType, byteImageMaxbytesJade)}>
                          <img
                            src={`data:${byteImageMaxbytesJadeContentType};base64,${byteImageMaxbytesJade}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesJadeContentType}, {byteSize(byteImageMaxbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesJade"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesJade')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesJade" value={byteImageMaxbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyJadeLabel" for="byteAnyJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyJade">Byte Any Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyJade ? (
                      <div>
                        <a onClick={openFile(byteAnyJadeContentType, byteAnyJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyJadeContentType}, {byteSize(byteAnyJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyJade" type="file" onChange={this.onBlobChange(false, 'byteAnyJade')} />
                    <AvInput type="hidden" name="byteAnyJade" value={byteAnyJade} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredJadeLabel" for="byteAnyRequiredJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyRequiredJade">Byte Any Required Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredJade ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredJadeContentType, byteAnyRequiredJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredJadeContentType}, {byteSize(byteAnyRequiredJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredJade" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredJade')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredJade"
                      value={byteAnyRequiredJade}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesJadeLabel" for="byteAnyMinbytesJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyMinbytesJade">Byte Any Minbytes Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesJade ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesJadeContentType, byteAnyMinbytesJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesJadeContentType}, {byteSize(byteAnyMinbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesJade" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesJade')} />
                    <AvInput type="hidden" name="byteAnyMinbytesJade" value={byteAnyMinbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesJadeLabel" for="byteAnyMaxbytesJade">
                      <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyMaxbytesJade">Byte Any Maxbytes Jade</Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesJade ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesJadeContentType, byteAnyMaxbytesJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesJadeContentType}, {byteSize(byteAnyMaxbytesJade)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesJade')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesJade" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesJade')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesJade" value={byteAnyMaxbytesJade} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextJadeLabel" for="byteTextJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextJade">Byte Text Jade</Translate>
                  </Label>
                  <AvInput id="field-test-pager-entity-byteTextJade" type="textarea" name="byteTextJade" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredJadeLabel" for="byteTextRequiredJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextRequiredJade">Byte Text Required Jade</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pager-entity-byteTextRequiredJade"
                    type="textarea"
                    name="byteTextRequiredJade"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesJadeLabel" for="byteTextMinbytesJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextMinbytesJade">Byte Text Minbytes Jade</Translate>
                  </Label>
                  <AvInput id="field-test-pager-entity-byteTextMinbytesJade" type="textarea" name="byteTextMinbytesJade" validate={{}} />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesJadeLabel" for="byteTextMaxbytesJade">
                    <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextMaxbytesJade">Byte Text Maxbytes Jade</Translate>
                  </Label>
                  <AvInput id="field-test-pager-entity-byteTextMaxbytesJade" type="textarea" name="byteTextMaxbytesJade" validate={{}} />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-pager-entity" replace color="info">
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
  fieldTestPagerEntityEntity: storeState.fieldTestPagerEntity.entity,
  loading: storeState.fieldTestPagerEntity.loading,
  updating: storeState.fieldTestPagerEntity.updating
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
)(FieldTestPagerEntityUpdate);
