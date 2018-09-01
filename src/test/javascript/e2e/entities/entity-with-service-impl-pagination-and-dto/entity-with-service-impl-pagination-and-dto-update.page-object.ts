import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplPaginationAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  theoInput: ElementFinder = element(by.css('input#entity-with-service-impl-pagination-and-dto-theo'));

  getPageTitle() {
    return this.pageTitle;
  }

  setTheoInput(theo) {
    this.theoInput.sendKeys(theo);
  }

  getTheoInput() {
    return this.theoInput.getAttribute('value');
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
