import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './bank-account-my-suffix.reducer';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IBankAccountMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class BankAccountMySuffix extends React.Component<IBankAccountMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { bankAccountList, match } = this.props;
    return (
      <div>
        <h2 id="bank-account-my-suffix-heading">
          <Translate contentKey="jhipster180901App.testRootBankAccount.home.title">Bank Accounts</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipster180901App.testRootBankAccount.home.createLabel">Create new Bank Account</Translate>
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
                  <Translate contentKey="jhipster180901App.testRootBankAccount.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.bankNumber">Bank Number</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.agencyNumber">Agency Number</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.lastOperationDuration">Last Operation Duration</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.meanOperationDuration">Mean Operation Duration</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.balance">Balance</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.openingDay">Opening Day</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.lastOperationDate">Last Operation Date</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.active">Active</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.accountType">Account Type</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.attachment">Attachment</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipster180901App.testRootBankAccount.user">User</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {bankAccountList.map((bankAccount, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${bankAccount.id}`} color="link" size="sm">
                      {bankAccount.id}
                    </Button>
                  </td>
                  <td>{bankAccount.name}</td>
                  <td>{bankAccount.bankNumber}</td>
                  <td>{bankAccount.agencyNumber}</td>
                  <td>{bankAccount.lastOperationDuration}</td>
                  <td>{bankAccount.meanOperationDuration}</td>
                  <td>{bankAccount.balance}</td>
                  <td>
                    <TextFormat type="date" value={bankAccount.openingDay} format={APP_LOCAL_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={bankAccount.lastOperationDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>{bankAccount.active ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`jhipster180901App.BankAccountType.${bankAccount.accountType}`} />
                  </td>
                  <td>
                    {bankAccount.attachment ? (
                      <div>
                        <a onClick={openFile(bankAccount.attachmentContentType, bankAccount.attachment)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {bankAccount.attachmentContentType}, {byteSize(bankAccount.attachment)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{bankAccount.description}</td>
                  <td>{bankAccount.userLogin ? bankAccount.userLogin : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${bankAccount.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${bankAccount.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${bankAccount.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ bankAccount }: IRootState) => ({
  bankAccountList: bankAccount.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAccountMySuffix);
