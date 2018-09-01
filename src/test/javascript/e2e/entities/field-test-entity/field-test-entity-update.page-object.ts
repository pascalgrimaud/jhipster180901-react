import { element, by, ElementFinder } from 'protractor';

export default class FieldTestEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringTomInput: ElementFinder = element(by.css('input#field-test-entity-stringTom'));
  stringRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-stringRequiredTom'));
  stringMinlengthTomInput: ElementFinder = element(by.css('input#field-test-entity-stringMinlengthTom'));
  stringMaxlengthTomInput: ElementFinder = element(by.css('input#field-test-entity-stringMaxlengthTom'));
  stringPatternTomInput: ElementFinder = element(by.css('input#field-test-entity-stringPatternTom'));
  integerTomInput: ElementFinder = element(by.css('input#field-test-entity-integerTom'));
  integerRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-integerRequiredTom'));
  integerMinTomInput: ElementFinder = element(by.css('input#field-test-entity-integerMinTom'));
  integerMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-integerMaxTom'));
  longTomInput: ElementFinder = element(by.css('input#field-test-entity-longTom'));
  longRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-longRequiredTom'));
  longMinTomInput: ElementFinder = element(by.css('input#field-test-entity-longMinTom'));
  longMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-longMaxTom'));
  floatTomInput: ElementFinder = element(by.css('input#field-test-entity-floatTom'));
  floatRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-floatRequiredTom'));
  floatMinTomInput: ElementFinder = element(by.css('input#field-test-entity-floatMinTom'));
  floatMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-floatMaxTom'));
  doubleRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleRequiredTom'));
  doubleMinTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleMinTom'));
  doubleMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleMaxTom'));
  bigDecimalRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalRequiredTom'));
  bigDecimalMinTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalMinTom'));
  bigDecimalMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalMaxTom'));
  localDateTomInput: ElementFinder = element(by.css('input#field-test-entity-localDateTom'));
  localDateRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-localDateRequiredTom'));
  instantTomInput: ElementFinder = element(by.css('input#field-test-entity-instantTom'));
  instantRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-instantRequiredTom'));
  zonedDateTimeTomInput: ElementFinder = element(by.css('input#field-test-entity-zonedDateTimeTom'));
  zonedDateTimeRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-zonedDateTimeRequiredTom'));
  booleanTomInput: ElementFinder = element(by.css('input#field-test-entity-booleanTom'));
  booleanRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-booleanRequiredTom'));
  enumTomSelect: ElementFinder = element(by.css('select#field-test-entity-enumTom'));
  enumRequiredTomSelect: ElementFinder = element(by.css('select#field-test-entity-enumRequiredTom'));
  byteImageTomInput: ElementFinder = element(by.css('input#file_byteImageTom'));
  byteImageRequiredTomInput: ElementFinder = element(by.css('input#file_byteImageRequiredTom'));
  byteImageMinbytesTomInput: ElementFinder = element(by.css('input#file_byteImageMinbytesTom'));
  byteImageMaxbytesTomInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesTom'));
  byteAnyTomInput: ElementFinder = element(by.css('input#file_byteAnyTom'));
  byteAnyRequiredTomInput: ElementFinder = element(by.css('input#file_byteAnyRequiredTom'));
  byteAnyMinbytesTomInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesTom'));
  byteAnyMaxbytesTomInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesTom'));
  byteTextTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextTom'));
  byteTextRequiredTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextRequiredTom'));
  byteTextMinbytesTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextMinbytesTom'));
  byteTextMaxbytesTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextMaxbytesTom'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringTomInput(stringTom) {
    this.stringTomInput.sendKeys(stringTom);
  }

  getStringTomInput() {
    return this.stringTomInput.getAttribute('value');
  }

  setStringRequiredTomInput(stringRequiredTom) {
    this.stringRequiredTomInput.sendKeys(stringRequiredTom);
  }

  getStringRequiredTomInput() {
    return this.stringRequiredTomInput.getAttribute('value');
  }

  setStringMinlengthTomInput(stringMinlengthTom) {
    this.stringMinlengthTomInput.sendKeys(stringMinlengthTom);
  }

  getStringMinlengthTomInput() {
    return this.stringMinlengthTomInput.getAttribute('value');
  }

  setStringMaxlengthTomInput(stringMaxlengthTom) {
    this.stringMaxlengthTomInput.sendKeys(stringMaxlengthTom);
  }

  getStringMaxlengthTomInput() {
    return this.stringMaxlengthTomInput.getAttribute('value');
  }

  setStringPatternTomInput(stringPatternTom) {
    this.stringPatternTomInput.sendKeys(stringPatternTom);
  }

  getStringPatternTomInput() {
    return this.stringPatternTomInput.getAttribute('value');
  }

  setIntegerTomInput(integerTom) {
    this.integerTomInput.sendKeys(integerTom);
  }

  getIntegerTomInput() {
    return this.integerTomInput.getAttribute('value');
  }

  setIntegerRequiredTomInput(integerRequiredTom) {
    this.integerRequiredTomInput.sendKeys(integerRequiredTom);
  }

  getIntegerRequiredTomInput() {
    return this.integerRequiredTomInput.getAttribute('value');
  }

  setIntegerMinTomInput(integerMinTom) {
    this.integerMinTomInput.sendKeys(integerMinTom);
  }

  getIntegerMinTomInput() {
    return this.integerMinTomInput.getAttribute('value');
  }

  setIntegerMaxTomInput(integerMaxTom) {
    this.integerMaxTomInput.sendKeys(integerMaxTom);
  }

  getIntegerMaxTomInput() {
    return this.integerMaxTomInput.getAttribute('value');
  }

  setLongTomInput(longTom) {
    this.longTomInput.sendKeys(longTom);
  }

  getLongTomInput() {
    return this.longTomInput.getAttribute('value');
  }

  setLongRequiredTomInput(longRequiredTom) {
    this.longRequiredTomInput.sendKeys(longRequiredTom);
  }

  getLongRequiredTomInput() {
    return this.longRequiredTomInput.getAttribute('value');
  }

  setLongMinTomInput(longMinTom) {
    this.longMinTomInput.sendKeys(longMinTom);
  }

  getLongMinTomInput() {
    return this.longMinTomInput.getAttribute('value');
  }

  setLongMaxTomInput(longMaxTom) {
    this.longMaxTomInput.sendKeys(longMaxTom);
  }

  getLongMaxTomInput() {
    return this.longMaxTomInput.getAttribute('value');
  }

  setFloatTomInput(floatTom) {
    this.floatTomInput.sendKeys(floatTom);
  }

  getFloatTomInput() {
    return this.floatTomInput.getAttribute('value');
  }

  setFloatRequiredTomInput(floatRequiredTom) {
    this.floatRequiredTomInput.sendKeys(floatRequiredTom);
  }

  getFloatRequiredTomInput() {
    return this.floatRequiredTomInput.getAttribute('value');
  }

  setFloatMinTomInput(floatMinTom) {
    this.floatMinTomInput.sendKeys(floatMinTom);
  }

  getFloatMinTomInput() {
    return this.floatMinTomInput.getAttribute('value');
  }

  setFloatMaxTomInput(floatMaxTom) {
    this.floatMaxTomInput.sendKeys(floatMaxTom);
  }

  getFloatMaxTomInput() {
    return this.floatMaxTomInput.getAttribute('value');
  }

  setDoubleRequiredTomInput(doubleRequiredTom) {
    this.doubleRequiredTomInput.sendKeys(doubleRequiredTom);
  }

  getDoubleRequiredTomInput() {
    return this.doubleRequiredTomInput.getAttribute('value');
  }

  setDoubleMinTomInput(doubleMinTom) {
    this.doubleMinTomInput.sendKeys(doubleMinTom);
  }

  getDoubleMinTomInput() {
    return this.doubleMinTomInput.getAttribute('value');
  }

  setDoubleMaxTomInput(doubleMaxTom) {
    this.doubleMaxTomInput.sendKeys(doubleMaxTom);
  }

  getDoubleMaxTomInput() {
    return this.doubleMaxTomInput.getAttribute('value');
  }

  setBigDecimalRequiredTomInput(bigDecimalRequiredTom) {
    this.bigDecimalRequiredTomInput.sendKeys(bigDecimalRequiredTom);
  }

  getBigDecimalRequiredTomInput() {
    return this.bigDecimalRequiredTomInput.getAttribute('value');
  }

  setBigDecimalMinTomInput(bigDecimalMinTom) {
    this.bigDecimalMinTomInput.sendKeys(bigDecimalMinTom);
  }

  getBigDecimalMinTomInput() {
    return this.bigDecimalMinTomInput.getAttribute('value');
  }

  setBigDecimalMaxTomInput(bigDecimalMaxTom) {
    this.bigDecimalMaxTomInput.sendKeys(bigDecimalMaxTom);
  }

  getBigDecimalMaxTomInput() {
    return this.bigDecimalMaxTomInput.getAttribute('value');
  }

  setLocalDateTomInput(localDateTom) {
    this.localDateTomInput.sendKeys(localDateTom);
  }

  getLocalDateTomInput() {
    return this.localDateTomInput.getAttribute('value');
  }

  setLocalDateRequiredTomInput(localDateRequiredTom) {
    this.localDateRequiredTomInput.sendKeys(localDateRequiredTom);
  }

  getLocalDateRequiredTomInput() {
    return this.localDateRequiredTomInput.getAttribute('value');
  }

  setInstantTomInput(instantTom) {
    this.instantTomInput.sendKeys(instantTom);
  }

  getInstantTomInput() {
    return this.instantTomInput.getAttribute('value');
  }

  setInstantRequiredTomInput(instantRequiredTom) {
    this.instantRequiredTomInput.sendKeys(instantRequiredTom);
  }

  getInstantRequiredTomInput() {
    return this.instantRequiredTomInput.getAttribute('value');
  }

  setZonedDateTimeTomInput(zonedDateTimeTom) {
    this.zonedDateTimeTomInput.sendKeys(zonedDateTimeTom);
  }

  getZonedDateTimeTomInput() {
    return this.zonedDateTimeTomInput.getAttribute('value');
  }

  setZonedDateTimeRequiredTomInput(zonedDateTimeRequiredTom) {
    this.zonedDateTimeRequiredTomInput.sendKeys(zonedDateTimeRequiredTom);
  }

  getZonedDateTimeRequiredTomInput() {
    return this.zonedDateTimeRequiredTomInput.getAttribute('value');
  }

  getBooleanTomInput() {
    return this.booleanTomInput;
  }
  getBooleanRequiredTomInput() {
    return this.booleanRequiredTomInput;
  }
  setEnumTomSelect(enumTom) {
    this.enumTomSelect.sendKeys(enumTom);
  }

  getEnumTomSelect() {
    return this.enumTomSelect.element(by.css('option:checked')).getText();
  }

  enumTomSelectLastOption() {
    this.enumTomSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredTomSelect(enumRequiredTom) {
    this.enumRequiredTomSelect.sendKeys(enumRequiredTom);
  }

  getEnumRequiredTomSelect() {
    return this.enumRequiredTomSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredTomSelectLastOption() {
    this.enumRequiredTomSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageTomInput(byteImageTom) {
    this.byteImageTomInput.sendKeys(byteImageTom);
  }

  getByteImageTomInput() {
    return this.byteImageTomInput.getAttribute('value');
  }

  setByteImageRequiredTomInput(byteImageRequiredTom) {
    this.byteImageRequiredTomInput.sendKeys(byteImageRequiredTom);
  }

  getByteImageRequiredTomInput() {
    return this.byteImageRequiredTomInput.getAttribute('value');
  }

  setByteImageMinbytesTomInput(byteImageMinbytesTom) {
    this.byteImageMinbytesTomInput.sendKeys(byteImageMinbytesTom);
  }

  getByteImageMinbytesTomInput() {
    return this.byteImageMinbytesTomInput.getAttribute('value');
  }

  setByteImageMaxbytesTomInput(byteImageMaxbytesTom) {
    this.byteImageMaxbytesTomInput.sendKeys(byteImageMaxbytesTom);
  }

  getByteImageMaxbytesTomInput() {
    return this.byteImageMaxbytesTomInput.getAttribute('value');
  }

  setByteAnyTomInput(byteAnyTom) {
    this.byteAnyTomInput.sendKeys(byteAnyTom);
  }

  getByteAnyTomInput() {
    return this.byteAnyTomInput.getAttribute('value');
  }

  setByteAnyRequiredTomInput(byteAnyRequiredTom) {
    this.byteAnyRequiredTomInput.sendKeys(byteAnyRequiredTom);
  }

  getByteAnyRequiredTomInput() {
    return this.byteAnyRequiredTomInput.getAttribute('value');
  }

  setByteAnyMinbytesTomInput(byteAnyMinbytesTom) {
    this.byteAnyMinbytesTomInput.sendKeys(byteAnyMinbytesTom);
  }

  getByteAnyMinbytesTomInput() {
    return this.byteAnyMinbytesTomInput.getAttribute('value');
  }

  setByteAnyMaxbytesTomInput(byteAnyMaxbytesTom) {
    this.byteAnyMaxbytesTomInput.sendKeys(byteAnyMaxbytesTom);
  }

  getByteAnyMaxbytesTomInput() {
    return this.byteAnyMaxbytesTomInput.getAttribute('value');
  }

  setByteTextTomInput(byteTextTom) {
    this.byteTextTomInput.sendKeys(byteTextTom);
  }

  getByteTextTomInput() {
    return this.byteTextTomInput.getAttribute('value');
  }

  setByteTextRequiredTomInput(byteTextRequiredTom) {
    this.byteTextRequiredTomInput.sendKeys(byteTextRequiredTom);
  }

  getByteTextRequiredTomInput() {
    return this.byteTextRequiredTomInput.getAttribute('value');
  }

  setByteTextMinbytesTomInput(byteTextMinbytesTom) {
    this.byteTextMinbytesTomInput.sendKeys(byteTextMinbytesTom);
  }

  getByteTextMinbytesTomInput() {
    return this.byteTextMinbytesTomInput.getAttribute('value');
  }

  setByteTextMaxbytesTomInput(byteTextMaxbytesTom) {
    this.byteTextMaxbytesTomInput.sendKeys(byteTextMaxbytesTom);
  }

  getByteTextMaxbytesTomInput() {
    return this.byteTextMaxbytesTomInput.getAttribute('value');
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
