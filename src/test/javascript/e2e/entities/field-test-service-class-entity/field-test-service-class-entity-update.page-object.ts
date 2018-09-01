import { element, by, ElementFinder } from 'protractor';

export default class FieldTestServiceClassEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestServiceClassEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringBob'));
  stringRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringRequiredBob'));
  stringMinlengthBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringMinlengthBob'));
  stringMaxlengthBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringMaxlengthBob'));
  stringPatternBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringPatternBob'));
  integerBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerBob'));
  integerRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerRequiredBob'));
  integerMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerMinBob'));
  integerMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerMaxBob'));
  longBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longBob'));
  longRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longRequiredBob'));
  longMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longMinBob'));
  longMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longMaxBob'));
  floatBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatBob'));
  floatRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatRequiredBob'));
  floatMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatMinBob'));
  floatMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatMaxBob'));
  doubleRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleRequiredBob'));
  doubleMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleMinBob'));
  doubleMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleMaxBob'));
  bigDecimalRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalRequiredBob'));
  bigDecimalMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalMinBob'));
  bigDecimalMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalMaxBob'));
  localDateBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-localDateBob'));
  localDateRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-localDateRequiredBob'));
  instantBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-instantBob'));
  instanteRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-instanteRequiredBob'));
  zonedDateTimeBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-zonedDateTimeBob'));
  zonedDateTimeRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-zonedDateTimeRequiredBob'));
  booleanBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-booleanBob'));
  booleanRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-booleanRequiredBob'));
  enumBobSelect: ElementFinder = element(by.css('select#field-test-service-class-entity-enumBob'));
  enumRequiredBobSelect: ElementFinder = element(by.css('select#field-test-service-class-entity-enumRequiredBob'));
  byteImageBobInput: ElementFinder = element(by.css('input#file_byteImageBob'));
  byteImageRequiredBobInput: ElementFinder = element(by.css('input#file_byteImageRequiredBob'));
  byteImageMinbytesBobInput: ElementFinder = element(by.css('input#file_byteImageMinbytesBob'));
  byteImageMaxbytesBobInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesBob'));
  byteAnyBobInput: ElementFinder = element(by.css('input#file_byteAnyBob'));
  byteAnyRequiredBobInput: ElementFinder = element(by.css('input#file_byteAnyRequiredBob'));
  byteAnyMinbytesBobInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesBob'));
  byteAnyMaxbytesBobInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesBob'));
  byteTextBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextBob'));
  byteTextRequiredBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextRequiredBob'));
  byteTextMinbytesBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextMinbytesBob'));
  byteTextMaxbytesBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextMaxbytesBob'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringBobInput(stringBob) {
    this.stringBobInput.sendKeys(stringBob);
  }

  getStringBobInput() {
    return this.stringBobInput.getAttribute('value');
  }

  setStringRequiredBobInput(stringRequiredBob) {
    this.stringRequiredBobInput.sendKeys(stringRequiredBob);
  }

  getStringRequiredBobInput() {
    return this.stringRequiredBobInput.getAttribute('value');
  }

  setStringMinlengthBobInput(stringMinlengthBob) {
    this.stringMinlengthBobInput.sendKeys(stringMinlengthBob);
  }

  getStringMinlengthBobInput() {
    return this.stringMinlengthBobInput.getAttribute('value');
  }

  setStringMaxlengthBobInput(stringMaxlengthBob) {
    this.stringMaxlengthBobInput.sendKeys(stringMaxlengthBob);
  }

  getStringMaxlengthBobInput() {
    return this.stringMaxlengthBobInput.getAttribute('value');
  }

  setStringPatternBobInput(stringPatternBob) {
    this.stringPatternBobInput.sendKeys(stringPatternBob);
  }

  getStringPatternBobInput() {
    return this.stringPatternBobInput.getAttribute('value');
  }

  setIntegerBobInput(integerBob) {
    this.integerBobInput.sendKeys(integerBob);
  }

  getIntegerBobInput() {
    return this.integerBobInput.getAttribute('value');
  }

  setIntegerRequiredBobInput(integerRequiredBob) {
    this.integerRequiredBobInput.sendKeys(integerRequiredBob);
  }

  getIntegerRequiredBobInput() {
    return this.integerRequiredBobInput.getAttribute('value');
  }

  setIntegerMinBobInput(integerMinBob) {
    this.integerMinBobInput.sendKeys(integerMinBob);
  }

  getIntegerMinBobInput() {
    return this.integerMinBobInput.getAttribute('value');
  }

  setIntegerMaxBobInput(integerMaxBob) {
    this.integerMaxBobInput.sendKeys(integerMaxBob);
  }

  getIntegerMaxBobInput() {
    return this.integerMaxBobInput.getAttribute('value');
  }

  setLongBobInput(longBob) {
    this.longBobInput.sendKeys(longBob);
  }

  getLongBobInput() {
    return this.longBobInput.getAttribute('value');
  }

  setLongRequiredBobInput(longRequiredBob) {
    this.longRequiredBobInput.sendKeys(longRequiredBob);
  }

  getLongRequiredBobInput() {
    return this.longRequiredBobInput.getAttribute('value');
  }

  setLongMinBobInput(longMinBob) {
    this.longMinBobInput.sendKeys(longMinBob);
  }

  getLongMinBobInput() {
    return this.longMinBobInput.getAttribute('value');
  }

  setLongMaxBobInput(longMaxBob) {
    this.longMaxBobInput.sendKeys(longMaxBob);
  }

  getLongMaxBobInput() {
    return this.longMaxBobInput.getAttribute('value');
  }

  setFloatBobInput(floatBob) {
    this.floatBobInput.sendKeys(floatBob);
  }

  getFloatBobInput() {
    return this.floatBobInput.getAttribute('value');
  }

  setFloatRequiredBobInput(floatRequiredBob) {
    this.floatRequiredBobInput.sendKeys(floatRequiredBob);
  }

  getFloatRequiredBobInput() {
    return this.floatRequiredBobInput.getAttribute('value');
  }

  setFloatMinBobInput(floatMinBob) {
    this.floatMinBobInput.sendKeys(floatMinBob);
  }

  getFloatMinBobInput() {
    return this.floatMinBobInput.getAttribute('value');
  }

  setFloatMaxBobInput(floatMaxBob) {
    this.floatMaxBobInput.sendKeys(floatMaxBob);
  }

  getFloatMaxBobInput() {
    return this.floatMaxBobInput.getAttribute('value');
  }

  setDoubleRequiredBobInput(doubleRequiredBob) {
    this.doubleRequiredBobInput.sendKeys(doubleRequiredBob);
  }

  getDoubleRequiredBobInput() {
    return this.doubleRequiredBobInput.getAttribute('value');
  }

  setDoubleMinBobInput(doubleMinBob) {
    this.doubleMinBobInput.sendKeys(doubleMinBob);
  }

  getDoubleMinBobInput() {
    return this.doubleMinBobInput.getAttribute('value');
  }

  setDoubleMaxBobInput(doubleMaxBob) {
    this.doubleMaxBobInput.sendKeys(doubleMaxBob);
  }

  getDoubleMaxBobInput() {
    return this.doubleMaxBobInput.getAttribute('value');
  }

  setBigDecimalRequiredBobInput(bigDecimalRequiredBob) {
    this.bigDecimalRequiredBobInput.sendKeys(bigDecimalRequiredBob);
  }

  getBigDecimalRequiredBobInput() {
    return this.bigDecimalRequiredBobInput.getAttribute('value');
  }

  setBigDecimalMinBobInput(bigDecimalMinBob) {
    this.bigDecimalMinBobInput.sendKeys(bigDecimalMinBob);
  }

  getBigDecimalMinBobInput() {
    return this.bigDecimalMinBobInput.getAttribute('value');
  }

  setBigDecimalMaxBobInput(bigDecimalMaxBob) {
    this.bigDecimalMaxBobInput.sendKeys(bigDecimalMaxBob);
  }

  getBigDecimalMaxBobInput() {
    return this.bigDecimalMaxBobInput.getAttribute('value');
  }

  setLocalDateBobInput(localDateBob) {
    this.localDateBobInput.sendKeys(localDateBob);
  }

  getLocalDateBobInput() {
    return this.localDateBobInput.getAttribute('value');
  }

  setLocalDateRequiredBobInput(localDateRequiredBob) {
    this.localDateRequiredBobInput.sendKeys(localDateRequiredBob);
  }

  getLocalDateRequiredBobInput() {
    return this.localDateRequiredBobInput.getAttribute('value');
  }

  setInstantBobInput(instantBob) {
    this.instantBobInput.sendKeys(instantBob);
  }

  getInstantBobInput() {
    return this.instantBobInput.getAttribute('value');
  }

  setInstanteRequiredBobInput(instanteRequiredBob) {
    this.instanteRequiredBobInput.sendKeys(instanteRequiredBob);
  }

  getInstanteRequiredBobInput() {
    return this.instanteRequiredBobInput.getAttribute('value');
  }

  setZonedDateTimeBobInput(zonedDateTimeBob) {
    this.zonedDateTimeBobInput.sendKeys(zonedDateTimeBob);
  }

  getZonedDateTimeBobInput() {
    return this.zonedDateTimeBobInput.getAttribute('value');
  }

  setZonedDateTimeRequiredBobInput(zonedDateTimeRequiredBob) {
    this.zonedDateTimeRequiredBobInput.sendKeys(zonedDateTimeRequiredBob);
  }

  getZonedDateTimeRequiredBobInput() {
    return this.zonedDateTimeRequiredBobInput.getAttribute('value');
  }

  getBooleanBobInput() {
    return this.booleanBobInput;
  }
  getBooleanRequiredBobInput() {
    return this.booleanRequiredBobInput;
  }
  setEnumBobSelect(enumBob) {
    this.enumBobSelect.sendKeys(enumBob);
  }

  getEnumBobSelect() {
    return this.enumBobSelect.element(by.css('option:checked')).getText();
  }

  enumBobSelectLastOption() {
    this.enumBobSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredBobSelect(enumRequiredBob) {
    this.enumRequiredBobSelect.sendKeys(enumRequiredBob);
  }

  getEnumRequiredBobSelect() {
    return this.enumRequiredBobSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredBobSelectLastOption() {
    this.enumRequiredBobSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageBobInput(byteImageBob) {
    this.byteImageBobInput.sendKeys(byteImageBob);
  }

  getByteImageBobInput() {
    return this.byteImageBobInput.getAttribute('value');
  }

  setByteImageRequiredBobInput(byteImageRequiredBob) {
    this.byteImageRequiredBobInput.sendKeys(byteImageRequiredBob);
  }

  getByteImageRequiredBobInput() {
    return this.byteImageRequiredBobInput.getAttribute('value');
  }

  setByteImageMinbytesBobInput(byteImageMinbytesBob) {
    this.byteImageMinbytesBobInput.sendKeys(byteImageMinbytesBob);
  }

  getByteImageMinbytesBobInput() {
    return this.byteImageMinbytesBobInput.getAttribute('value');
  }

  setByteImageMaxbytesBobInput(byteImageMaxbytesBob) {
    this.byteImageMaxbytesBobInput.sendKeys(byteImageMaxbytesBob);
  }

  getByteImageMaxbytesBobInput() {
    return this.byteImageMaxbytesBobInput.getAttribute('value');
  }

  setByteAnyBobInput(byteAnyBob) {
    this.byteAnyBobInput.sendKeys(byteAnyBob);
  }

  getByteAnyBobInput() {
    return this.byteAnyBobInput.getAttribute('value');
  }

  setByteAnyRequiredBobInput(byteAnyRequiredBob) {
    this.byteAnyRequiredBobInput.sendKeys(byteAnyRequiredBob);
  }

  getByteAnyRequiredBobInput() {
    return this.byteAnyRequiredBobInput.getAttribute('value');
  }

  setByteAnyMinbytesBobInput(byteAnyMinbytesBob) {
    this.byteAnyMinbytesBobInput.sendKeys(byteAnyMinbytesBob);
  }

  getByteAnyMinbytesBobInput() {
    return this.byteAnyMinbytesBobInput.getAttribute('value');
  }

  setByteAnyMaxbytesBobInput(byteAnyMaxbytesBob) {
    this.byteAnyMaxbytesBobInput.sendKeys(byteAnyMaxbytesBob);
  }

  getByteAnyMaxbytesBobInput() {
    return this.byteAnyMaxbytesBobInput.getAttribute('value');
  }

  setByteTextBobInput(byteTextBob) {
    this.byteTextBobInput.sendKeys(byteTextBob);
  }

  getByteTextBobInput() {
    return this.byteTextBobInput.getAttribute('value');
  }

  setByteTextRequiredBobInput(byteTextRequiredBob) {
    this.byteTextRequiredBobInput.sendKeys(byteTextRequiredBob);
  }

  getByteTextRequiredBobInput() {
    return this.byteTextRequiredBobInput.getAttribute('value');
  }

  setByteTextMinbytesBobInput(byteTextMinbytesBob) {
    this.byteTextMinbytesBobInput.sendKeys(byteTextMinbytesBob);
  }

  getByteTextMinbytesBobInput() {
    return this.byteTextMinbytesBobInput.getAttribute('value');
  }

  setByteTextMaxbytesBobInput(byteTextMaxbytesBob) {
    this.byteTextMaxbytesBobInput.sendKeys(byteTextMaxbytesBob);
  }

  getByteTextMaxbytesBobInput() {
    return this.byteTextMaxbytesBobInput.getAttribute('value');
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
