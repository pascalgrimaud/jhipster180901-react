import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFieldTestPagerEntity } from 'app/shared/model/field-test-pager-entity.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-pager-entity.reducer';

export interface IFieldTestPagerEntityDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class FieldTestPagerEntityDeleteDialog extends React.Component<IFieldTestPagerEntityDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.fieldTestPagerEntityEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { fieldTestPagerEntityEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="jhipster180901App.fieldTestPagerEntity.delete.question">
          <Translate
            contentKey="jhipster180901App.fieldTestPagerEntity.delete.question"
            interpolate={{ id: fieldTestPagerEntityEntity.id }}
          >
            Are you sure you want to delete this FieldTestPagerEntity?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />&nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="jhi-confirm-delete-fieldTestPagerEntity" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />&nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ fieldTestPagerEntity }: IRootState) => ({
  fieldTestPagerEntityEntity: fieldTestPagerEntity.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestPagerEntityDeleteDialog);
