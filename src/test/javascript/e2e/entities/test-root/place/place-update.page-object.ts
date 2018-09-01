import { element, by, ElementFinder } from 'protractor';

export default class PlaceUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testRootPlace.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#place-name'));
  numberOfSeatsInput: ElementFinder = element(by.css('input#place-numberOfSeats'));
  shortNameInput: ElementFinder = element(by.css('input#place-shortName'));
  colorBackgroundInput: ElementFinder = element(by.css('input#place-colorBackground'));
  colorTextInput: ElementFinder = element(by.css('input#place-colorText'));
  descriptionInput: ElementFinder = element(by.css('textarea#place-description'));
  preferredDivisionSelect: ElementFinder = element(by.css('select#place-preferredDivision'));
  ownerSelect: ElementFinder = element(by.css('select#place-owner'));

  getPageTitle() {
    return this.pageTitle;
  }

  setNameInput(name) {
    this.nameInput.sendKeys(name);
  }

  getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  setNumberOfSeatsInput(numberOfSeats) {
    this.numberOfSeatsInput.sendKeys(numberOfSeats);
  }

  getNumberOfSeatsInput() {
    return this.numberOfSeatsInput.getAttribute('value');
  }

  setShortNameInput(shortName) {
    this.shortNameInput.sendKeys(shortName);
  }

  getShortNameInput() {
    return this.shortNameInput.getAttribute('value');
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

  setDescriptionInput(description) {
    this.descriptionInput.sendKeys(description);
  }

  getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  preferredDivisionSelectLastOption() {
    this.preferredDivisionSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  preferredDivisionSelectOption(option) {
    this.preferredDivisionSelect.sendKeys(option);
  }

  getPreferredDivisionSelect() {
    return this.preferredDivisionSelect;
  }

  getPreferredDivisionSelectedOption() {
    return this.preferredDivisionSelect.element(by.css('option:checked')).getText();
  }

  ownerSelectLastOption() {
    this.ownerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  ownerSelectOption(option) {
    this.ownerSelect.sendKeys(option);
  }

  getOwnerSelect() {
    return this.ownerSelect;
  }

  getOwnerSelectedOption() {
    return this.ownerSelect.element(by.css('option:checked')).getText();
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
