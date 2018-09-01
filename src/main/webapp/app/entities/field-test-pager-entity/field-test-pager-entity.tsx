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
import { getEntities } from './field-test-pager-entity.reducer';
import { IFieldTestPagerEntity } from 'app/shared/model/field-test-pager-entity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IFieldTestPagerEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IFieldTestPagerEntityState = IPaginationBaseState;

export class FieldTestPagerEntity extends React.Component<IFieldTestPagerEntityProps, IFieldTestPagerEntityState> {
  state: IFieldTestPagerEntityState = {
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
    const { fieldTestPagerEntityList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="field-test-pager-entity-heading">
          <Translate contentKey="jhipster180901App.fieldTestPagerEntity.home.title">Field Test Pager Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.fieldTestPagerEntity.home.createLabel">Create new Field Test Pager Entity</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={this.sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringJade">String Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringRequiredJade">String Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringMinlengthJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringMinlengthJade">String Minlength Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringMaxlengthJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringMaxlengthJade">String Maxlength Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('stringPatternJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.stringPatternJade">String Pattern Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerJade">Integer Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerRequiredJade">Integer Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerMinJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerMinJade">Integer Min Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('integerMaxJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.integerMaxJade">Integer Max Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longJade">Long Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longRequiredJade">Long Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longMinJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longMinJade">Long Min Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('longMaxJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.longMaxJade">Long Max Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatJade">Float Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatRequiredJade">Float Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatMinJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatMinJade">Float Min Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('floatMaxJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.floatMaxJade">Float Max Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('doubleRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleRequiredJade">Double Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('doubleMinJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleMinJade">Double Min Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('doubleMaxJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.doubleMaxJade">Double Max Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('bigDecimalRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalRequiredJade">
                    Big Decimal Required Jade
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('bigDecimalMinJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalMinJade">Big Decimal Min Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('bigDecimalMaxJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.bigDecimalMaxJade">Big Decimal Max Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('localDateJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.localDateJade">Local Date Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('localDateRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.localDateRequiredJade">Local Date Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('instantJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.instantJade">Instant Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('instanteRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.instanteRequiredJade">Instante Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('zonedDateTimeJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.zonedDateTimeJade">Zoned Date Time Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('zonedDateTimeRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.zonedDateTimeRequiredJade">
                    Zoned Date Time Required Jade
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('booleanJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.booleanJade">Boolean Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('booleanRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.booleanRequiredJade">Boolean Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('enumJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.enumJade">Enum Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('enumRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.enumRequiredJade">Enum Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageJade">Byte Image Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageRequiredJade">Byte Image Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageMinbytesJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageMinbytesJade">Byte Image Minbytes Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteImageMaxbytesJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteImageMaxbytesJade">Byte Image Maxbytes Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyJade">Byte Any Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyRequiredJade">Byte Any Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyMinbytesJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyMinbytesJade">Byte Any Minbytes Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteAnyMaxbytesJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteAnyMaxbytesJade">Byte Any Maxbytes Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextJade">Byte Text Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextRequiredJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextRequiredJade">Byte Text Required Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextMinbytesJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextMinbytesJade">Byte Text Minbytes Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('byteTextMaxbytesJade')}>
                  <Translate contentKey="jhipster180901App.fieldTestPagerEntity.byteTextMaxbytesJade">Byte Text Maxbytes Jade</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestPagerEntityList.map((fieldTestPagerEntity, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestPagerEntity.id}`} color="link" size="sm">
                      {fieldTestPagerEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestPagerEntity.stringJade}</td>
                  <td>{fieldTestPagerEntity.stringRequiredJade}</td>
                  <td>{fieldTestPagerEntity.stringMinlengthJade}</td>
                  <td>{fieldTestPagerEntity.stringMaxlengthJade}</td>
                  <td>{fieldTestPagerEntity.stringPatternJade}</td>
                  <td>{fieldTestPagerEntity.integerJade}</td>
                  <td>{fieldTestPagerEntity.integerRequiredJade}</td>
                  <td>{fieldTestPagerEntity.integerMinJade}</td>
                  <td>{fieldTestPagerEntity.integerMaxJade}</td>
                  <td>{fieldTestPagerEntity.longJade}</td>
                  <td>{fieldTestPagerEntity.longRequiredJade}</td>
                  <td>{fieldTestPagerEntity.longMinJade}</td>
                  <td>{fieldTestPagerEntity.longMaxJade}</td>
                  <td>{fieldTestPagerEntity.floatJade}</td>
                  <td>{fieldTestPagerEntity.floatRequiredJade}</td>
                  <td>{fieldTestPagerEntity.floatMinJade}</td>
                  <td>{fieldTestPagerEntity.floatMaxJade}</td>
                  <td>{fieldTestPagerEntity.doubleRequiredJade}</td>
                  <td>{fieldTestPagerEntity.doubleMinJade}</td>
                  <td>{fieldTestPagerEntity.doubleMaxJade}</td>
                  <td>{fieldTestPagerEntity.bigDecimalRequiredJade}</td>
                  <td>{fieldTestPagerEntity.bigDecimalMinJade}</td>
                  <td>{fieldTestPagerEntity.bigDecimalMaxJade}</td>
                  <td>
                    <TextFormat type="date" value={fieldTestPagerEntity.localDateJade} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPagerEntity.localDateRequiredJade} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPagerEntity.instantJade} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPagerEntity.instanteRequiredJade} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPagerEntity.zonedDateTimeJade} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={fieldTestPagerEntity.zonedDateTimeRequiredJade} format={APP_DATE_FORMAT} />
                  </td>
                  <td>{fieldTestPagerEntity.booleanJade ? 'true' : 'false'}</td>
                  <td>{fieldTestPagerEntity.booleanRequiredJade ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`jhipster180901App.EnumFieldClass.${fieldTestPagerEntity.enumJade}`} />
                  </td>
                  <td>
                    <Translate contentKey={`jhipster180901App.EnumRequiredFieldClass.${fieldTestPagerEntity.enumRequiredJade}`} />
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteImageJade ? (
                      <div>
                        <a onClick={openFile(fieldTestPagerEntity.byteImageJadeContentType, fieldTestPagerEntity.byteImageJade)}>
                          <img
                            src={`data:${fieldTestPagerEntity.byteImageJadeContentType};base64,${fieldTestPagerEntity.byteImageJade}`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteImageJadeContentType}, {byteSize(fieldTestPagerEntity.byteImageJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteImageRequiredJade ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPagerEntity.byteImageRequiredJadeContentType,
                            fieldTestPagerEntity.byteImageRequiredJade
                          )}
                        >
                          <img
                            src={`data:${fieldTestPagerEntity.byteImageRequiredJadeContentType};base64,${
                              fieldTestPagerEntity.byteImageRequiredJade
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteImageRequiredJadeContentType}, {byteSize(fieldTestPagerEntity.byteImageRequiredJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteImageMinbytesJade ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPagerEntity.byteImageMinbytesJadeContentType,
                            fieldTestPagerEntity.byteImageMinbytesJade
                          )}
                        >
                          <img
                            src={`data:${fieldTestPagerEntity.byteImageMinbytesJadeContentType};base64,${
                              fieldTestPagerEntity.byteImageMinbytesJade
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteImageMinbytesJadeContentType}, {byteSize(fieldTestPagerEntity.byteImageMinbytesJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteImageMaxbytesJade ? (
                      <div>
                        <a
                          onClick={openFile(
                            fieldTestPagerEntity.byteImageMaxbytesJadeContentType,
                            fieldTestPagerEntity.byteImageMaxbytesJade
                          )}
                        >
                          <img
                            src={`data:${fieldTestPagerEntity.byteImageMaxbytesJadeContentType};base64,${
                              fieldTestPagerEntity.byteImageMaxbytesJade
                            }`}
                            style={{ maxHeight: '30px' }}
                          />
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteImageMaxbytesJadeContentType}, {byteSize(fieldTestPagerEntity.byteImageMaxbytesJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteAnyJade ? (
                      <div>
                        <a onClick={openFile(fieldTestPagerEntity.byteAnyJadeContentType, fieldTestPagerEntity.byteAnyJade)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteAnyJadeContentType}, {byteSize(fieldTestPagerEntity.byteAnyJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteAnyRequiredJade ? (
                      <div>
                        <a
                          onClick={openFile(fieldTestPagerEntity.byteAnyRequiredJadeContentType, fieldTestPagerEntity.byteAnyRequiredJade)}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteAnyRequiredJadeContentType}, {byteSize(fieldTestPagerEntity.byteAnyRequiredJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteAnyMinbytesJade ? (
                      <div>
                        <a
                          onClick={openFile(fieldTestPagerEntity.byteAnyMinbytesJadeContentType, fieldTestPagerEntity.byteAnyMinbytesJade)}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteAnyMinbytesJadeContentType}, {byteSize(fieldTestPagerEntity.byteAnyMinbytesJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPagerEntity.byteAnyMaxbytesJade ? (
                      <div>
                        <a
                          onClick={openFile(fieldTestPagerEntity.byteAnyMaxbytesJadeContentType, fieldTestPagerEntity.byteAnyMaxbytesJade)}
                        >
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {fieldTestPagerEntity.byteAnyMaxbytesJadeContentType}, {byteSize(fieldTestPagerEntity.byteAnyMaxbytesJade)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestPagerEntity.byteTextJade}</td>
                  <td>{fieldTestPagerEntity.byteTextRequiredJade}</td>
                  <td>{fieldTestPagerEntity.byteTextMinbytesJade}</td>
                  <td>{fieldTestPagerEntity.byteTextMaxbytesJade}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${fieldTestPagerEntity.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${fieldTestPagerEntity.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${fieldTestPagerEntity.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ fieldTestPagerEntity }: IRootState) => ({
  fieldTestPagerEntityList: fieldTestPagerEntity.entities,
  totalItems: fieldTestPagerEntity.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPagerEntity);
