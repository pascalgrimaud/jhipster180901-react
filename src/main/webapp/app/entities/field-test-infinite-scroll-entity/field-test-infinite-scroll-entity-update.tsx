import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-infinite-scroll-entity.reducer';
import { IFieldTestInfiniteScrollEntity } from 'app/shared/model/field-test-infinite-scroll-entity.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestInfiniteScrollEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IFieldTestInfiniteScrollEntityUpdateState {
  isNew: boolean;
}

export class FieldTestInfiniteScrollEntityUpdate extends React.Component<
  IFieldTestInfiniteScrollEntityUpdateProps,
  IFieldTestInfiniteScrollEntityUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (!this.state.isNew) {
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
    values.instantHugo = new Date(values.instantHugo);
    values.instanteRequiredHugo = new Date(values.instanteRequiredHugo);
    values.zonedDateTimeHugo = new Date(values.zonedDateTimeHugo);
    values.zonedDateTimeRequiredHugo = new Date(values.zonedDateTimeRequiredHugo);

    if (errors.length === 0) {
      const { fieldTestInfiniteScrollEntityEntity } = this.props;
      const entity = {
        ...fieldTestInfiniteScrollEntityEntity,
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
    this.props.history.push('/entity/field-test-infinite-scroll-entity');
  };

  render() {
    const { fieldTestInfiniteScrollEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageHugo,
      byteImageHugoContentType,
      byteImageRequiredHugo,
      byteImageRequiredHugoContentType,
      byteImageMinbytesHugo,
      byteImageMinbytesHugoContentType,
      byteImageMaxbytesHugo,
      byteImageMaxbytesHugoContentType,
      byteAnyHugo,
      byteAnyHugoContentType,
      byteAnyRequiredHugo,
      byteAnyRequiredHugoContentType,
      byteAnyMinbytesHugo,
      byteAnyMinbytesHugoContentType,
      byteAnyMaxbytesHugo,
      byteAnyMaxbytesHugoContentType,
      byteTextHugo,
      byteTextRequiredHugo,
      byteTextMinbytesHugo,
      byteTextMaxbytesHugo
    } = fieldTestInfiniteScrollEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.fieldTestInfiniteScrollEntity.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.home.createOrEditLabel">
                Create or edit a FieldTestInfiniteScrollEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestInfiniteScrollEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-infinite-scroll-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringHugoLabel" for="stringHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.stringHugo">String Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-stringHugo" type="text" name="stringHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredHugoLabel" for="stringRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.stringRequiredHugo">
                      String Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringRequiredHugo"
                    type="text"
                    name="stringRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthHugoLabel" for="stringMinlengthHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.stringMinlengthHugo">
                      String Minlength Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringMinlengthHugo"
                    type="text"
                    name="stringMinlengthHugo"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthHugoLabel" for="stringMaxlengthHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.stringMaxlengthHugo">
                      String Maxlength Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringMaxlengthHugo"
                    type="text"
                    name="stringMaxlengthHugo"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternHugoLabel" for="stringPatternHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.stringPatternHugo">
                      String Pattern Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringPatternHugo"
                    type="text"
                    name="stringPatternHugo"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerHugoLabel" for="integerHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.integerHugo">Integer Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-integerHugo" type="number" className="form-control" name="integerHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredHugoLabel" for="integerRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.integerRequiredHugo">
                      Integer Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-integerRequiredHugo"
                    type="number"
                    className="form-control"
                    name="integerRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinHugoLabel" for="integerMinHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.integerMinHugo">Integer Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-integerMinHugo"
                    type="number"
                    className="form-control"
                    name="integerMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxHugoLabel" for="integerMaxHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.integerMaxHugo">Integer Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-integerMaxHugo"
                    type="number"
                    className="form-control"
                    name="integerMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longHugoLabel" for="longHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.longHugo">Long Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-longHugo" type="number" className="form-control" name="longHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredHugoLabel" for="longRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.longRequiredHugo">Long Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-longRequiredHugo"
                    type="number"
                    className="form-control"
                    name="longRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinHugoLabel" for="longMinHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.longMinHugo">Long Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-longMinHugo"
                    type="number"
                    className="form-control"
                    name="longMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxHugoLabel" for="longMaxHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.longMaxHugo">Long Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-longMaxHugo"
                    type="number"
                    className="form-control"
                    name="longMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatHugoLabel" for="floatHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.floatHugo">Float Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-floatHugo" type="number" className="form-control" name="floatHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredHugoLabel" for="floatRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.floatRequiredHugo">
                      Float Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-floatRequiredHugo"
                    type="number"
                    className="form-control"
                    name="floatRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinHugoLabel" for="floatMinHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.floatMinHugo">Float Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-floatMinHugo"
                    type="number"
                    className="form-control"
                    name="floatMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxHugoLabel" for="floatMaxHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.floatMaxHugo">Float Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-floatMaxHugo"
                    type="number"
                    className="form-control"
                    name="floatMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredHugoLabel" for="doubleRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.doubleRequiredHugo">
                      Double Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-doubleRequiredHugo"
                    type="number"
                    className="form-control"
                    name="doubleRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinHugoLabel" for="doubleMinHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.doubleMinHugo">Double Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-doubleMinHugo"
                    type="number"
                    className="form-control"
                    name="doubleMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxHugoLabel" for="doubleMaxHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.doubleMaxHugo">Double Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-doubleMaxHugo"
                    type="number"
                    className="form-control"
                    name="doubleMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredHugoLabel" for="bigDecimalRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo">
                      Big Decimal Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-bigDecimalRequiredHugo"
                    type="text"
                    name="bigDecimalRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinHugoLabel" for="bigDecimalMinHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.bigDecimalMinHugo">
                      Big Decimal Min Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-bigDecimalMinHugo"
                    type="text"
                    name="bigDecimalMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxHugoLabel" for="bigDecimalMaxHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo">
                      Big Decimal Max Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-bigDecimalMaxHugo"
                    type="text"
                    name="bigDecimalMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateHugoLabel" for="localDateHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.localDateHugo">Local Date Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-localDateHugo" type="date" className="form-control" name="localDateHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredHugoLabel" for="localDateRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.localDateRequiredHugo">
                      Local Date Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-localDateRequiredHugo"
                    type="date"
                    className="form-control"
                    name="localDateRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantHugoLabel" for="instantHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.instantHugo">Instant Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-instantHugo"
                    type="datetime-local"
                    className="form-control"
                    name="instantHugo"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.instantHugo)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredHugoLabel" for="instanteRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.instanteRequiredHugo">
                      Instante Required Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-instanteRequiredHugo"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredHugo"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.instanteRequiredHugo)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeHugoLabel" for="zonedDateTimeHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.zonedDateTimeHugo">
                      Zoned Date Time Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-zonedDateTimeHugo"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeHugo"
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.zonedDateTimeHugo)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredHugoLabel" for="zonedDateTimeRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo">
                      Zoned Date Time Required Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredHugo"
                    value={
                      isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.zonedDateTimeRequiredHugo)
                    }
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanHugoLabel" check>
                    <AvInput
                      id="field-test-infinite-scroll-entity-booleanHugo"
                      type="checkbox"
                      className="form-control"
                      name="booleanHugo"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.booleanHugo">Boolean Hugo</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredHugoLabel" check>
                    <AvInput
                      id="field-test-infinite-scroll-entity-booleanRequiredHugo"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredHugo"
                    />
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.booleanRequiredHugo">
                      Boolean Required Hugo
                    </Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumHugoLabel">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.enumHugo">Enum Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-enumHugo"
                    type="select"
                    className="form-control"
                    name="enumHugo"
                    value={(!isNew && fieldTestInfiniteScrollEntityEntity.enumHugo) || 'ENUM_VALUE_1'}
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
                  <Label id="enumRequiredHugoLabel">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.enumRequiredHugo">Enum Required Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-enumRequiredHugo"
                    type="select"
                    className="form-control"
                    name="enumRequiredHugo"
                    value={(!isNew && fieldTestInfiniteScrollEntityEntity.enumRequiredHugo) || 'ENUM_VALUE_1'}
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
                    <Label id="byteImageHugoLabel" for="byteImageHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteImageHugo">Byte Image Hugo</Translate>
                    </Label>
                    <br />
                    {byteImageHugo ? (
                      <div>
                        <a onClick={openFile(byteImageHugoContentType, byteImageHugo)}>
                          <img src={`data:${byteImageHugoContentType};base64,${byteImageHugo}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageHugoContentType}, {byteSize(byteImageHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageHugo" type="file" onChange={this.onBlobChange(true, 'byteImageHugo')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageHugo" value={byteImageHugo} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredHugoLabel" for="byteImageRequiredHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteImageRequiredHugo">
                        Byte Image Required Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredHugo ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredHugoContentType, byteImageRequiredHugo)}>
                          <img
                            src={`data:${byteImageRequiredHugoContentType};base64,${byteImageRequiredHugo}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredHugoContentType}, {byteSize(byteImageRequiredHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredHugo"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredHugo')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredHugo"
                      value={byteImageRequiredHugo}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesHugoLabel" for="byteImageMinbytesHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo">
                        Byte Image Minbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesHugoContentType, byteImageMinbytesHugo)}>
                          <img
                            src={`data:${byteImageMinbytesHugoContentType};base64,${byteImageMinbytesHugo}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesHugoContentType}, {byteSize(byteImageMinbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesHugo"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesHugo')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesHugo" value={byteImageMinbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesHugoLabel" for="byteImageMaxbytesHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo">
                        Byte Image Maxbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesHugoContentType, byteImageMaxbytesHugo)}>
                          <img
                            src={`data:${byteImageMaxbytesHugoContentType};base64,${byteImageMaxbytesHugo}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesHugoContentType}, {byteSize(byteImageMaxbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesHugo"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesHugo')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesHugo" value={byteImageMaxbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyHugoLabel" for="byteAnyHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteAnyHugo">Byte Any Hugo</Translate>
                    </Label>
                    <br />
                    {byteAnyHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyHugoContentType, byteAnyHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyHugoContentType}, {byteSize(byteAnyHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyHugo')} />
                    <AvInput type="hidden" name="byteAnyHugo" value={byteAnyHugo} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredHugoLabel" for="byteAnyRequiredHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo">
                        Byte Any Required Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredHugoContentType, byteAnyRequiredHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredHugoContentType}, {byteSize(byteAnyRequiredHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredHugo')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredHugo"
                      value={byteAnyRequiredHugo}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesHugoLabel" for="byteAnyMinbytesHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo">
                        Byte Any Minbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesHugoContentType, byteAnyMinbytesHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesHugoContentType}, {byteSize(byteAnyMinbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesHugo')} />
                    <AvInput type="hidden" name="byteAnyMinbytesHugo" value={byteAnyMinbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesHugoLabel" for="byteAnyMaxbytesHugo">
                      <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo">
                        Byte Any Maxbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesHugoContentType, byteAnyMaxbytesHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesHugoContentType}, {byteSize(byteAnyMaxbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesHugo')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesHugo" value={byteAnyMaxbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextHugoLabel" for="byteTextHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteTextHugo">Byte Text Hugo</Translate>
                  </Label>
                  <AvInput id="field-test-infinite-scroll-entity-byteTextHugo" type="textarea" name="byteTextHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredHugoLabel" for="byteTextRequiredHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteTextRequiredHugo">
                      Byte Text Required Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-byteTextRequiredHugo"
                    type="textarea"
                    name="byteTextRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMinbytesHugoLabel" for="byteTextMinbytesHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteTextMinbytesHugo">
                      Byte Text Minbytes Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-byteTextMinbytesHugo"
                    type="textarea"
                    name="byteTextMinbytesHugo"
                    validate={{}}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextMaxbytesHugoLabel" for="byteTextMaxbytesHugo">
                    <Translate contentKey="jhipster180901App.fieldTestInfiniteScrollEntity.byteTextMaxbytesHugo">
                      Byte Text Maxbytes Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-byteTextMaxbytesHugo"
                    type="textarea"
                    name="byteTextMaxbytesHugo"
                    validate={{}}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/field-test-infinite-scroll-entity" replace color="info">
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
  fieldTestInfiniteScrollEntityEntity: storeState.fieldTestInfiniteScrollEntity.entity,
  loading: storeState.fieldTestInfiniteScrollEntity.loading,
  updating: storeState.fieldTestInfiniteScrollEntity.updating
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
)(FieldTestInfiniteScrollEntityUpdate);
