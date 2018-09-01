import { element, by, ElementFinder } from 'protractor';

export default class FieldTestMapstructEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestMapstructEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringEva'));
  stringRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringRequiredEva'));
  stringMinlengthEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringMinlengthEva'));
  stringMaxlengthEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringMaxlengthEva'));
  stringPatternEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringPatternEva'));
  integerEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerEva'));
  integerRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerRequiredEva'));
  integerMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerMinEva'));
  integerMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerMaxEva'));
  longEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longEva'));
  longRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longRequiredEva'));
  longMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longMinEva'));
  longMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longMaxEva'));
  floatEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatEva'));
  floatRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatRequiredEva'));
  floatMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatMinEva'));
  floatMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatMaxEva'));
  doubleRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleRequiredEva'));
  doubleMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleMinEva'));
  doubleMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleMaxEva'));
  bigDecimalRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalRequiredEva'));
  bigDecimalMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalMinEva'));
  bigDecimalMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalMaxEva'));
  localDateEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-localDateEva'));
  localDateRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-localDateRequiredEva'));
  instantEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-instantEva'));
  instanteRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-instanteRequiredEva'));
  zonedDateTimeEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-zonedDateTimeEva'));
  zonedDateTimeRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-zonedDateTimeRequiredEva'));
  booleanEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-booleanEva'));
  booleanRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-booleanRequiredEva'));
  enumEvaSelect: ElementFinder = element(by.css('select#field-test-mapstruct-entity-enumEva'));
  enumRequiredEvaSelect: ElementFinder = element(by.css('select#field-test-mapstruct-entity-enumRequiredEva'));
  byteImageEvaInput: ElementFinder = element(by.css('input#file_byteImageEva'));
  byteImageRequiredEvaInput: ElementFinder = element(by.css('input#file_byteImageRequiredEva'));
  byteImageMinbytesEvaInput: ElementFinder = element(by.css('input#file_byteImageMinbytesEva'));
  byteImageMaxbytesEvaInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesEva'));
  byteAnyEvaInput: ElementFinder = element(by.css('input#file_byteAnyEva'));
  byteAnyRequiredEvaInput: ElementFinder = element(by.css('input#file_byteAnyRequiredEva'));
  byteAnyMinbytesEvaInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesEva'));
  byteAnyMaxbytesEvaInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesEva'));
  byteTextEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextEva'));
  byteTextRequiredEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextRequiredEva'));
  byteTextMinbytesEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextMinbytesEva'));
  byteTextMaxbytesEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextMaxbytesEva'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringEvaInput(stringEva) {
    this.stringEvaInput.sendKeys(stringEva);
  }

  getStringEvaInput() {
    return this.stringEvaInput.getAttribute('value');
  }

  setStringRequiredEvaInput(stringRequiredEva) {
    this.stringRequiredEvaInput.sendKeys(stringRequiredEva);
  }

  getStringRequiredEvaInput() {
    return this.stringRequiredEvaInput.getAttribute('value');
  }

  setStringMinlengthEvaInput(stringMinlengthEva) {
    this.stringMinlengthEvaInput.sendKeys(stringMinlengthEva);
  }

  getStringMinlengthEvaInput() {
    return this.stringMinlengthEvaInput.getAttribute('value');
  }

  setStringMaxlengthEvaInput(stringMaxlengthEva) {
    this.stringMaxlengthEvaInput.sendKeys(stringMaxlengthEva);
  }

  getStringMaxlengthEvaInput() {
    return this.stringMaxlengthEvaInput.getAttribute('value');
  }

  setStringPatternEvaInput(stringPatternEva) {
    this.stringPatternEvaInput.sendKeys(stringPatternEva);
  }

  getStringPatternEvaInput() {
    return this.stringPatternEvaInput.getAttribute('value');
  }

  setIntegerEvaInput(integerEva) {
    this.integerEvaInput.sendKeys(integerEva);
  }

  getIntegerEvaInput() {
    return this.integerEvaInput.getAttribute('value');
  }

  setIntegerRequiredEvaInput(integerRequiredEva) {
    this.integerRequiredEvaInput.sendKeys(integerRequiredEva);
  }

  getIntegerRequiredEvaInput() {
    return this.integerRequiredEvaInput.getAttribute('value');
  }

  setIntegerMinEvaInput(integerMinEva) {
    this.integerMinEvaInput.sendKeys(integerMinEva);
  }

  getIntegerMinEvaInput() {
    return this.integerMinEvaInput.getAttribute('value');
  }

  setIntegerMaxEvaInput(integerMaxEva) {
    this.integerMaxEvaInput.sendKeys(integerMaxEva);
  }

  getIntegerMaxEvaInput() {
    return this.integerMaxEvaInput.getAttribute('value');
  }

  setLongEvaInput(longEva) {
    this.longEvaInput.sendKeys(longEva);
  }

  getLongEvaInput() {
    return this.longEvaInput.getAttribute('value');
  }

  setLongRequiredEvaInput(longRequiredEva) {
    this.longRequiredEvaInput.sendKeys(longRequiredEva);
  }

  getLongRequiredEvaInput() {
    return this.longRequiredEvaInput.getAttribute('value');
  }

  setLongMinEvaInput(longMinEva) {
    this.longMinEvaInput.sendKeys(longMinEva);
  }

  getLongMinEvaInput() {
    return this.longMinEvaInput.getAttribute('value');
  }

  setLongMaxEvaInput(longMaxEva) {
    this.longMaxEvaInput.sendKeys(longMaxEva);
  }

  getLongMaxEvaInput() {
    return this.longMaxEvaInput.getAttribute('value');
  }

  setFloatEvaInput(floatEva) {
    this.floatEvaInput.sendKeys(floatEva);
  }

  getFloatEvaInput() {
    return this.floatEvaInput.getAttribute('value');
  }

  setFloatRequiredEvaInput(floatRequiredEva) {
    this.floatRequiredEvaInput.sendKeys(floatRequiredEva);
  }

  getFloatRequiredEvaInput() {
    return this.floatRequiredEvaInput.getAttribute('value');
  }

  setFloatMinEvaInput(floatMinEva) {
    this.floatMinEvaInput.sendKeys(floatMinEva);
  }

  getFloatMinEvaInput() {
    return this.floatMinEvaInput.getAttribute('value');
  }

  setFloatMaxEvaInput(floatMaxEva) {
    this.floatMaxEvaInput.sendKeys(floatMaxEva);
  }

  getFloatMaxEvaInput() {
    return this.floatMaxEvaInput.getAttribute('value');
  }

  setDoubleRequiredEvaInput(doubleRequiredEva) {
    this.doubleRequiredEvaInput.sendKeys(doubleRequiredEva);
  }

  getDoubleRequiredEvaInput() {
    return this.doubleRequiredEvaInput.getAttribute('value');
  }

  setDoubleMinEvaInput(doubleMinEva) {
    this.doubleMinEvaInput.sendKeys(doubleMinEva);
  }

  getDoubleMinEvaInput() {
    return this.doubleMinEvaInput.getAttribute('value');
  }

  setDoubleMaxEvaInput(doubleMaxEva) {
    this.doubleMaxEvaInput.sendKeys(doubleMaxEva);
  }

  getDoubleMaxEvaInput() {
    return this.doubleMaxEvaInput.getAttribute('value');
  }

  setBigDecimalRequiredEvaInput(bigDecimalRequiredEva) {
    this.bigDecimalRequiredEvaInput.sendKeys(bigDecimalRequiredEva);
  }

  getBigDecimalRequiredEvaInput() {
    return this.bigDecimalRequiredEvaInput.getAttribute('value');
  }

  setBigDecimalMinEvaInput(bigDecimalMinEva) {
    this.bigDecimalMinEvaInput.sendKeys(bigDecimalMinEva);
  }

  getBigDecimalMinEvaInput() {
    return this.bigDecimalMinEvaInput.getAttribute('value');
  }

  setBigDecimalMaxEvaInput(bigDecimalMaxEva) {
    this.bigDecimalMaxEvaInput.sendKeys(bigDecimalMaxEva);
  }

  getBigDecimalMaxEvaInput() {
    return this.bigDecimalMaxEvaInput.getAttribute('value');
  }

  setLocalDateEvaInput(localDateEva) {
    this.localDateEvaInput.sendKeys(localDateEva);
  }

  getLocalDateEvaInput() {
    return this.localDateEvaInput.getAttribute('value');
  }

  setLocalDateRequiredEvaInput(localDateRequiredEva) {
    this.localDateRequiredEvaInput.sendKeys(localDateRequiredEva);
  }

  getLocalDateRequiredEvaInput() {
    return this.localDateRequiredEvaInput.getAttribute('value');
  }

  setInstantEvaInput(instantEva) {
    this.instantEvaInput.sendKeys(instantEva);
  }

  getInstantEvaInput() {
    return this.instantEvaInput.getAttribute('value');
  }

  setInstanteRequiredEvaInput(instanteRequiredEva) {
    this.instanteRequiredEvaInput.sendKeys(instanteRequiredEva);
  }

  getInstanteRequiredEvaInput() {
    return this.instanteRequiredEvaInput.getAttribute('value');
  }

  setZonedDateTimeEvaInput(zonedDateTimeEva) {
    this.zonedDateTimeEvaInput.sendKeys(zonedDateTimeEva);
  }

  getZonedDateTimeEvaInput() {
    return this.zonedDateTimeEvaInput.getAttribute('value');
  }

  setZonedDateTimeRequiredEvaInput(zonedDateTimeRequiredEva) {
    this.zonedDateTimeRequiredEvaInput.sendKeys(zonedDateTimeRequiredEva);
  }

  getZonedDateTimeRequiredEvaInput() {
    return this.zonedDateTimeRequiredEvaInput.getAttribute('value');
  }

  getBooleanEvaInput() {
    return this.booleanEvaInput;
  }
  getBooleanRequiredEvaInput() {
    return this.booleanRequiredEvaInput;
  }
  setEnumEvaSelect(enumEva) {
    this.enumEvaSelect.sendKeys(enumEva);
  }

  getEnumEvaSelect() {
    return this.enumEvaSelect.element(by.css('option:checked')).getText();
  }

  enumEvaSelectLastOption() {
    this.enumEvaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredEvaSelect(enumRequiredEva) {
    this.enumRequiredEvaSelect.sendKeys(enumRequiredEva);
  }

  getEnumRequiredEvaSelect() {
    return this.enumRequiredEvaSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredEvaSelectLastOption() {
    this.enumRequiredEvaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageEvaInput(byteImageEva) {
    this.byteImageEvaInput.sendKeys(byteImageEva);
  }

  getByteImageEvaInput() {
    return this.byteImageEvaInput.getAttribute('value');
  }

  setByteImageRequiredEvaInput(byteImageRequiredEva) {
    this.byteImageRequiredEvaInput.sendKeys(byteImageRequiredEva);
  }

  getByteImageRequiredEvaInput() {
    return this.byteImageRequiredEvaInput.getAttribute('value');
  }

  setByteImageMinbytesEvaInput(byteImageMinbytesEva) {
    this.byteImageMinbytesEvaInput.sendKeys(byteImageMinbytesEva);
  }

  getByteImageMinbytesEvaInput() {
    return this.byteImageMinbytesEvaInput.getAttribute('value');
  }

  setByteImageMaxbytesEvaInput(byteImageMaxbytesEva) {
    this.byteImageMaxbytesEvaInput.sendKeys(byteImageMaxbytesEva);
  }

  getByteImageMaxbytesEvaInput() {
    return this.byteImageMaxbytesEvaInput.getAttribute('value');
  }

  setByteAnyEvaInput(byteAnyEva) {
    this.byteAnyEvaInput.sendKeys(byteAnyEva);
  }

  getByteAnyEvaInput() {
    return this.byteAnyEvaInput.getAttribute('value');
  }

  setByteAnyRequiredEvaInput(byteAnyRequiredEva) {
    this.byteAnyRequiredEvaInput.sendKeys(byteAnyRequiredEva);
  }

  getByteAnyRequiredEvaInput() {
    return this.byteAnyRequiredEvaInput.getAttribute('value');
  }

  setByteAnyMinbytesEvaInput(byteAnyMinbytesEva) {
    this.byteAnyMinbytesEvaInput.sendKeys(byteAnyMinbytesEva);
  }

  getByteAnyMinbytesEvaInput() {
    return this.byteAnyMinbytesEvaInput.getAttribute('value');
  }

  setByteAnyMaxbytesEvaInput(byteAnyMaxbytesEva) {
    this.byteAnyMaxbytesEvaInput.sendKeys(byteAnyMaxbytesEva);
  }

  getByteAnyMaxbytesEvaInput() {
    return this.byteAnyMaxbytesEvaInput.getAttribute('value');
  }

  setByteTextEvaInput(byteTextEva) {
    this.byteTextEvaInput.sendKeys(byteTextEva);
  }

  getByteTextEvaInput() {
    return this.byteTextEvaInput.getAttribute('value');
  }

  setByteTextRequiredEvaInput(byteTextRequiredEva) {
    this.byteTextRequiredEvaInput.sendKeys(byteTextRequiredEva);
  }

  getByteTextRequiredEvaInput() {
    return this.byteTextRequiredEvaInput.getAttribute('value');
  }

  setByteTextMinbytesEvaInput(byteTextMinbytesEva) {
    this.byteTextMinbytesEvaInput.sendKeys(byteTextMinbytesEva);
  }

  getByteTextMinbytesEvaInput() {
    return this.byteTextMinbytesEvaInput.getAttribute('value');
  }

  setByteTextMaxbytesEvaInput(byteTextMaxbytesEva) {
    this.byteTextMaxbytesEvaInput.sendKeys(byteTextMaxbytesEva);
  }

  getByteTextMaxbytesEvaInput() {
    return this.byteTextMaxbytesEvaInput.getAttribute('value');
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
