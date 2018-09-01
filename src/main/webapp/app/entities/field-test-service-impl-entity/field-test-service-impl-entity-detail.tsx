import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-service-impl-entity.reducer';
import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestServiceImplEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class FieldTestServiceImplEntityDetail extends React.Component<IFieldTestServiceImplEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestServiceImplEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.detail.title">FieldTestServiceImplEntity</Translate> [<b>
              {fieldTestServiceImplEntityEntity.id}
            </b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringMika">String Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.stringMika}</dd>
            <dt>
              <span id="stringRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringRequiredMika">String Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.stringRequiredMika}</dd>
            <dt>
              <span id="stringMinlengthMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringMinlengthMika">String Minlength Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.stringMinlengthMika}</dd>
            <dt>
              <span id="stringMaxlengthMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringMaxlengthMika">String Maxlength Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.stringMaxlengthMika}</dd>
            <dt>
              <span id="stringPatternMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.stringPatternMika">String Pattern Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.stringPatternMika}</dd>
            <dt>
              <span id="integerMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerMika">Integer Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.integerMika}</dd>
            <dt>
              <span id="integerRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerRequiredMika">Integer Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.integerRequiredMika}</dd>
            <dt>
              <span id="integerMinMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerMinMika">Integer Min Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.integerMinMika}</dd>
            <dt>
              <span id="integerMaxMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.integerMaxMika">Integer Max Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.integerMaxMika}</dd>
            <dt>
              <span id="longMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longMika">Long Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.longMika}</dd>
            <dt>
              <span id="longRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longRequiredMika">Long Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.longRequiredMika}</dd>
            <dt>
              <span id="longMinMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longMinMika">Long Min Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.longMinMika}</dd>
            <dt>
              <span id="longMaxMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.longMaxMika">Long Max Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.longMaxMika}</dd>
            <dt>
              <span id="floatMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatMika">Float Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.floatMika}</dd>
            <dt>
              <span id="floatRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatRequiredMika">Float Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.floatRequiredMika}</dd>
            <dt>
              <span id="floatMinMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatMinMika">Float Min Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.floatMinMika}</dd>
            <dt>
              <span id="floatMaxMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.floatMaxMika">Float Max Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.floatMaxMika}</dd>
            <dt>
              <span id="doubleRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.doubleRequiredMika">Double Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.doubleRequiredMika}</dd>
            <dt>
              <span id="doubleMinMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.doubleMinMika">Double Min Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.doubleMinMika}</dd>
            <dt>
              <span id="doubleMaxMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.doubleMaxMika">Double Max Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.doubleMaxMika}</dd>
            <dt>
              <span id="bigDecimalRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.bigDecimalRequiredMika">
                  Big Decimal Required Mika
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.bigDecimalRequiredMika}</dd>
            <dt>
              <span id="bigDecimalMinMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.bigDecimalMinMika">Big Decimal Min Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.bigDecimalMinMika}</dd>
            <dt>
              <span id="bigDecimalMaxMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.bigDecimalMaxMika">Big Decimal Max Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.bigDecimalMaxMika}</dd>
            <dt>
              <span id="localDateMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.localDateMika">Local Date Mika</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceImplEntityEntity.localDateMika} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.localDateRequiredMika">
                  Local Date Required Mika
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceImplEntityEntity.localDateRequiredMika} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.instantMika">Instant Mika</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceImplEntityEntity.instantMika} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.instanteRequiredMika">Instante Required Mika</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceImplEntityEntity.instanteRequiredMika} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.zonedDateTimeMika">Zoned Date Time Mika</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceImplEntityEntity.zonedDateTimeMika} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.zonedDateTimeRequiredMika">
                  Zoned Date Time Required Mika
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceImplEntityEntity.zonedDateTimeRequiredMika} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="booleanMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.booleanMika">Boolean Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.booleanMika ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.booleanRequiredMika">Boolean Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.booleanRequiredMika ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.enumMika">Enum Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.enumMika}</dd>
            <dt>
              <span id="enumRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.enumRequiredMika">Enum Required Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.enumRequiredMika}</dd>
            <dt>
              <span id="byteImageMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageMika">Byte Image Mika</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteImageMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageMikaContentType};base64,${
                        fieldTestServiceImplEntityEntity.byteImageMika
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteImageMikaContentType}, {byteSize(fieldTestServiceImplEntityEntity.byteImageMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageRequiredMika">
                  Byte Image Required Mika
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteImageRequiredMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageRequiredMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType};base64,${
                        fieldTestServiceImplEntityEntity.byteImageRequiredMika
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType},{' '}
                    {byteSize(fieldTestServiceImplEntityEntity.byteImageRequiredMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageMinbytesMika">
                  Byte Image Minbytes Mika
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteImageMinbytesMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageMinbytesMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType};base64,${
                        fieldTestServiceImplEntityEntity.byteImageMinbytesMika
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType},{' '}
                    {byteSize(fieldTestServiceImplEntityEntity.byteImageMinbytesMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteImageMaxbytesMika">
                  Byte Image Maxbytes Mika
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteImageMaxbytesMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageMaxbytesMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType};base64,${
                        fieldTestServiceImplEntityEntity.byteImageMaxbytesMika
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType},{' '}
                    {byteSize(fieldTestServiceImplEntityEntity.byteImageMaxbytesMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyMika">Byte Any Mika</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteAnyMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteAnyMikaContentType}, {byteSize(fieldTestServiceImplEntityEntity.byteAnyMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyRequiredMika">Byte Any Required Mika</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteAnyRequiredMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyRequiredMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyRequiredMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteAnyRequiredMikaContentType},{' '}
                    {byteSize(fieldTestServiceImplEntityEntity.byteAnyRequiredMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyMinbytesMika">Byte Any Minbytes Mika</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteAnyMinbytesMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyMinbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyMinbytesMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteAnyMinbytesMikaContentType},{' '}
                    {byteSize(fieldTestServiceImplEntityEntity.byteAnyMinbytesMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteAnyMaxbytesMika">Byte Any Maxbytes Mika</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceImplEntityEntity.byteAnyMaxbytesMika ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyMaxbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyMaxbytesMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceImplEntityEntity.byteAnyMaxbytesMikaContentType},{' '}
                    {byteSize(fieldTestServiceImplEntityEntity.byteAnyMaxbytesMika)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextMika">Byte Text Mika</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.byteTextMika}</dd>
            <dt>
              <span id="byteTextRequiredMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextRequiredMika">
                  Byte Text Required Mika
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.byteTextRequiredMika}</dd>
            <dt>
              <span id="byteTextMinbytesMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextMinbytesMika">
                  Byte Text Minbytes Mika
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.byteTextMinbytesMika}</dd>
            <dt>
              <span id="byteTextMaxbytesMika">
                <Translate contentKey="jhipster180901App.fieldTestServiceImplEntity.byteTextMaxbytesMika">
                  Byte Text Maxbytes Mika
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceImplEntityEntity.byteTextMaxbytesMika}</dd>
          </dl>
          <Button tag={Link} to="/entity/field-test-service-impl-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button
            tag={Link}
            to={`/entity/field-test-service-impl-entity/${fieldTestServiceImplEntityEntity.id}/edit`}
            replace
            color="primary"
          >
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ fieldTestServiceImplEntity }: IRootState) => ({
  fieldTestServiceImplEntityEntity: fieldTestServiceImplEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestServiceImplEntityDetail);
