import { element, by, ElementFinder } from 'protractor';

export default class TestOneToOneUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testOneToOne.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testEntitySelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testEntity'));
  testMapstructSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testMapstruct'));
  testServiceClassSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testServiceClass'));
  testServiceImplSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testServiceImpl'));
  testInfiniteScrollSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testInfiniteScroll'));
  testPagerSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testPager'));
  testPaginationSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testPagination'));
  testCustomTableNameSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testCustomTableName'));

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

  testServiceClassSelectLastOption() {
    this.testServiceClassSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testServiceClassSelectOption(option) {
    this.testServiceClassSelect.sendKeys(option);
  }

  getTestServiceClassSelect() {
    return this.testServiceClassSelect;
  }

  getTestServiceClassSelectedOption() {
    return this.testServiceClassSelect.element(by.css('option:checked')).getText();
  }

  testServiceImplSelectLastOption() {
    this.testServiceImplSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testServiceImplSelectOption(option) {
    this.testServiceImplSelect.sendKeys(option);
  }

  getTestServiceImplSelect() {
    return this.testServiceImplSelect;
  }

  getTestServiceImplSelectedOption() {
    return this.testServiceImplSelect.element(by.css('option:checked')).getText();
  }

  testInfiniteScrollSelectLastOption() {
    this.testInfiniteScrollSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testInfiniteScrollSelectOption(option) {
    this.testInfiniteScrollSelect.sendKeys(option);
  }

  getTestInfiniteScrollSelect() {
    return this.testInfiniteScrollSelect;
  }

  getTestInfiniteScrollSelectedOption() {
    return this.testInfiniteScrollSelect.element(by.css('option:checked')).getText();
  }

  testPagerSelectLastOption() {
    this.testPagerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testPagerSelectOption(option) {
    this.testPagerSelect.sendKeys(option);
  }

  getTestPagerSelect() {
    return this.testPagerSelect;
  }

  getTestPagerSelectedOption() {
    return this.testPagerSelect.element(by.css('option:checked')).getText();
  }

  testPaginationSelectLastOption() {
    this.testPaginationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testPaginationSelectOption(option) {
    this.testPaginationSelect.sendKeys(option);
  }

  getTestPaginationSelect() {
    return this.testPaginationSelect;
  }

  getTestPaginationSelectedOption() {
    return this.testPaginationSelect.element(by.css('option:checked')).getText();
  }

  testCustomTableNameSelectLastOption() {
    this.testCustomTableNameSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  testCustomTableNameSelectOption(option) {
    this.testCustomTableNameSelect.sendKeys(option);
  }

  getTestCustomTableNameSelect() {
    return this.testCustomTableNameSelect;
  }

  getTestCustomTableNameSelectedOption() {
    return this.testCustomTableNameSelect.element(by.css('option:checked')).getText();
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
