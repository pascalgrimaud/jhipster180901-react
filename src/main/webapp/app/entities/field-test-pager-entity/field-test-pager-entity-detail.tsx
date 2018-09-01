import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-pager-entity.reducer';
import { IFieldTestPagerEntity } from 'app/shared/model/field-test-pager-entity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestPagerEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class FieldTestPagerEntityDetail extends React.Component<IFieldTestPagerEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestPagerEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipster180901App.fieldTestPagerEntity.detail.title">FieldTestPagerEntity</Translate> [<b>
              {fieldTestPagerEntityEntity.id}
            </b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringJade">String Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.stringJade}</dd>
            <dt>
              <span id="stringRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringRequiredJade">String Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.stringRequiredJade}</dd>
            <dt>
              <span id="stringMinlengthJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringMinlengthJade">String Minlength Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.stringMinlengthJade}</dd>
            <dt>
              <span id="stringMaxlengthJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringMaxlengthJade">String Maxlength Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.stringMaxlengthJade}</dd>
            <dt>
              <span id="stringPatternJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringPatternJade">String Pattern Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.stringPatternJade}</dd>
            <dt>
              <span id="integerJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerJade">Integer Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.integerJade}</dd>
            <dt>
              <span id="integerRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerRequiredJade">Integer Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.integerRequiredJade}</dd>
            <dt>
              <span id="integerMinJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerMinJade">Integer Min Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.integerMinJade}</dd>
            <dt>
              <span id="integerMaxJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerMaxJade">Integer Max Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.integerMaxJade}</dd>
            <dt>
              <span id="longJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longJade">Long Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.longJade}</dd>
            <dt>
              <span id="longRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longRequiredJade">Long Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.longRequiredJade}</dd>
            <dt>
              <span id="longMinJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longMinJade">Long Min Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.longMinJade}</dd>
            <dt>
              <span id="longMaxJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longMaxJade">Long Max Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.longMaxJade}</dd>
            <dt>
              <span id="floatJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatJade">Float Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.floatJade}</dd>
            <dt>
              <span id="floatRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatRequiredJade">Float Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.floatRequiredJade}</dd>
            <dt>
              <span id="floatMinJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatMinJade">Float Min Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.floatMinJade}</dd>
            <dt>
              <span id="floatMaxJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatMaxJade">Float Max Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.floatMaxJade}</dd>
            <dt>
              <span id="doubleRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleRequiredJade">Double Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.doubleRequiredJade}</dd>
            <dt>
              <span id="doubleMinJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleMinJade">Double Min Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.doubleMinJade}</dd>
            <dt>
              <span id="doubleMaxJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleMaxJade">Double Max Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.doubleMaxJade}</dd>
            <dt>
              <span id="bigDecimalRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalRequiredJade">Big Decimal Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.bigDecimalRequiredJade}</dd>
            <dt>
              <span id="bigDecimalMinJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalMinJade">Big Decimal Min Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.bigDecimalMinJade}</dd>
            <dt>
              <span id="bigDecimalMaxJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalMaxJade">Big Decimal Max Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.bigDecimalMaxJade}</dd>
            <dt>
              <span id="localDateJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.localDateJade">Local Date Jade</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPagerEntityEntity.localDateJade} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.localDateRequiredJade">Local Date Required Jade</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPagerEntityEntity.localDateRequiredJade} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.instantJade">Instant Jade</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPagerEntityEntity.instantJade} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.instanteRequiredJade">Instante Required Jade</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPagerEntityEntity.instanteRequiredJade} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.zonedDateTimeJade">Zoned Date Time Jade</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPagerEntityEntity.zonedDateTimeJade} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.zonedDateTimeRequiredJade">
                  Zoned Date Time Required Jade
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestPagerEntityEntity.zonedDateTimeRequiredJade} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="booleanJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.booleanJade">Boolean Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.booleanJade ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.booleanRequiredJade">Boolean Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.booleanRequiredJade ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.enumJade">Enum Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.enumJade}</dd>
            <dt>
              <span id="enumRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.enumRequiredJade">Enum Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.enumRequiredJade}</dd>
            <dt>
              <span id="byteImageJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageJade">Byte Image Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteImageJade ? (
                <div>
                  <a onClick={openFile(fieldTestPagerEntityEntity.byteImageJadeContentType, fieldTestPagerEntityEntity.byteImageJade)}>
                    <img
                      src={`data:${fieldTestPagerEntityEntity.byteImageJadeContentType};base64,${fieldTestPagerEntityEntity.byteImageJade}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteImageJadeContentType}, {byteSize(fieldTestPagerEntityEntity.byteImageJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageRequiredJade">Byte Image Required Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteImageRequiredJade ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPagerEntityEntity.byteImageRequiredJadeContentType,
                      fieldTestPagerEntityEntity.byteImageRequiredJade
                    )}
                  >
                    <img
                      src={`data:${fieldTestPagerEntityEntity.byteImageRequiredJadeContentType};base64,${
                        fieldTestPagerEntityEntity.byteImageRequiredJade
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteImageRequiredJadeContentType},{' '}
                    {byteSize(fieldTestPagerEntityEntity.byteImageRequiredJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageMinbytesJade">Byte Image Minbytes Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteImageMinbytesJade ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPagerEntityEntity.byteImageMinbytesJadeContentType,
                      fieldTestPagerEntityEntity.byteImageMinbytesJade
                    )}
                  >
                    <img
                      src={`data:${fieldTestPagerEntityEntity.byteImageMinbytesJadeContentType};base64,${
                        fieldTestPagerEntityEntity.byteImageMinbytesJade
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteImageMinbytesJadeContentType},{' '}
                    {byteSize(fieldTestPagerEntityEntity.byteImageMinbytesJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageMaxbytesJade">Byte Image Maxbytes Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteImageMaxbytesJade ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPagerEntityEntity.byteImageMaxbytesJadeContentType,
                      fieldTestPagerEntityEntity.byteImageMaxbytesJade
                    )}
                  >
                    <img
                      src={`data:${fieldTestPagerEntityEntity.byteImageMaxbytesJadeContentType};base64,${
                        fieldTestPagerEntityEntity.byteImageMaxbytesJade
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteImageMaxbytesJadeContentType},{' '}
                    {byteSize(fieldTestPagerEntityEntity.byteImageMaxbytesJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyJade">Byte Any Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteAnyJade ? (
                <div>
                  <a onClick={openFile(fieldTestPagerEntityEntity.byteAnyJadeContentType, fieldTestPagerEntityEntity.byteAnyJade)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteAnyJadeContentType}, {byteSize(fieldTestPagerEntityEntity.byteAnyJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyRequiredJade">Byte Any Required Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteAnyRequiredJade ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPagerEntityEntity.byteAnyRequiredJadeContentType,
                      fieldTestPagerEntityEntity.byteAnyRequiredJade
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteAnyRequiredJadeContentType}, {byteSize(fieldTestPagerEntityEntity.byteAnyRequiredJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyMinbytesJade">Byte Any Minbytes Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteAnyMinbytesJade ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPagerEntityEntity.byteAnyMinbytesJadeContentType,
                      fieldTestPagerEntityEntity.byteAnyMinbytesJade
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteAnyMinbytesJadeContentType}, {byteSize(fieldTestPagerEntityEntity.byteAnyMinbytesJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyMaxbytesJade">Byte Any Maxbytes Jade</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestPagerEntityEntity.byteAnyMaxbytesJade ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestPagerEntityEntity.byteAnyMaxbytesJadeContentType,
                      fieldTestPagerEntityEntity.byteAnyMaxbytesJade
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestPagerEntityEntity.byteAnyMaxbytesJadeContentType}, {byteSize(fieldTestPagerEntityEntity.byteAnyMaxbytesJade)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextJade">Byte Text Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.byteTextJade}</dd>
            <dt>
              <span id="byteTextRequiredJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextRequiredJade">Byte Text Required Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.byteTextRequiredJade}</dd>
            <dt>
              <span id="byteTextMinbytesJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextMinbytesJade">Byte Text Minbytes Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.byteTextMinbytesJade}</dd>
            <dt>
              <span id="byteTextMaxbytesJade">
                <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextMaxbytesJade">Byte Text Maxbytes Jade</Translate>
              </span>
            </dt>
            <dd>{fieldTestPagerEntityEntity.byteTextMaxbytesJade}</dd>
          </dl>
          <Button tag={Link} to="/entity/field-test-pager-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/field-test-pager-entity/${fieldTestPagerEntityEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ fieldTestPagerEntity }: IRootState) => ({
  fieldTestPagerEntityEntity: fieldTestPagerEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPagerEntityDetail);
