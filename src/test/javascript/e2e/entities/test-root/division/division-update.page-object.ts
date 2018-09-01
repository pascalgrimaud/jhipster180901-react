import { element, by, ElementFinder } from 'protractor';

export default class DivisionUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testRootDivision.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#division-name'));
  shortNameInput: ElementFinder = element(by.css('input#division-shortName'));
  numberOfPeopleInput: ElementFinder = element(by.css('input#division-numberOfPeople'));
  divisionTypeSelect: ElementFinder = element(by.css('select#division-divisionType'));
  colorBackgroundInput: ElementFinder = element(by.css('input#division-colorBackground'));
  colorTextInput: ElementFinder = element(by.css('input#division-colorText'));

  getPageTitle() {
    return this.pageTitle;
  }

  setNameInput(name) {
    this.nameInput.sendKeys(name);
  }

  getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  setShortNameInput(shortName) {
    this.shortNameInput.sendKeys(shortName);
  }

  getShortNameInput() {
    return this.shortNameInput.getAttribute('value');
  }

  setNumberOfPeopleInput(numberOfPeople) {
    this.numberOfPeopleInput.sendKeys(numberOfPeople);
  }

  getNumberOfPeopleInput() {
    return this.numberOfPeopleInput.getAttribute('value');
  }

  setDivisionTypeSelect(divisionType) {
    this.divisionTypeSelect.sendKeys(divisionType);
  }

  getDivisionTypeSelect() {
    return this.divisionTypeSelect.element(by.css('option:checked')).getText();
  }

  divisionTypeSelectLastOption() {
    this.divisionTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setColorBackgroundInput(colorBackground) {
    this.colorBackgroundInput.sendKeys(colorBackground);
  }

  getColorBackgroundInput() {
    return this.colorBackgroundInput.getAttribute('value');
  }

  setColorTextInput(colorText) {
    this.colorTextInput.sendKeys(colorText);
  }

  getColorTextInput() {
    return this.colorTextInput.getAttribute('value');
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
