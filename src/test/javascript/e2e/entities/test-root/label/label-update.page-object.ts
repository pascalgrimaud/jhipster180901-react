import { element, by, ElementFinder } from 'protractor';

export default class LabelUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testRootLabel.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  labelNameInput: ElementFinder = element(by.css('input#label-labelName'));

  getPageTitle() {
    return this.pageTitle;
  }

  setLabelNameInput(labelName) {
    this.labelNameInput.sendKeys(labelName);
  }

  getLabelNameInput() {
    return this.labelNameInput.getAttribute('value');
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
