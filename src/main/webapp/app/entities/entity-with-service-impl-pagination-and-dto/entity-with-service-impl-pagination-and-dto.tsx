import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction, getSortState, IPaginationBaseState, getPaginationItemsNumber, JhiPagination } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './entity-with-service-impl-pagination-and-dto.reducer';
import { IEntityWithServiceImplPaginationAndDTO } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IEntityWithServiceImplPaginationAndDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IEntityWithServiceImplPaginationAndDTOState = IPaginationBaseState;

export class EntityWithServiceImplPaginationAndDTO extends React.Component<
  IEntityWithServiceImplPaginationAndDTOProps,
  IEntityWithServiceImplPaginationAndDTOState
> {
  state: IEntityWithServiceImplPaginationAndDTOState = {
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
    const { entityWithServiceImplPaginationAndDTOList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="entity-with-service-impl-pagination-and-dto-heading">
          <Translate contentKey="jhipster180901App.entityWithServiceImplPaginationAndDTO.home.title">
            Entity With Service Impl Pagination And DTOS
          </Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.entityWithServiceImplPaginationAndDTO.home.createLabel">
              Create new Entity With Service Impl Pagination And DTO
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
                <th className="hand" onClick={this.sort('theo')}>
                  <Translate contentKey="jhipster180901App.entityWithServiceImplPaginationAndDTO.theo">Theo</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {entityWithServiceImplPaginationAndDTOList.map((entityWithServiceImplPaginationAndDTO, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${entityWithServiceImplPaginationAndDTO.id}`} color="link" size="sm">
                      {entityWithServiceImplPaginationAndDTO.id}
                    </Button>
                  </td>
                  <td>{entityWithServiceImplPaginationAndDTO.theo}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${entityWithServiceImplPaginationAndDTO.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${entityWithServiceImplPaginationAndDTO.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${entityWithServiceImplPaginationAndDTO.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ entityWithServiceImplPaginationAndDTO }: IRootState) => ({
  entityWithServiceImplPaginationAndDTOList: entityWithServiceImplPaginationAndDTO.entities,
  totalItems: entityWithServiceImplPaginationAndDTO.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceImplPaginationAndDTO);
