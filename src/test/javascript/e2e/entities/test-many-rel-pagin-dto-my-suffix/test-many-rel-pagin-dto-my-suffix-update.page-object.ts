import { element, by, ElementFinder } from 'protractor';

export default class TestManyRelPaginDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testManyRelPaginDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testMapstructSelect: ElementFinder = element(by.css('select#test-many-rel-pagin-dto-my-suffix-testMapstruct'));

  getPageTitle() {
    return this.pageTitle;
  }

  testMapstructSelectLastOption() {
    this.testMapstructSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testMapstructSelectOption(option) {
    this.testMapstructSelect.sendKeys(option);
  }

  getTestMapstructSelect() {
    return this.testMapstructSelect;
  }

  getTestMapstructSelectedOption() {
    return this.testMapstructSelect.element(by.css('option:checked')).getText();
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
