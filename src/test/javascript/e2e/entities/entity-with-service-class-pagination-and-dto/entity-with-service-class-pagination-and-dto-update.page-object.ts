import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassPaginationAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  lenaInput: ElementFinder = element(by.css('input#entity-with-service-class-pagination-and-dto-lena'));

  getPageTitle() {
    return this.pageTitle;
  }

  setLenaInput(lena) {
    this.lenaInput.sendKeys(lena);
  }

  getLenaInput() {
    return this.lenaInput.getAttribute('value');
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
