import { element, by, ElementFinder } from 'protractor';

export default class EntityWithPaginationAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithPaginationAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  leaInput: ElementFinder = element(by.css('input#entity-with-pagination-and-dto-lea'));

  getPageTitle() {
    return this.pageTitle;
  }

  setLeaInput(lea) {
    this.leaInput.sendKeys(lea);
  }

  getLeaInput() {
    return this.leaInput.getAttribute('value');
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
