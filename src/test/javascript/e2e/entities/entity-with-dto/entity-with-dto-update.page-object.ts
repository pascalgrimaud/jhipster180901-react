import { element, by, ElementFinder } from 'protractor';

export default class EntityWithDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  emmaInput: ElementFinder = element(by.css('input#entity-with-dto-emma'));

  getPageTitle() {
    return this.pageTitle;
  }

  setEmmaInput(emma) {
    this.emmaInput.sendKeys(emma);
  }

  getEmmaInput() {
    return this.emmaInput.getAttribute('value');
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
