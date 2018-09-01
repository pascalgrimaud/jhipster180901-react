import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceImplAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  louisInput: ElementFinder = element(by.css('input#entity-with-service-impl-and-dto-louis'));

  getPageTitle() {
    return this.pageTitle;
  }

  setLouisInput(louis) {
    this.louisInput.sendKeys(louis);
  }

  getLouisInput() {
    return this.louisInput.getAttribute('value');
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
