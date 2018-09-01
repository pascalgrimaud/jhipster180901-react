import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceImpl.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  claraInput: ElementFinder = element(by.css('input#entity-with-service-impl-clara'));

  getPageTitle() {
    return this.pageTitle;
  }

  setClaraInput(clara) {
    this.claraInput.sendKeys(clara);
  }

  getClaraInput() {
    return this.claraInput.getAttribute('value');
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
