import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassAndPaginationUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceClassAndPagination.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  enzoInput: ElementFinder = element(by.css('input#entity-with-service-class-and-pagination-enzo'));

  getPageTitle() {
    return this.pageTitle;
  }

  setEnzoInput(enzo) {
    this.enzoInput.sendKeys(enzo);
  }

  getEnzoInput() {
    return this.enzoInput.getAttribute('value');
  }

  save() {
    return this.saveButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
