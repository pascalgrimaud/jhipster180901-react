import { element, by, ElementFinder } from 'protractor';

export default class FieldTestServiceImplEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestServiceImplEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMika'));
  stringRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringRequiredMika'));
  stringMinlengthMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMinlengthMika'));
  stringMaxlengthMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMaxlengthMika'));
  stringPatternMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringPatternMika'));
  integerMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMika'));
  integerRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerRequiredMika'));
  integerMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMinMika'));
  integerMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMaxMika'));
  longMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMika'));
  longRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longRequiredMika'));
  longMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMinMika'));
  longMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMaxMika'));
  floatMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMika'));
  floatRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatRequiredMika'));
  floatMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMinMika'));
  floatMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMaxMika'));
  doubleRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleRequiredMika'));
  doubleMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleMinMika'));
  doubleMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleMaxMika'));
  bigDecimalRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalRequiredMika'));
  bigDecimalMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalMinMika'));
  bigDecimalMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalMaxMika'));
  localDateMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-localDateMika'));
  localDateRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-localDateRequiredMika'));
  instantMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-instantMika'));
  instanteRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-instanteRequiredMika'));
  zonedDateTimeMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-zonedDateTimeMika'));
  zonedDateTimeRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-zonedDateTimeRequiredMika'));
  booleanMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-booleanMika'));
  booleanRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-booleanRequiredMika'));
  enumMikaSelect: ElementFinder = element(by.css('select#field-test-service-impl-entity-enumMika'));
  enumRequiredMikaSelect: ElementFinder = element(by.css('select#field-test-service-impl-entity-enumRequiredMika'));
  byteImageMikaInput: ElementFinder = element(by.css('input#file_byteImageMika'));
  byteImageRequiredMikaInput: ElementFinder = element(by.css('input#file_byteImageRequiredMika'));
  byteImageMinbytesMikaInput: ElementFinder = element(by.css('input#file_byteImageMinbytesMika'));
  byteImageMaxbytesMikaInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesMika'));
  byteAnyMikaInput: ElementFinder = element(by.css('input#file_byteAnyMika'));
  byteAnyRequiredMikaInput: ElementFinder = element(by.css('input#file_byteAnyRequiredMika'));
  byteAnyMinbytesMikaInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesMika'));
  byteAnyMaxbytesMikaInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesMika'));
  byteTextMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextMika'));
  byteTextRequiredMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextRequiredMika'));
  byteTextMinbytesMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextMinbytesMika'));
  byteTextMaxbytesMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextMaxbytesMika'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringMikaInput(stringMika) {
    this.stringMikaInput.sendKeys(stringMika);
  }

  getStringMikaInput() {
    return this.stringMikaInput.getAttribute('value');
  }

  setStringRequiredMikaInput(stringRequiredMika) {
    this.stringRequiredMikaInput.sendKeys(stringRequiredMika);
  }

  getStringRequiredMikaInput() {
    return this.stringRequiredMikaInput.getAttribute('value');
  }

  setStringMinlengthMikaInput(stringMinlengthMika) {
    this.stringMinlengthMikaInput.sendKeys(stringMinlengthMika);
  }

  getStringMinlengthMikaInput() {
    return this.stringMinlengthMikaInput.getAttribute('value');
  }

  setStringMaxlengthMikaInput(stringMaxlengthMika) {
    this.stringMaxlengthMikaInput.sendKeys(stringMaxlengthMika);
  }

  getStringMaxlengthMikaInput() {
    return this.stringMaxlengthMikaInput.getAttribute('value');
  }

  setStringPatternMikaInput(stringPatternMika) {
    this.stringPatternMikaInput.sendKeys(stringPatternMika);
  }

  getStringPatternMikaInput() {
    return this.stringPatternMikaInput.getAttribute('value');
  }

  setIntegerMikaInput(integerMika) {
    this.integerMikaInput.sendKeys(integerMika);
  }

  getIntegerMikaInput() {
    return this.integerMikaInput.getAttribute('value');
  }

  setIntegerRequiredMikaInput(integerRequiredMika) {
    this.integerRequiredMikaInput.sendKeys(integerRequiredMika);
  }

  getIntegerRequiredMikaInput() {
    return this.integerRequiredMikaInput.getAttribute('value');
  }

  setIntegerMinMikaInput(integerMinMika) {
    this.integerMinMikaInput.sendKeys(integerMinMika);
  }

  getIntegerMinMikaInput() {
    return this.integerMinMikaInput.getAttribute('value');
  }

  setIntegerMaxMikaInput(integerMaxMika) {
    this.integerMaxMikaInput.sendKeys(integerMaxMika);
  }

  getIntegerMaxMikaInput() {
    return this.integerMaxMikaInput.getAttribute('value');
  }

  setLongMikaInput(longMika) {
    this.longMikaInput.sendKeys(longMika);
  }

  getLongMikaInput() {
    return this.longMikaInput.getAttribute('value');
  }

  setLongRequiredMikaInput(longRequiredMika) {
    this.longRequiredMikaInput.sendKeys(longRequiredMika);
  }

  getLongRequiredMikaInput() {
    return this.longRequiredMikaInput.getAttribute('value');
  }

  setLongMinMikaInput(longMinMika) {
    this.longMinMikaInput.sendKeys(longMinMika);
  }

  getLongMinMikaInput() {
    return this.longMinMikaInput.getAttribute('value');
  }

  setLongMaxMikaInput(longMaxMika) {
    this.longMaxMikaInput.sendKeys(longMaxMika);
  }

  getLongMaxMikaInput() {
    return this.longMaxMikaInput.getAttribute('value');
  }

  setFloatMikaInput(floatMika) {
    this.floatMikaInput.sendKeys(floatMika);
  }

  getFloatMikaInput() {
    return this.floatMikaInput.getAttribute('value');
  }

  setFloatRequiredMikaInput(floatRequiredMika) {
    this.floatRequiredMikaInput.sendKeys(floatRequiredMika);
  }

  getFloatRequiredMikaInput() {
    return this.floatRequiredMikaInput.getAttribute('value');
  }

  setFloatMinMikaInput(floatMinMika) {
    this.floatMinMikaInput.sendKeys(floatMinMika);
  }

  getFloatMinMikaInput() {
    return this.floatMinMikaInput.getAttribute('value');
  }

  setFloatMaxMikaInput(floatMaxMika) {
    this.floatMaxMikaInput.sendKeys(floatMaxMika);
  }

  getFloatMaxMikaInput() {
    return this.floatMaxMikaInput.getAttribute('value');
  }

  setDoubleRequiredMikaInput(doubleRequiredMika) {
    this.doubleRequiredMikaInput.sendKeys(doubleRequiredMika);
  }

  getDoubleRequiredMikaInput() {
    return this.doubleRequiredMikaInput.getAttribute('value');
  }

  setDoubleMinMikaInput(doubleMinMika) {
    this.doubleMinMikaInput.sendKeys(doubleMinMika);
  }

  getDoubleMinMikaInput() {
    return this.doubleMinMikaInput.getAttribute('value');
  }

  setDoubleMaxMikaInput(doubleMaxMika) {
    this.doubleMaxMikaInput.sendKeys(doubleMaxMika);
  }

  getDoubleMaxMikaInput() {
    return this.doubleMaxMikaInput.getAttribute('value');
  }

  setBigDecimalRequiredMikaInput(bigDecimalRequiredMika) {
    this.bigDecimalRequiredMikaInput.sendKeys(bigDecimalRequiredMika);
  }

  getBigDecimalRequiredMikaInput() {
    return this.bigDecimalRequiredMikaInput.getAttribute('value');
  }

  setBigDecimalMinMikaInput(bigDecimalMinMika) {
    this.bigDecimalMinMikaInput.sendKeys(bigDecimalMinMika);
  }

  getBigDecimalMinMikaInput() {
    return this.bigDecimalMinMikaInput.getAttribute('value');
  }

  setBigDecimalMaxMikaInput(bigDecimalMaxMika) {
    this.bigDecimalMaxMikaInput.sendKeys(bigDecimalMaxMika);
  }

  getBigDecimalMaxMikaInput() {
    return this.bigDecimalMaxMikaInput.getAttribute('value');
  }

  setLocalDateMikaInput(localDateMika) {
    this.localDateMikaInput.sendKeys(localDateMika);
  }

  getLocalDateMikaInput() {
    return this.localDateMikaInput.getAttribute('value');
  }

  setLocalDateRequiredMikaInput(localDateRequiredMika) {
    this.localDateRequiredMikaInput.sendKeys(localDateRequiredMika);
  }

  getLocalDateRequiredMikaInput() {
    return this.localDateRequiredMikaInput.getAttribute('value');
  }

  setInstantMikaInput(instantMika) {
    this.instantMikaInput.sendKeys(instantMika);
  }

  getInstantMikaInput() {
    return this.instantMikaInput.getAttribute('value');
  }

  setInstanteRequiredMikaInput(instanteRequiredMika) {
    this.instanteRequiredMikaInput.sendKeys(instanteRequiredMika);
  }

  getInstanteRequiredMikaInput() {
    return this.instanteRequiredMikaInput.getAttribute('value');
  }

  setZonedDateTimeMikaInput(zonedDateTimeMika) {
    this.zonedDateTimeMikaInput.sendKeys(zonedDateTimeMika);
  }

  getZonedDateTimeMikaInput() {
    return this.zonedDateTimeMikaInput.getAttribute('value');
  }

  setZonedDateTimeRequiredMikaInput(zonedDateTimeRequiredMika) {
    this.zonedDateTimeRequiredMikaInput.sendKeys(zonedDateTimeRequiredMika);
  }

  getZonedDateTimeRequiredMikaInput() {
    return this.zonedDateTimeRequiredMikaInput.getAttribute('value');
  }

  getBooleanMikaInput() {
    return this.booleanMikaInput;
  }
  getBooleanRequiredMikaInput() {
    return this.booleanRequiredMikaInput;
  }
  setEnumMikaSelect(enumMika) {
    this.enumMikaSelect.sendKeys(enumMika);
  }

  getEnumMikaSelect() {
    return this.enumMikaSelect.element(by.css('option:checked')).getText();
  }

  enumMikaSelectLastOption() {
    this.enumMikaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredMikaSelect(enumRequiredMika) {
    this.enumRequiredMikaSelect.sendKeys(enumRequiredMika);
  }

  getEnumRequiredMikaSelect() {
    return this.enumRequiredMikaSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredMikaSelectLastOption() {
    this.enumRequiredMikaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageMikaInput(byteImageMika) {
    this.byteImageMikaInput.sendKeys(byteImageMika);
  }

  getByteImageMikaInput() {
    return this.byteImageMikaInput.getAttribute('value');
  }

  setByteImageRequiredMikaInput(byteImageRequiredMika) {
    this.byteImageRequiredMikaInput.sendKeys(byteImageRequiredMika);
  }

  getByteImageRequiredMikaInput() {
    return this.byteImageRequiredMikaInput.getAttribute('value');
  }

  setByteImageMinbytesMikaInput(byteImageMinbytesMika) {
    this.byteImageMinbytesMikaInput.sendKeys(byteImageMinbytesMika);
  }

  getByteImageMinbytesMikaInput() {
    return this.byteImageMinbytesMikaInput.getAttribute('value');
  }

  setByteImageMaxbytesMikaInput(byteImageMaxbytesMika) {
    this.byteImageMaxbytesMikaInput.sendKeys(byteImageMaxbytesMika);
  }

  getByteImageMaxbytesMikaInput() {
    return this.byteImageMaxbytesMikaInput.getAttribute('value');
  }

  setByteAnyMikaInput(byteAnyMika) {
    this.byteAnyMikaInput.sendKeys(byteAnyMika);
  }

  getByteAnyMikaInput() {
    return this.byteAnyMikaInput.getAttribute('value');
  }

  setByteAnyRequiredMikaInput(byteAnyRequiredMika) {
    this.byteAnyRequiredMikaInput.sendKeys(byteAnyRequiredMika);
  }

  getByteAnyRequiredMikaInput() {
    return this.byteAnyRequiredMikaInput.getAttribute('value');
  }

  setByteAnyMinbytesMikaInput(byteAnyMinbytesMika) {
    this.byteAnyMinbytesMikaInput.sendKeys(byteAnyMinbytesMika);
  }

  getByteAnyMinbytesMikaInput() {
    return this.byteAnyMinbytesMikaInput.getAttribute('value');
  }

  setByteAnyMaxbytesMikaInput(byteAnyMaxbytesMika) {
    this.byteAnyMaxbytesMikaInput.sendKeys(byteAnyMaxbytesMika);
  }

  getByteAnyMaxbytesMikaInput() {
    return this.byteAnyMaxbytesMikaInput.getAttribute('value');
  }

  setByteTextMikaInput(byteTextMika) {
    this.byteTextMikaInput.sendKeys(byteTextMika);
  }

  getByteTextMikaInput() {
    return this.byteTextMikaInput.getAttribute('value');
  }

  setByteTextRequiredMikaInput(byteTextRequiredMika) {
    this.byteTextRequiredMikaInput.sendKeys(byteTextRequiredMika);
  }

  getByteTextRequiredMikaInput() {
    return this.byteTextRequiredMikaInput.getAttribute('value');
  }

  setByteTextMinbytesMikaInput(byteTextMinbytesMika) {
    this.byteTextMinbytesMikaInput.sendKeys(byteTextMinbytesMika);
  }

  getByteTextMinbytesMikaInput() {
    return this.byteTextMinbytesMikaInput.getAttribute('value');
  }

  setByteTextMaxbytesMikaInput(byteTextMaxbytesMika) {
    this.byteTextMaxbytesMikaInput.sendKeys(byteTextMaxbytesMika);
  }

  getByteTextMaxbytesMikaInput() {
    return this.byteTextMaxbytesMikaInput.getAttribute('value');
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
