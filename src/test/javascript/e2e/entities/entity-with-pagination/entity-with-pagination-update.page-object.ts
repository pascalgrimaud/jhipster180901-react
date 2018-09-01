import { element, by, ElementFinder } from 'protractor';

export default class EntityWithPaginationUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithPagination.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nathanInput: ElementFinder = element(by.css('input#entity-with-pagination-nathan'));

  getPageTitle() {
    return this.pageTitle;
  }

  setNathanInput(nathan) {
    this.nathanInput.sendKeys(nathan);
  }

  getNathanInput() {
    return this.nathanInput.getAttribute('value');
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
