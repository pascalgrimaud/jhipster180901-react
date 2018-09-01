import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceClass.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  zoeInput: ElementFinder = element(by.css('input#entity-with-service-class-zoe'));

  getPageTitle() {
    return this.pageTitle;
  }

  setZoeInput(zoe) {
    this.zoeInput.sendKeys(zoe);
  }

  getZoeInput() {
    return this.zoeInput.getAttribute('value');
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
