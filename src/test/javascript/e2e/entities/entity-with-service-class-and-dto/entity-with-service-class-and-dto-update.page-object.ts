import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceClassAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  lucasInput: ElementFinder = element(by.css('input#entity-with-service-class-and-dto-lucas'));

  getPageTitle() {
    return this.pageTitle;
  }

  setLucasInput(lucas) {
    this.lucasInput.sendKeys(lucas);
  }

  getLucasInput() {
    return this.lucasInput.getAttribute('value');
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
