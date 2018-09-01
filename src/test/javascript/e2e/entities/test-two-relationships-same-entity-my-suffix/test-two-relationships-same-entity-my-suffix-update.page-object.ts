import { element, by, ElementFinder } from 'protractor';

export default class TestTwoRelationshipsSameEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testTwoRelationshipsSameEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstRelationshipSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-firstRelationship'));
  secondRelationshipSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-secondRelationship'));
  userOneSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-userOne'));
  userTwoSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-userTwo'));
  firstUniqueRequiredRelationSelect: ElementFinder = element(
    by.css('select#test-two-relationships-same-entity-my-suffix-firstUniqueRequiredRelation')
  );
  secondUniqueRequiredRelationSelect: ElementFinder = element(
    by.css('select#test-two-relationships-same-entity-my-suffix-secondUniqueRequiredRelation')
  );

  getPageTitle() {
    return this.pageTitle;
  }

  firstRelationshipSelectLastOption() {
    this.firstRelationshipSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  firstRelationshipSelectOption(option) {
    this.firstRelationshipSelect.sendKeys(option);
  }

  getFirstRelationshipSelect() {
    return this.firstRelationshipSelect;
  }

  getFirstRelationshipSelectedOption() {
    return this.firstRelationshipSelect.element(by.css('option:checked')).getText();
  }

  secondRelationshipSelectLastOption() {
    this.secondRelationshipSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  secondRelationshipSelectOption(option) {
    this.secondRelationshipSelect.sendKeys(option);
  }

  getSecondRelationshipSelect() {
    return this.secondRelationshipSelect;
  }

  getSecondRelationshipSelectedOption() {
    return this.secondRelationshipSelect.element(by.css('option:checked')).getText();
  }

  userOneSelectLastOption() {
    this.userOneSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  userOneSelectOption(option) {
    this.userOneSelect.sendKeys(option);
  }

  getUserOneSelect() {
    return this.userOneSelect;
  }

  getUserOneSelectedOption() {
    return this.userOneSelect.element(by.css('option:checked')).getText();
  }

  userTwoSelectLastOption() {
    this.userTwoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  userTwoSelectOption(option) {
    this.userTwoSelect.sendKeys(option);
  }

  getUserTwoSelect() {
    return this.userTwoSelect;
  }

  getUserTwoSelectedOption() {
    return this.userTwoSelect.element(by.css('option:checked')).getText();
  }

  firstUniqueRequiredRelationSelectLastOption() {
    this.firstUniqueRequiredRelationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  firstUniqueRequiredRelationSelectOption(option) {
    this.firstUniqueRequiredRelationSelect.sendKeys(option);
  }

  getFirstUniqueRequiredRelationSelect() {
    return this.firstUniqueRequiredRelationSelect;
  }

  getFirstUniqueRequiredRelationSelectedOption() {
    return this.firstUniqueRequiredRelationSelect.element(by.css('option:checked')).getText();
  }

  secondUniqueRequiredRelationSelectLastOption() {
    this.secondUniqueRequiredRelationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  secondUniqueRequiredRelationSelectOption(option) {
    this.secondUniqueRequiredRelationSelect.sendKeys(option);
  }

  getSecondUniqueRequiredRelationSelect() {
    return this.secondUniqueRequiredRelationSelect;
  }

  getSecondUniqueRequiredRelationSelectedOption() {
    return this.secondUniqueRequiredRelationSelect.element(by.css('option:checked')).getText();
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
