import { element, by, ElementFinder } from 'protractor';

export default class TestCustomTableNameUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testCustomTableName.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testEntitySelect: ElementFinder = element(by.css('select#test-custom-table-name-testEntity'));
  userOneToManySelect: ElementFinder = element(by.css('select#test-custom-table-name-userOneToMany'));
  userManyToManySelect: ElementFinder = element(by.css('select#test-custom-table-name-userManyToMany'));
  userOneToOneSelect: ElementFinder = element(by.css('select#test-custom-table-name-userOneToOne'));

  getPageTitle() {
    return this.pageTitle;
  }

  testEntitySelectLastOption() {
    this.testEntitySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testEntitySelectOption(option) {
    this.testEntitySelect.sendKeys(option);
  }

  getTestEntitySelect() {
    return this.testEntitySelect;
  }

  getTestEntitySelectedOption() {
    return this.testEntitySelect.element(by.css('option:checked')).getText();
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
