import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-mapstruct-entity.reducer';
import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestMapstructEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class FieldTestMapstructEntity extends React.Component<IFieldTestMapstructEntityProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { fieldTestMapstructEntityList, match } = this.props;
    return (
      <div>
        <h2 id="field-test-mapstruct-entity-heading">
          <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.home.title">Field Test Mapstruct Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.home.createLabel">
              Create new Field Test Mapstruct Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringEva">String Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringRequiredEva">String Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringMinlengthEva">String Minlength Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringMaxlengthEva">String Maxlength Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.stringPatternEva">String Pattern Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerEva">Integer Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerRequiredEva">Integer Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerMinEva">Integer Min Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.integerMaxEva">Integer Max Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longEva">Long Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longRequiredEva">Long Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longMinEva">Long Min Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.longMaxEva">Long Max Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatEva">Float Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatRequiredEva">Float Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatMinEva">Float Min Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.floatMaxEva">Float Max Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleRequiredEva">Double Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleMinEva">Double Min Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.doubleMaxEva">Double Max Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalRequiredEva">
                    Big Decimal Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalMinEva">Big Decimal Min Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.bigDecimalMaxEva">Big Decimal Max Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.localDateEva">Local Date Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.localDateRequiredEva">
                    Local Date Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.instantEva">Instant Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.instanteRequiredEva">Instante Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.zonedDateTimeEva">Zoned Date Time Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.zonedDateTimeRequiredEva">
                    Zoned Date Time Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.booleanEva">Boolean Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.booleanRequiredEva">Boolean Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.enumEva">Enum Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.enumRequiredEva">Enum Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageEva">Byte Image Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageRequiredEva">
                    Byte Image Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageMinbytesEva">
                    Byte Image Minbytes Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteImageMaxbytesEva">
                    Byte Image Maxbytes Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyEva">Byte Any Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyRequiredEva">Byte Any Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyMinbytesEva">Byte Any Minbytes Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteAnyMaxbytesEva">Byte Any Maxbytes Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextEva">Byte Text Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextRequiredEva">Byte Text Required Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextMinbytesEva">Byte Text Minbytes Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.fieldTestMapstructEntity.byteTextMaxbytesEva">Byte Text Maxbytes Eva</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestMapstructEntityList.map((fieldTestMapstructEntity, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}`} color="link" size="sm">
                      {fieldTestMapstructEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestMapstructEntity.stringEva}</td>
                  <td>{fieldTestMapstructEntity.stringRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.stringMinlengthEva}</td>
                  <td>{fieldTestMapstructEntity.stringMaxlengthEva}</td>
                  <td>{fieldTestMapstructEntity.stringPatternEva}</td>
                  <td>{fieldTestMapstructEntity.integerEva}</td>
                  <td>{fieldTestMapstructEntity.integerRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.integerMinEva}</td>
                  <td>{fieldTestMapstructEntity.integerMaxEva}</td>
                  <td>{fieldTestMapstructEntity.longEva}</td>
                  <td>{fieldTestMapstructEntity.longRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.longMinEva}</td>
                  <td>{fieldTestMapstructEntity.longMaxEva}</td>
                  <td>{fieldTestMapstructEntity.floatEva}</td>
                  <td>{fieldTestMapstructEntity.floatRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.floatMinEva}</td>
                  <td>{fieldTestMapstructEntity.floatMaxEva}</td>
                  <td>{fieldTestMapstructEntity.doubleRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.doubleMinEva}</td>
                  <td>{fieldTestMapstructEntity.doubleMaxEva}</td>
                  <td>{fieldTestMapstructEntity.bigDecimalRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.bigDecimalMinEva}</td>
                  <td>{fieldTestMapstructEntity.bigDecimalMaxEva}</td>
                  <td>
                    <TextFormat type="date" value={fieldTestMapstructEntity.localDateEva} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestMapstructEntity.localDateRequiredEva} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestMapstructEntity.instantEva} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestMapstructEntity.instanteRequiredEva} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestMapstructEntity.zonedDateTimeEva} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestMapstructEntity.zonedDateTimeRequiredEva} format={APP_DATE_FORMAT} />
                  </td>
                  <td>{fieldTestMapstructEntity.booleanEva ? 'true' : 'false'}</td>
                  <td>{fieldTestMapstructEntity.booleanRequiredEva ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`jhipster180901App.EnumFieldClass.${fieldTestMapstructEntity.enumEva}`} />
                  </td>
                  <td>
                    <Translate contentKey={`jhipster180901App.EnumRequiredFieldClass.${fieldTestMapstructEntity.enumRequiredEva}`} />
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteImageEva ? (
                      <div>
                        <a onClick={openFile(fieldTestMapstructEntity.byteImageEvaContentType, fieldTestMapstructEntity.byteImageEva)}>
                          <img
                            src={`data:${fieldTestMapstructEntity.byteImageEvaContentType};base64,${fieldTestMapstructEntity.byteImageEva}`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteImageEvaContentType}, {byteSize(fieldTestMapstructEntity.byteImageEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteImageRequiredEva ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestMapstructEntity.byteImageRequiredEvaContentType,
                            fieldTestMapstructEntity.byteImageRequiredEva
                          )}
                        >
                          <img
                            src={`data:${fieldTestMapstructEntity.byteImageRequiredEvaContentType};base64,${
                              fieldTestMapstructEntity.byteImageRequiredEva
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteImageRequiredEvaContentType},{' '}
                          {byteSize(fieldTestMapstructEntity.byteImageRequiredEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteImageMinbytesEva ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestMapstructEntity.byteImageMinbytesEvaContentType,
                            fieldTestMapstructEntity.byteImageMinbytesEva
                          )}
                        >
                          <img
                            src={`data:${fieldTestMapstructEntity.byteImageMinbytesEvaContentType};base64,${
                              fieldTestMapstructEntity.byteImageMinbytesEva
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteImageMinbytesEvaContentType},{' '}
                          {byteSize(fieldTestMapstructEntity.byteImageMinbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteImageMaxbytesEva ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestMapstructEntity.byteImageMaxbytesEvaContentType,
                            fieldTestMapstructEntity.byteImageMaxbytesEva
                          )}
                        >
                          <img
                            src={`data:${fieldTestMapstructEntity.byteImageMaxbytesEvaContentType};base64,${
                              fieldTestMapstructEntity.byteImageMaxbytesEva
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteImageMaxbytesEvaContentType},{' '}
                          {byteSize(fieldTestMapstructEntity.byteImageMaxbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteAnyEva ? (
                      <div>
                        <a onClick={openFile(fieldTestMapstructEntity.byteAnyEvaContentType, fieldTestMapstructEntity.byteAnyEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteAnyEvaContentType}, {byteSize(fieldTestMapstructEntity.byteAnyEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteAnyRequiredEva ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestMapstructEntity.byteAnyRequiredEvaContentType,
                            fieldTestMapstructEntity.byteAnyRequiredEva
                          )}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteAnyRequiredEvaContentType}, {byteSize(fieldTestMapstructEntity.byteAnyRequiredEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteAnyMinbytesEva ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestMapstructEntity.byteAnyMinbytesEvaContentType,
                            fieldTestMapstructEntity.byteAnyMinbytesEva
                          )}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteAnyMinbytesEvaContentType}, {byteSize(fieldTestMapstructEntity.byteAnyMinbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructEntity.byteAnyMaxbytesEva ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType,
                            fieldTestMapstructEntity.byteAnyMaxbytesEva
                          )}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType}, {byteSize(fieldTestMapstructEntity.byteAnyMaxbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestMapstructEntity.byteTextEva}</td>
                  <td>{fieldTestMapstructEntity.byteTextRequiredEva}</td>
                  <td>{fieldTestMapstructEntity.byteTextMinbytesEva}</td>
                  <td>{fieldTestMapstructEntity.byteTextMaxbytesEva}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestMapstructEntity }: IRootState) => ({
  fieldTestMapstructEntityList: fieldTestMapstructEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestMapstructEntity);
