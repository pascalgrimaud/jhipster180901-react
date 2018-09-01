import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import {
  openFile,
  byteSize,
  Translate,
  ICrudGetAllAction,
  TextFormat,
  getSortState,
  IPaginationBaseState,
  getPaginationItemsNumber,
  JhiPagination
} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-pagination-entity.reducer';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IFieldTestPaginationEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IFieldTestPaginationEntityState = IPaginationBaseState;

export class FieldTestPaginationEntity extends React.Component<IFieldTestPaginationEntityProps, IFieldTestPaginationEntityState> {
  state: IFieldTestPaginationEntityState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.getEntities();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortEntities()
    );
  };

  sortEntities() {
    this.getEntities();
    this.props.history.push(`${this.props.location.pathname}?page=${this.state.activePage}&sort=${this.state.sort},${this.state.order}`);
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortEntities());

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { fieldTestPaginationEntityList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="field-test-pagination-entity-heading">
          <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.home.title">Field Test Pagination Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.home.createLabel">
              Create new Field Test Pagination Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={this.sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringAlice">String Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringRequiredAlice">String Required Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringMinlengthAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringMinlengthAlice">
                    String Minlength Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringMaxlengthAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringMaxlengthAlice">
                    String Maxlength Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringPatternAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.stringPatternAlice">String Pattern Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerRequiredAlice">
                    Integer Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerMinAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerMaxAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longAlice">Long Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longRequiredAlice">Long Required Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longMinAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longMaxAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatRequiredAlice">Float Required Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatMinAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatMaxAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('doubleRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.doubleRequiredAlice">Double Required Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('doubleMinAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('doubleMaxAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('bigDecimalRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                    Big Decimal Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('bigDecimalMinAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.bigDecimalMinAlice">Big Decimal Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('bigDecimalMaxAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.bigDecimalMaxAlice">Big Decimal Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('localDateAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('localDateRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.localDateRequiredAlice">
                    Local Date Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('instantAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('instanteRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.instanteRequiredAlice">
                    Instante Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('zonedDateTimeAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.zonedDateTimeAlice">Zoned Date Time Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('zonedDateTimeRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                    Zoned Date Time Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('booleanAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('booleanRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.booleanRequiredAlice">
                    Boolean Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('enumAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('enumRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.enumRequiredAlice">Enum Required Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageRequiredAlice">
                    Byte Image Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageMinbytesAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageMinbytesAlice">
                    Byte Image Minbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageMaxbytesAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                    Byte Image Maxbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyRequiredAlice">
                    Byte Any Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyMinbytesAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyMinbytesAlice">
                    Byte Any Minbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyMaxbytesAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteAnyMaxbytesAlice">
                    Byte Any Maxbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextRequiredAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextRequiredAlice">
                    Byte Text Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextMinbytesAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextMinbytesAlice">
                    Byte Text Minbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextMaxbytesAlice')}>
                  <Translate contentKey="jhipster180901App.fieldTestPaginationEntity.byteTextMaxbytesAlice">
                    Byte Text Maxbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestPaginationEntityList.map((fieldTestPaginationEntity, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestPaginationEntity.id}`} color="link" size="sm">
                      {fieldTestPaginationEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestPaginationEntity.stringAlice}</td>
                  <td>{fieldTestPaginationEntity.stringRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.stringMinlengthAlice}</td>
                  <td>{fieldTestPaginationEntity.stringMaxlengthAlice}</td>
                  <td>{fieldTestPaginationEntity.stringPatternAlice}</td>
                  <td>{fieldTestPaginationEntity.integerAlice}</td>
                  <td>{fieldTestPaginationEntity.integerRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.integerMinAlice}</td>
                  <td>{fieldTestPaginationEntity.integerMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.longAlice}</td>
                  <td>{fieldTestPaginationEntity.longRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.longMinAlice}</td>
                  <td>{fieldTestPaginationEntity.longMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.floatAlice}</td>
                  <td>{fieldTestPaginationEntity.floatRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.floatMinAlice}</td>
                  <td>{fieldTestPaginationEntity.floatMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.doubleRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.doubleMinAlice}</td>
                  <td>{fieldTestPaginationEntity.doubleMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.bigDecimalRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.bigDecimalMinAlice}</td>
                  <td>{fieldTestPaginationEntity.bigDecimalMaxAlice}</td>
                  <td>
                    <TextFormat type="date" value={fieldTestPaginationEntity.localDateAlice} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPaginationEntity.localDateRequiredAlice} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPaginationEntity.instantAlice} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPaginationEntity.instanteRequiredAlice} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPaginationEntity.zonedDateTimeAlice} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPaginationEntity.zonedDateTimeRequiredAlice} format={APP_DATE_FORMAT} />
                  </td>
                  <td>{fieldTestPaginationEntity.booleanAlice ? 'true' : 'false'}</td>
                  <td>{fieldTestPaginationEntity.booleanRequiredAlice ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`jhipster180901App.EnumFieldClass.${fieldTestPaginationEntity.enumAlice}`} />
                  </td>
                  <td>
                    <Translate contentKey={`jhipster180901App.EnumRequiredFieldClass.${fieldTestPaginationEntity.enumRequiredAlice}`} />
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageAlice ? (
                      <div>
                        <a
                          onClick={openFile(fieldTestPaginationEntity.byteImageAliceContentType, fieldTestPaginationEntity.byteImageAlice)}
                        >
                          <img
                            src={`data:${fieldTestPaginationEntity.byteImageAliceContentType};base64,${
                              fieldTestPaginationEntity.byteImageAlice
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteImageAliceContentType}, {byteSize(fieldTestPaginationEntity.byteImageAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageRequiredAlice ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPaginationEntity.byteImageRequiredAliceContentType,
                            fieldTestPaginationEntity.byteImageRequiredAlice
                          )}
                        >
                          <img
                            src={`data:${fieldTestPaginationEntity.byteImageRequiredAliceContentType};base64,${
                              fieldTestPaginationEntity.byteImageRequiredAlice
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteImageRequiredAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteImageRequiredAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageMinbytesAlice ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPaginationEntity.byteImageMinbytesAliceContentType,
                            fieldTestPaginationEntity.byteImageMinbytesAlice
                          )}
                        >
                          <img
                            src={`data:${fieldTestPaginationEntity.byteImageMinbytesAliceContentType};base64,${
                              fieldTestPaginationEntity.byteImageMinbytesAlice
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteImageMinbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteImageMinbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageMaxbytesAlice ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPaginationEntity.byteImageMaxbytesAliceContentType,
                            fieldTestPaginationEntity.byteImageMaxbytesAlice
                          )}
                        >
                          <img
                            src={`data:${fieldTestPaginationEntity.byteImageMaxbytesAliceContentType};base64,${
                              fieldTestPaginationEntity.byteImageMaxbytesAlice
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteImageMaxbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteImageMaxbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyAlice ? (
                      <div>
                        <a onClick={openFile(fieldTestPaginationEntity.byteAnyAliceContentType, fieldTestPaginationEntity.byteAnyAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteAnyAliceContentType}, {byteSize(fieldTestPaginationEntity.byteAnyAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyRequiredAlice ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPaginationEntity.byteAnyRequiredAliceContentType,
                            fieldTestPaginationEntity.byteAnyRequiredAlice
                          )}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteAnyRequiredAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteAnyRequiredAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyMinbytesAlice ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPaginationEntity.byteAnyMinbytesAliceContentType,
                            fieldTestPaginationEntity.byteAnyMinbytesAlice
                          )}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteAnyMinbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteAnyMinbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyMaxbytesAlice ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType,
                            fieldTestPaginationEntity.byteAnyMaxbytesAlice
                          )}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteAnyMaxbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestPaginationEntity.byteTextAlice}</td>
                  <td>{fieldTestPaginationEntity.byteTextRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.byteTextMinbytesAlice}</td>
                  <td>{fieldTestPaginationEntity.byteTextMaxbytesAlice}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${fieldTestPaginationEntity.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${fieldTestPaginationEntity.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${fieldTestPaginationEntity.id}/delete`} color="danger" size="sm">
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
        <Row className="justify-content-center">
          <JhiPagination
            items={getPaginationItemsNumber(totalItems, this.state.itemsPerPage)}
            activePage={this.state.activePage}
            onSelect={this.handlePagination}
            maxButtons={5}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestPaginationEntity }: IRootState) => ({
  fieldTestPaginationEntityList: fieldTestPaginationEntity.entities,
  totalItems: fieldTestPaginationEntity.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPaginationEntity);
