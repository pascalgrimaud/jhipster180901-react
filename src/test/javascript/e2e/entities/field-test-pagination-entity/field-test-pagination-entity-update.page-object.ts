import { element, by, ElementFinder } from 'protractor';

export default class FieldTestPaginationEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestPaginationEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringAlice'));
  stringRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringRequiredAlice'));
  stringMinlengthAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringMinlengthAlice'));
  stringMaxlengthAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringMaxlengthAlice'));
  stringPatternAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringPatternAlice'));
  integerAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerAlice'));
  integerRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerRequiredAlice'));
  integerMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerMinAlice'));
  integerMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerMaxAlice'));
  longAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longAlice'));
  longRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longRequiredAlice'));
  longMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longMinAlice'));
  longMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longMaxAlice'));
  floatAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatAlice'));
  floatRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatRequiredAlice'));
  floatMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatMinAlice'));
  floatMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatMaxAlice'));
  doubleRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleRequiredAlice'));
  doubleMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleMinAlice'));
  doubleMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleMaxAlice'));
  bigDecimalRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalRequiredAlice'));
  bigDecimalMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalMinAlice'));
  bigDecimalMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalMaxAlice'));
  localDateAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-localDateAlice'));
  localDateRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-localDateRequiredAlice'));
  instantAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-instantAlice'));
  instanteRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-instanteRequiredAlice'));
  zonedDateTimeAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-zonedDateTimeAlice'));
  zonedDateTimeRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-zonedDateTimeRequiredAlice'));
  booleanAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-booleanAlice'));
  booleanRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-booleanRequiredAlice'));
  enumAliceSelect: ElementFinder = element(by.css('select#field-test-pagination-entity-enumAlice'));
  enumRequiredAliceSelect: ElementFinder = element(by.css('select#field-test-pagination-entity-enumRequiredAlice'));
  byteImageAliceInput: ElementFinder = element(by.css('input#file_byteImageAlice'));
  byteImageRequiredAliceInput: ElementFinder = element(by.css('input#file_byteImageRequiredAlice'));
  byteImageMinbytesAliceInput: ElementFinder = element(by.css('input#file_byteImageMinbytesAlice'));
  byteImageMaxbytesAliceInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesAlice'));
  byteAnyAliceInput: ElementFinder = element(by.css('input#file_byteAnyAlice'));
  byteAnyRequiredAliceInput: ElementFinder = element(by.css('input#file_byteAnyRequiredAlice'));
  byteAnyMinbytesAliceInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesAlice'));
  byteAnyMaxbytesAliceInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesAlice'));
  byteTextAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextAlice'));
  byteTextRequiredAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextRequiredAlice'));
  byteTextMinbytesAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextMinbytesAlice'));
  byteTextMaxbytesAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextMaxbytesAlice'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringAliceInput(stringAlice) {
    this.stringAliceInput.sendKeys(stringAlice);
  }

  getStringAliceInput() {
    return this.stringAliceInput.getAttribute('value');
  }

  setStringRequiredAliceInput(stringRequiredAlice) {
    this.stringRequiredAliceInput.sendKeys(stringRequiredAlice);
  }

  getStringRequiredAliceInput() {
    return this.stringRequiredAliceInput.getAttribute('value');
  }

  setStringMinlengthAliceInput(stringMinlengthAlice) {
    this.stringMinlengthAliceInput.sendKeys(stringMinlengthAlice);
  }

  getStringMinlengthAliceInput() {
    return this.stringMinlengthAliceInput.getAttribute('value');
  }

  setStringMaxlengthAliceInput(stringMaxlengthAlice) {
    this.stringMaxlengthAliceInput.sendKeys(stringMaxlengthAlice);
  }

  getStringMaxlengthAliceInput() {
    return this.stringMaxlengthAliceInput.getAttribute('value');
  }

  setStringPatternAliceInput(stringPatternAlice) {
    this.stringPatternAliceInput.sendKeys(stringPatternAlice);
  }

  getStringPatternAliceInput() {
    return this.stringPatternAliceInput.getAttribute('value');
  }

  setIntegerAliceInput(integerAlice) {
    this.integerAliceInput.sendKeys(integerAlice);
  }

  getIntegerAliceInput() {
    return this.integerAliceInput.getAttribute('value');
  }

  setIntegerRequiredAliceInput(integerRequiredAlice) {
    this.integerRequiredAliceInput.sendKeys(integerRequiredAlice);
  }

  getIntegerRequiredAliceInput() {
    return this.integerRequiredAliceInput.getAttribute('value');
  }

  setIntegerMinAliceInput(integerMinAlice) {
    this.integerMinAliceInput.sendKeys(integerMinAlice);
  }

  getIntegerMinAliceInput() {
    return this.integerMinAliceInput.getAttribute('value');
  }

  setIntegerMaxAliceInput(integerMaxAlice) {
    this.integerMaxAliceInput.sendKeys(integerMaxAlice);
  }

  getIntegerMaxAliceInput() {
    return this.integerMaxAliceInput.getAttribute('value');
  }

  setLongAliceInput(longAlice) {
    this.longAliceInput.sendKeys(longAlice);
  }

  getLongAliceInput() {
    return this.longAliceInput.getAttribute('value');
  }

  setLongRequiredAliceInput(longRequiredAlice) {
    this.longRequiredAliceInput.sendKeys(longRequiredAlice);
  }

  getLongRequiredAliceInput() {
    return this.longRequiredAliceInput.getAttribute('value');
  }

  setLongMinAliceInput(longMinAlice) {
    this.longMinAliceInput.sendKeys(longMinAlice);
  }

  getLongMinAliceInput() {
    return this.longMinAliceInput.getAttribute('value');
  }

  setLongMaxAliceInput(longMaxAlice) {
    this.longMaxAliceInput.sendKeys(longMaxAlice);
  }

  getLongMaxAliceInput() {
    return this.longMaxAliceInput.getAttribute('value');
  }

  setFloatAliceInput(floatAlice) {
    this.floatAliceInput.sendKeys(floatAlice);
  }

  getFloatAliceInput() {
    return this.floatAliceInput.getAttribute('value');
  }

  setFloatRequiredAliceInput(floatRequiredAlice) {
    this.floatRequiredAliceInput.sendKeys(floatRequiredAlice);
  }

  getFloatRequiredAliceInput() {
    return this.floatRequiredAliceInput.getAttribute('value');
  }

  setFloatMinAliceInput(floatMinAlice) {
    this.floatMinAliceInput.sendKeys(floatMinAlice);
  }

  getFloatMinAliceInput() {
    return this.floatMinAliceInput.getAttribute('value');
  }

  setFloatMaxAliceInput(floatMaxAlice) {
    this.floatMaxAliceInput.sendKeys(floatMaxAlice);
  }

  getFloatMaxAliceInput() {
    return this.floatMaxAliceInput.getAttribute('value');
  }

  setDoubleRequiredAliceInput(doubleRequiredAlice) {
    this.doubleRequiredAliceInput.sendKeys(doubleRequiredAlice);
  }

  getDoubleRequiredAliceInput() {
    return this.doubleRequiredAliceInput.getAttribute('value');
  }

  setDoubleMinAliceInput(doubleMinAlice) {
    this.doubleMinAliceInput.sendKeys(doubleMinAlice);
  }

  getDoubleMinAliceInput() {
    return this.doubleMinAliceInput.getAttribute('value');
  }

  setDoubleMaxAliceInput(doubleMaxAlice) {
    this.doubleMaxAliceInput.sendKeys(doubleMaxAlice);
  }

  getDoubleMaxAliceInput() {
    return this.doubleMaxAliceInput.getAttribute('value');
  }

  setBigDecimalRequiredAliceInput(bigDecimalRequiredAlice) {
    this.bigDecimalRequiredAliceInput.sendKeys(bigDecimalRequiredAlice);
  }

  getBigDecimalRequiredAliceInput() {
    return this.bigDecimalRequiredAliceInput.getAttribute('value');
  }

  setBigDecimalMinAliceInput(bigDecimalMinAlice) {
    this.bigDecimalMinAliceInput.sendKeys(bigDecimalMinAlice);
  }

  getBigDecimalMinAliceInput() {
    return this.bigDecimalMinAliceInput.getAttribute('value');
  }

  setBigDecimalMaxAliceInput(bigDecimalMaxAlice) {
    this.bigDecimalMaxAliceInput.sendKeys(bigDecimalMaxAlice);
  }

  getBigDecimalMaxAliceInput() {
    return this.bigDecimalMaxAliceInput.getAttribute('value');
  }

  setLocalDateAliceInput(localDateAlice) {
    this.localDateAliceInput.sendKeys(localDateAlice);
  }

  getLocalDateAliceInput() {
    return this.localDateAliceInput.getAttribute('value');
  }

  setLocalDateRequiredAliceInput(localDateRequiredAlice) {
    this.localDateRequiredAliceInput.sendKeys(localDateRequiredAlice);
  }

  getLocalDateRequiredAliceInput() {
    return this.localDateRequiredAliceInput.getAttribute('value');
  }

  setInstantAliceInput(instantAlice) {
    this.instantAliceInput.sendKeys(instantAlice);
  }

  getInstantAliceInput() {
    return this.instantAliceInput.getAttribute('value');
  }

  setInstanteRequiredAliceInput(instanteRequiredAlice) {
    this.instanteRequiredAliceInput.sendKeys(instanteRequiredAlice);
  }

  getInstanteRequiredAliceInput() {
    return this.instanteRequiredAliceInput.getAttribute('value');
  }

  setZonedDateTimeAliceInput(zonedDateTimeAlice) {
    this.zonedDateTimeAliceInput.sendKeys(zonedDateTimeAlice);
  }

  getZonedDateTimeAliceInput() {
    return this.zonedDateTimeAliceInput.getAttribute('value');
  }

  setZonedDateTimeRequiredAliceInput(zonedDateTimeRequiredAlice) {
    this.zonedDateTimeRequiredAliceInput.sendKeys(zonedDateTimeRequiredAlice);
  }

  getZonedDateTimeRequiredAliceInput() {
    return this.zonedDateTimeRequiredAliceInput.getAttribute('value');
  }

  getBooleanAliceInput() {
    return this.booleanAliceInput;
  }
  getBooleanRequiredAliceInput() {
    return this.booleanRequiredAliceInput;
  }
  setEnumAliceSelect(enumAlice) {
    this.enumAliceSelect.sendKeys(enumAlice);
  }

  getEnumAliceSelect() {
    return this.enumAliceSelect.element(by.css('option:checked')).getText();
  }

  enumAliceSelectLastOption() {
    this.enumAliceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredAliceSelect(enumRequiredAlice) {
    this.enumRequiredAliceSelect.sendKeys(enumRequiredAlice);
  }

  getEnumRequiredAliceSelect() {
    return this.enumRequiredAliceSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredAliceSelectLastOption() {
    this.enumRequiredAliceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageAliceInput(byteImageAlice) {
    this.byteImageAliceInput.sendKeys(byteImageAlice);
  }

  getByteImageAliceInput() {
    return this.byteImageAliceInput.getAttribute('value');
  }

  setByteImageRequiredAliceInput(byteImageRequiredAlice) {
    this.byteImageRequiredAliceInput.sendKeys(byteImageRequiredAlice);
  }

  getByteImageRequiredAliceInput() {
    return this.byteImageRequiredAliceInput.getAttribute('value');
  }

  setByteImageMinbytesAliceInput(byteImageMinbytesAlice) {
    this.byteImageMinbytesAliceInput.sendKeys(byteImageMinbytesAlice);
  }

  getByteImageMinbytesAliceInput() {
    return this.byteImageMinbytesAliceInput.getAttribute('value');
  }

  setByteImageMaxbytesAliceInput(byteImageMaxbytesAlice) {
    this.byteImageMaxbytesAliceInput.sendKeys(byteImageMaxbytesAlice);
  }

  getByteImageMaxbytesAliceInput() {
    return this.byteImageMaxbytesAliceInput.getAttribute('value');
  }

  setByteAnyAliceInput(byteAnyAlice) {
    this.byteAnyAliceInput.sendKeys(byteAnyAlice);
  }

  getByteAnyAliceInput() {
    return this.byteAnyAliceInput.getAttribute('value');
  }

  setByteAnyRequiredAliceInput(byteAnyRequiredAlice) {
    this.byteAnyRequiredAliceInput.sendKeys(byteAnyRequiredAlice);
  }

  getByteAnyRequiredAliceInput() {
    return this.byteAnyRequiredAliceInput.getAttribute('value');
  }

  setByteAnyMinbytesAliceInput(byteAnyMinbytesAlice) {
    this.byteAnyMinbytesAliceInput.sendKeys(byteAnyMinbytesAlice);
  }

  getByteAnyMinbytesAliceInput() {
    return this.byteAnyMinbytesAliceInput.getAttribute('value');
  }

  setByteAnyMaxbytesAliceInput(byteAnyMaxbytesAlice) {
    this.byteAnyMaxbytesAliceInput.sendKeys(byteAnyMaxbytesAlice);
  }

  getByteAnyMaxbytesAliceInput() {
    return this.byteAnyMaxbytesAliceInput.getAttribute('value');
  }

  setByteTextAliceInput(byteTextAlice) {
    this.byteTextAliceInput.sendKeys(byteTextAlice);
  }

  getByteTextAliceInput() {
    return this.byteTextAliceInput.getAttribute('value');
  }

  setByteTextRequiredAliceInput(byteTextRequiredAlice) {
    this.byteTextRequiredAliceInput.sendKeys(byteTextRequiredAlice);
  }

  getByteTextRequiredAliceInput() {
    return this.byteTextRequiredAliceInput.getAttribute('value');
  }

  setByteTextMinbytesAliceInput(byteTextMinbytesAlice) {
    this.byteTextMinbytesAliceInput.sendKeys(byteTextMinbytesAlice);
  }

  getByteTextMinbytesAliceInput() {
    return this.byteTextMinbytesAliceInput.getAttribute('value');
  }

  setByteTextMaxbytesAliceInput(byteTextMaxbytesAlice) {
    this.byteTextMaxbytesAliceInput.sendKeys(byteTextMaxbytesAlice);
  }

  getByteTextMaxbytesAliceInput() {
    return this.byteTextMaxbytesAliceInput.getAttribute('value');
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
