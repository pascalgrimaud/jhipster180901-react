import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-mapstruct-entity.reducer';
import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestMapstructEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class FieldTestMapstructEntityDetail extends React.Component<IFieldTestMapstructEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestMapstructEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.detail.title">FieldTestMapstructEntity</Translate> [<b>
              {fieldTestMapstructEntityEntity.id}
            </b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringEva">String Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringEva}</dd>
            <dt>
              <span id="stringRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringRequiredEva">String Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringRequiredEva}</dd>
            <dt>
              <span id="stringMinlengthEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringMinlengthEva">String Minlength Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringMinlengthEva}</dd>
            <dt>
              <span id="stringMaxlengthEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringMaxlengthEva">String Maxlength Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringMaxlengthEva}</dd>
            <dt>
              <span id="stringPatternEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringPatternEva">String Pattern Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.stringPatternEva}</dd>
            <dt>
              <span id="integerEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerEva">Integer Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerEva}</dd>
            <dt>
              <span id="integerRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerRequiredEva">Integer Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerRequiredEva}</dd>
            <dt>
              <span id="integerMinEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerMinEva">Integer Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerMinEva}</dd>
            <dt>
              <span id="integerMaxEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerMaxEva">Integer Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.integerMaxEva}</dd>
            <dt>
              <span id="longEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longEva">Long Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longEva}</dd>
            <dt>
              <span id="longRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longRequiredEva">Long Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longRequiredEva}</dd>
            <dt>
              <span id="longMinEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longMinEva">Long Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longMinEva}</dd>
            <dt>
              <span id="longMaxEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longMaxEva">Long Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.longMaxEva}</dd>
            <dt>
              <span id="floatEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatEva">Float Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatEva}</dd>
            <dt>
              <span id="floatRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatRequiredEva">Float Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatRequiredEva}</dd>
            <dt>
              <span id="floatMinEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatMinEva">Float Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatMinEva}</dd>
            <dt>
              <span id="floatMaxEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatMaxEva">Float Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.floatMaxEva}</dd>
            <dt>
              <span id="doubleRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleRequiredEva">Double Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.doubleRequiredEva}</dd>
            <dt>
              <span id="doubleMinEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleMinEva">Double Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.doubleMinEva}</dd>
            <dt>
              <span id="doubleMaxEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleMaxEva">Double Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.doubleMaxEva}</dd>
            <dt>
              <span id="bigDecimalRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalRequiredEva">
                  Big Decimal Required Eva
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.bigDecimalRequiredEva}</dd>
            <dt>
              <span id="bigDecimalMinEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalMinEva">Big Decimal Min Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.bigDecimalMinEva}</dd>
            <dt>
              <span id="bigDecimalMaxEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalMaxEva">Big Decimal Max Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.bigDecimalMaxEva}</dd>
            <dt>
              <span id="localDateEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.localDateEva">Local Date Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.localDateEva} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.localDateRequiredEva">Local Date Required Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.localDateRequiredEva} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.instantEva">Instant Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.instantEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.instanteRequiredEva">Instante Required Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.instanteRequiredEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.zonedDateTimeEva">Zoned Date Time Eva</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.zonedDateTimeEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.zonedDateTimeRequiredEva">
                  Zoned Date Time Required Eva
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestMapstructEntityEntity.zonedDateTimeRequiredEva} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="booleanEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.booleanEva">Boolean Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.booleanEva ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.booleanRequiredEva">Boolean Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.booleanRequiredEva ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.enumEva">Enum Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.enumEva}</dd>
            <dt>
              <span id="enumRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.enumRequiredEva">Enum Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.enumRequiredEva}</dd>
            <dt>
              <span id="byteImageEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageEva">Byte Image Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageEva ? (
                <div>
                  <a
                    onClick={openFile(fieldTestMapstructEntityEntity.byteImageEvaContentType, fieldTestMapstructEntityEntity.byteImageEva)}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageEvaContentType}, {byteSize(fieldTestMapstructEntityEntity.byteImageEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageRequiredEva">Byte Image Required Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageRequiredEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteImageRequiredEvaContentType,
                      fieldTestMapstructEntityEntity.byteImageRequiredEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageRequiredEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageRequiredEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageRequiredEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteImageRequiredEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageMinbytesEva">Byte Image Minbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageMinbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteImageMinbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteImageMinbytesEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageMinbytesEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageMinbytesEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageMinbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteImageMinbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageMaxbytesEva">Byte Image Maxbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteImageMaxbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteImageMaxbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteImageMaxbytesEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructEntityEntity.byteImageMaxbytesEvaContentType};base64,${
                        fieldTestMapstructEntityEntity.byteImageMaxbytesEva
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteImageMaxbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteImageMaxbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyEva">Byte Any Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyEva ? (
                <div>
                  <a onClick={openFile(fieldTestMapstructEntityEntity.byteAnyEvaContentType, fieldTestMapstructEntityEntity.byteAnyEva)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyEvaContentType}, {byteSize(fieldTestMapstructEntityEntity.byteAnyEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyRequiredEva">Byte Any Required Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyRequiredEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteAnyRequiredEvaContentType,
                      fieldTestMapstructEntityEntity.byteAnyRequiredEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyRequiredEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteAnyRequiredEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyMinbytesEva">Byte Any Minbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyMinbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteAnyMinbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteAnyMinbytesEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyMinbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteAnyMinbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyMaxbytesEva">Byte Any Maxbytes Eva</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestMapstructEntityEntity.byteAnyMaxbytesEva ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestMapstructEntityEntity.byteAnyMaxbytesEvaContentType,
                      fieldTestMapstructEntityEntity.byteAnyMaxbytesEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestMapstructEntityEntity.byteAnyMaxbytesEvaContentType},{' '}
                    {byteSize(fieldTestMapstructEntityEntity.byteAnyMaxbytesEva)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextEva">Byte Text Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.byteTextEva}</dd>
            <dt>
              <span id="byteTextRequiredEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextRequiredEva">Byte Text Required Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.byteTextRequiredEva}</dd>
            <dt>
              <span id="byteTextMinbytesEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextMinbytesEva">Byte Text Minbytes Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.byteTextMinbytesEva}</dd>
            <dt>
              <span id="byteTextMaxbytesEva">
                <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextMaxbytesEva">Byte Text Maxbytes Eva</Translate>
              </span>
            </dt>
            <dd>{fieldTestMapstructEntityEntity.byteTextMaxbytesEva}</dd>
          </dl>
          <Button tag={Link} to="/entity/field-test-mapstruct-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/field-test-mapstruct-entity/${fieldTestMapstructEntityEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ fieldTestMapstructEntity }: IRootState) => ({
  fieldTestMapstructEntityEntity: fieldTestMapstructEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestMapstructEntityDetail);
