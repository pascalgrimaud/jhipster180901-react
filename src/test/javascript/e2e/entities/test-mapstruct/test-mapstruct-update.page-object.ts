import { element, by, ElementFinder } from 'protractor';

export default class TestMapstructUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testMapstruct.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  userOneToManySelect: ElementFinder = element(by.css('select#test-mapstruct-userOneToMany'));
  userManyToManySelect: ElementFinder = element(by.css('select#test-mapstruct-userManyToMany'));
  userOneToOneSelect: ElementFinder = element(by.css('select#test-mapstruct-userOneToOne'));

  getPageTitle() {
    return this.pageTitle;
  }

  userOneToManySelectLastOption() {
    this.userOneToManySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  userOneToManySelectOption(option) {
    this.userOneToManySelect.sendKeys(option);
  }

  getUserOneToManySelect() {
    return this.userOneToManySelect;
  }

  getUserOneToManySelectedOption() {
    return this.userOneToManySelect.element(by.css('option:checked')).getText();
  }

  userManyToManySelectLastOption() {
    this.userManyToManySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  userManyToManySelectOption(option) {
    this.userManyToManySelect.sendKeys(option);
  }

  getUserManyToManySelect() {
    return this.userManyToManySelect;
  }

  getUserManyToManySelectedOption() {
    return this.userManyToManySelect.element(by.css('option:checked')).getText();
  }

  userOneToOneSelectLastOption() {
    this.userOneToOneSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  userOneToOneSelectOption(option) {
    this.userOneToOneSelect.sendKeys(option);
  }

  getUserOneToOneSelect() {
    return this.userOneToOneSelect;
  }

  getUserOneToOneSelectedOption() {
    return this.userOneToOneSelect.element(by.css('option:checked')).getText();
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
