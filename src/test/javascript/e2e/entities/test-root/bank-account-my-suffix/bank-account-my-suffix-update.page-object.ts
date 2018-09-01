import { element, by, ElementFinder } from 'protractor';

export default class BankAccountUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.testRootBankAccount.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#bank-account-my-suffix-name'));
  bankNumberInput: ElementFinder = element(by.css('input#bank-account-my-suffix-bankNumber'));
  agencyNumberInput: ElementFinder = element(by.css('input#bank-account-my-suffix-agencyNumber'));
  lastOperationDurationInput: ElementFinder = element(by.css('input#bank-account-my-suffix-lastOperationDuration'));
  meanOperationDurationInput: ElementFinder = element(by.css('input#bank-account-my-suffix-meanOperationDuration'));
  balanceInput: ElementFinder = element(by.css('input#bank-account-my-suffix-balance'));
  openingDayInput: ElementFinder = element(by.css('input#bank-account-my-suffix-openingDay'));
  lastOperationDateInput: ElementFinder = element(by.css('input#bank-account-my-suffix-lastOperationDate'));
  activeInput: ElementFinder = element(by.css('input#bank-account-my-suffix-active'));
  accountTypeSelect: ElementFinder = element(by.css('select#bank-account-my-suffix-accountType'));
  attachmentInput: ElementFinder = element(by.css('input#file_attachment'));
  descriptionInput: ElementFinder = element(by.css('textarea#bank-account-my-suffix-description'));
  userSelect: ElementFinder = element(by.css('select#bank-account-my-suffix-user'));

  getPageTitle() {
    return this.pageTitle;
  }

  setNameInput(name) {
    this.nameInput.sendKeys(name);
  }

  getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  setBankNumberInput(bankNumber) {
    this.bankNumberInput.sendKeys(bankNumber);
  }

  getBankNumberInput() {
    return this.bankNumberInput.getAttribute('value');
  }

  setAgencyNumberInput(agencyNumber) {
    this.agencyNumberInput.sendKeys(agencyNumber);
  }

  getAgencyNumberInput() {
    return this.agencyNumberInput.getAttribute('value');
  }

  setLastOperationDurationInput(lastOperationDuration) {
    this.lastOperationDurationInput.sendKeys(lastOperationDuration);
  }

  getLastOperationDurationInput() {
    return this.lastOperationDurationInput.getAttribute('value');
  }

  setMeanOperationDurationInput(meanOperationDuration) {
    this.meanOperationDurationInput.sendKeys(meanOperationDuration);
  }

  getMeanOperationDurationInput() {
    return this.meanOperationDurationInput.getAttribute('value');
  }

  setBalanceInput(balance) {
    this.balanceInput.sendKeys(balance);
  }

  getBalanceInput() {
    return this.balanceInput.getAttribute('value');
  }

  setOpeningDayInput(openingDay) {
    this.openingDayInput.sendKeys(openingDay);
  }

  getOpeningDayInput() {
    return this.openingDayInput.getAttribute('value');
  }

  setLastOperationDateInput(lastOperationDate) {
    this.lastOperationDateInput.sendKeys(lastOperationDate);
  }

  getLastOperationDateInput() {
    return this.lastOperationDateInput.getAttribute('value');
  }

  getActiveInput() {
    return this.activeInput;
  }
  setAccountTypeSelect(accountType) {
    this.accountTypeSelect.sendKeys(accountType);
  }

  getAccountTypeSelect() {
    return this.accountTypeSelect.element(by.css('option:checked')).getText();
  }

  accountTypeSelectLastOption() {
    this.accountTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setAttachmentInput(attachment) {
    this.attachmentInput.sendKeys(attachment);
  }

  getAttachmentInput() {
    return this.attachmentInput.getAttribute('value');
  }

  setDescriptionInput(description) {
    this.descriptionInput.sendKeys(description);
  }

  getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  userSelectLastOption() {
    this.userSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  userSelectOption(option) {
    this.userSelect.sendKeys(option);
  }

  getUserSelect() {
    return this.userSelect;
  }

  getUserSelectedOption() {
    return this.userSelect.element(by.css('option:checked')).getText();
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
