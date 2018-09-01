import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, setBlob, reset } from './bank-account-my-suffix.reducer';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IBankAccountMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IBankAccountMySuffixUpdateState {
  isNew: boolean;
  userId: number;
}

export class BankAccountMySuffixUpdate extends React.Component<IBankAccountMySuffixUpdateProps, IBankAccountMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getUsers();
  }

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  clearBlob = name => () => {
    this.props.setBlob(name, undefined, undefined);
  };

  saveEntity = (event, errors, values) => {
    values.lastOperationDate = new Date(values.lastOperationDate);

    if (errors.length === 0) {
      const { bankAccountEntity } = this.props;
      const entity = {
        ...bankAccountEntity,
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
    this.props.history.push('/entity/bank-account-my-suffix');
  };

  render() {
    const { bankAccountEntity, users, loading, updating } = this.props;
    const { isNew } = this.state;

    const { attachment, attachmentContentType, description } = bankAccountEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipster180901App.testRootBankAccount.home.createOrEditLabel">
              <Translate contentKey="jhipster180901App.testRootBankAccount.home.createOrEditLabel">Create or edit a BankAccount</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : bankAccountEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="bank-account-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="name">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.name">Name</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bankNumberLabel" for="bankNumber">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.bankNumber">Bank Number</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-bankNumber" type="number" className="form-control" name="bankNumber" />
                </AvGroup>
                <AvGroup>
                  <Label id="agencyNumberLabel" for="agencyNumber">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.agencyNumber">Agency Number</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-agencyNumber" type="number" className="form-control" name="agencyNumber" />
                </AvGroup>
                <AvGroup>
                  <Label id="lastOperationDurationLabel" for="lastOperationDuration">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.lastOperationDuration">Last Operation Duration</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-lastOperationDuration"
                    type="number"
                    className="form-control"
                    name="lastOperationDuration"
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="meanOperationDurationLabel" for="meanOperationDuration">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.meanOperationDuration">Mean Operation Duration</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-meanOperationDuration"
                    type="number"
                    className="form-control"
                    name="meanOperationDuration"
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="balanceLabel" for="balance">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.balance">Balance</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-balance"
                    type="text"
                    name="balance"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="openingDayLabel" for="openingDay">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.openingDay">Opening Day</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-openingDay" type="date" className="form-control" name="openingDay" />
                </AvGroup>
                <AvGroup>
                  <Label id="lastOperationDateLabel" for="lastOperationDate">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.lastOperationDate">Last Operation Date</Translate>
                  </Label>
                  <AvInput
                    id="bank-account-my-suffix-lastOperationDate"
                    type="datetime-local"
                    className="form-control"
                    name="lastOperationDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.bankAccountEntity.lastOperationDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="activeLabel" check>
                    <AvInput id="bank-account-my-suffix-active" type="checkbox" className="form-control" name="active" />
                    <Translate contentKey="jhipster180901App.testRootBankAccount.active">Active</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="accountTypeLabel">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.accountType">Account Type</Translate>
                  </Label>
                  <AvInput
                    id="bank-account-my-suffix-accountType"
                    type="select"
                    className="form-control"
                    name="accountType"
                    value={(!isNew && bankAccountEntity.accountType) || 'CHECKING'}
                  >
                    <option value="CHECKING">
                      <Translate contentKey="jhipster180901App.BankAccountType.CHECKING" />
                    </option>
                    <option value="SAVINGS">
                      <Translate contentKey="jhipster180901App.BankAccountType.SAVINGS" />
                    </option>
                    <option value="LOAN">
                      <Translate contentKey="jhipster180901App.BankAccountType.LOAN" />
                    </option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="attachmentLabel" for="attachment">
                      <Translate contentKey="jhipster180901App.testRootBankAccount.attachment">Attachment</Translate>
                    </Label>
                    <br />
                    {attachment ? (
                      <div>
                        <a onClick={openFile(attachmentContentType, attachment)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {attachmentContentType}, {byteSize(attachment)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('attachment')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_attachment" type="file" onChange={this.onBlobChange(false, 'attachment')} />
                    <AvInput type="hidden" name="attachment" value={attachment} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="descriptionLabel" for="description">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.description">Description</Translate>
                  </Label>
                  <AvInput id="bank-account-my-suffix-description" type="textarea" name="description" />
                </AvGroup>
                <AvGroup>
                  <Label for="user.login">
                    <Translate contentKey="jhipster180901App.testRootBankAccount.user">User</Translate>
                  </Label>
                  <AvInput id="bank-account-my-suffix-user" type="select" className="form-control" name="userId">
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/bank-account-my-suffix" replace color="info">
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
  users: storeState.userManagement.users,
  bankAccountEntity: storeState.bankAccount.entity,
  loading: storeState.bankAccount.loading,
  updating: storeState.bankAccount.updating
});

const mapDispatchToProps = {
  getUsers,
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
)(BankAccountMySuffixUpdate);
