import { element, by, ElementFinder } from 'protractor';

export default class FieldTestPagerEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestPagerEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringJade'));
  stringRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringRequiredJade'));
  stringMinlengthJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringMinlengthJade'));
  stringMaxlengthJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringMaxlengthJade'));
  stringPatternJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-stringPatternJade'));
  integerJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerJade'));
  integerRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerRequiredJade'));
  integerMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerMinJade'));
  integerMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-integerMaxJade'));
  longJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longJade'));
  longRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longRequiredJade'));
  longMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longMinJade'));
  longMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-longMaxJade'));
  floatJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatJade'));
  floatRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatRequiredJade'));
  floatMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatMinJade'));
  floatMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-floatMaxJade'));
  doubleRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleRequiredJade'));
  doubleMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleMinJade'));
  doubleMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-doubleMaxJade'));
  bigDecimalRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalRequiredJade'));
  bigDecimalMinJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalMinJade'));
  bigDecimalMaxJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-bigDecimalMaxJade'));
  localDateJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-localDateJade'));
  localDateRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-localDateRequiredJade'));
  instantJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-instantJade'));
  instanteRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-instanteRequiredJade'));
  zonedDateTimeJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-zonedDateTimeJade'));
  zonedDateTimeRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-zonedDateTimeRequiredJade'));
  booleanJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-booleanJade'));
  booleanRequiredJadeInput: ElementFinder = element(by.css('input#field-test-pager-entity-booleanRequiredJade'));
  enumJadeSelect: ElementFinder = element(by.css('select#field-test-pager-entity-enumJade'));
  enumRequiredJadeSelect: ElementFinder = element(by.css('select#field-test-pager-entity-enumRequiredJade'));
  byteImageJadeInput: ElementFinder = element(by.css('input#file_byteImageJade'));
  byteImageRequiredJadeInput: ElementFinder = element(by.css('input#file_byteImageRequiredJade'));
  byteImageMinbytesJadeInput: ElementFinder = element(by.css('input#file_byteImageMinbytesJade'));
  byteImageMaxbytesJadeInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesJade'));
  byteAnyJadeInput: ElementFinder = element(by.css('input#file_byteAnyJade'));
  byteAnyRequiredJadeInput: ElementFinder = element(by.css('input#file_byteAnyRequiredJade'));
  byteAnyMinbytesJadeInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesJade'));
  byteAnyMaxbytesJadeInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesJade'));
  byteTextJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextJade'));
  byteTextRequiredJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextRequiredJade'));
  byteTextMinbytesJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextMinbytesJade'));
  byteTextMaxbytesJadeInput: ElementFinder = element(by.css('textarea#field-test-pager-entity-byteTextMaxbytesJade'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringJadeInput(stringJade) {
    this.stringJadeInput.sendKeys(stringJade);
  }

  getStringJadeInput() {
    return this.stringJadeInput.getAttribute('value');
  }

  setStringRequiredJadeInput(stringRequiredJade) {
    this.stringRequiredJadeInput.sendKeys(stringRequiredJade);
  }

  getStringRequiredJadeInput() {
    return this.stringRequiredJadeInput.getAttribute('value');
  }

  setStringMinlengthJadeInput(stringMinlengthJade) {
    this.stringMinlengthJadeInput.sendKeys(stringMinlengthJade);
  }

  getStringMinlengthJadeInput() {
    return this.stringMinlengthJadeInput.getAttribute('value');
  }

  setStringMaxlengthJadeInput(stringMaxlengthJade) {
    this.stringMaxlengthJadeInput.sendKeys(stringMaxlengthJade);
  }

  getStringMaxlengthJadeInput() {
    return this.stringMaxlengthJadeInput.getAttribute('value');
  }

  setStringPatternJadeInput(stringPatternJade) {
    this.stringPatternJadeInput.sendKeys(stringPatternJade);
  }

  getStringPatternJadeInput() {
    return this.stringPatternJadeInput.getAttribute('value');
  }

  setIntegerJadeInput(integerJade) {
    this.integerJadeInput.sendKeys(integerJade);
  }

  getIntegerJadeInput() {
    return this.integerJadeInput.getAttribute('value');
  }

  setIntegerRequiredJadeInput(integerRequiredJade) {
    this.integerRequiredJadeInput.sendKeys(integerRequiredJade);
  }

  getIntegerRequiredJadeInput() {
    return this.integerRequiredJadeInput.getAttribute('value');
  }

  setIntegerMinJadeInput(integerMinJade) {
    this.integerMinJadeInput.sendKeys(integerMinJade);
  }

  getIntegerMinJadeInput() {
    return this.integerMinJadeInput.getAttribute('value');
  }

  setIntegerMaxJadeInput(integerMaxJade) {
    this.integerMaxJadeInput.sendKeys(integerMaxJade);
  }

  getIntegerMaxJadeInput() {
    return this.integerMaxJadeInput.getAttribute('value');
  }

  setLongJadeInput(longJade) {
    this.longJadeInput.sendKeys(longJade);
  }

  getLongJadeInput() {
    return this.longJadeInput.getAttribute('value');
  }

  setLongRequiredJadeInput(longRequiredJade) {
    this.longRequiredJadeInput.sendKeys(longRequiredJade);
  }

  getLongRequiredJadeInput() {
    return this.longRequiredJadeInput.getAttribute('value');
  }

  setLongMinJadeInput(longMinJade) {
    this.longMinJadeInput.sendKeys(longMinJade);
  }

  getLongMinJadeInput() {
    return this.longMinJadeInput.getAttribute('value');
  }

  setLongMaxJadeInput(longMaxJade) {
    this.longMaxJadeInput.sendKeys(longMaxJade);
  }

  getLongMaxJadeInput() {
    return this.longMaxJadeInput.getAttribute('value');
  }

  setFloatJadeInput(floatJade) {
    this.floatJadeInput.sendKeys(floatJade);
  }

  getFloatJadeInput() {
    return this.floatJadeInput.getAttribute('value');
  }

  setFloatRequiredJadeInput(floatRequiredJade) {
    this.floatRequiredJadeInput.sendKeys(floatRequiredJade);
  }

  getFloatRequiredJadeInput() {
    return this.floatRequiredJadeInput.getAttribute('value');
  }

  setFloatMinJadeInput(floatMinJade) {
    this.floatMinJadeInput.sendKeys(floatMinJade);
  }

  getFloatMinJadeInput() {
    return this.floatMinJadeInput.getAttribute('value');
  }

  setFloatMaxJadeInput(floatMaxJade) {
    this.floatMaxJadeInput.sendKeys(floatMaxJade);
  }

  getFloatMaxJadeInput() {
    return this.floatMaxJadeInput.getAttribute('value');
  }

  setDoubleRequiredJadeInput(doubleRequiredJade) {
    this.doubleRequiredJadeInput.sendKeys(doubleRequiredJade);
  }

  getDoubleRequiredJadeInput() {
    return this.doubleRequiredJadeInput.getAttribute('value');
  }

  setDoubleMinJadeInput(doubleMinJade) {
    this.doubleMinJadeInput.sendKeys(doubleMinJade);
  }

  getDoubleMinJadeInput() {
    return this.doubleMinJadeInput.getAttribute('value');
  }

  setDoubleMaxJadeInput(doubleMaxJade) {
    this.doubleMaxJadeInput.sendKeys(doubleMaxJade);
  }

  getDoubleMaxJadeInput() {
    return this.doubleMaxJadeInput.getAttribute('value');
  }

  setBigDecimalRequiredJadeInput(bigDecimalRequiredJade) {
    this.bigDecimalRequiredJadeInput.sendKeys(bigDecimalRequiredJade);
  }

  getBigDecimalRequiredJadeInput() {
    return this.bigDecimalRequiredJadeInput.getAttribute('value');
  }

  setBigDecimalMinJadeInput(bigDecimalMinJade) {
    this.bigDecimalMinJadeInput.sendKeys(bigDecimalMinJade);
  }

  getBigDecimalMinJadeInput() {
    return this.bigDecimalMinJadeInput.getAttribute('value');
  }

  setBigDecimalMaxJadeInput(bigDecimalMaxJade) {
    this.bigDecimalMaxJadeInput.sendKeys(bigDecimalMaxJade);
  }

  getBigDecimalMaxJadeInput() {
    return this.bigDecimalMaxJadeInput.getAttribute('value');
  }

  setLocalDateJadeInput(localDateJade) {
    this.localDateJadeInput.sendKeys(localDateJade);
  }

  getLocalDateJadeInput() {
    return this.localDateJadeInput.getAttribute('value');
  }

  setLocalDateRequiredJadeInput(localDateRequiredJade) {
    this.localDateRequiredJadeInput.sendKeys(localDateRequiredJade);
  }

  getLocalDateRequiredJadeInput() {
    return this.localDateRequiredJadeInput.getAttribute('value');
  }

  setInstantJadeInput(instantJade) {
    this.instantJadeInput.sendKeys(instantJade);
  }

  getInstantJadeInput() {
    return this.instantJadeInput.getAttribute('value');
  }

  setInstanteRequiredJadeInput(instanteRequiredJade) {
    this.instanteRequiredJadeInput.sendKeys(instanteRequiredJade);
  }

  getInstanteRequiredJadeInput() {
    return this.instanteRequiredJadeInput.getAttribute('value');
  }

  setZonedDateTimeJadeInput(zonedDateTimeJade) {
    this.zonedDateTimeJadeInput.sendKeys(zonedDateTimeJade);
  }

  getZonedDateTimeJadeInput() {
    return this.zonedDateTimeJadeInput.getAttribute('value');
  }

  setZonedDateTimeRequiredJadeInput(zonedDateTimeRequiredJade) {
    this.zonedDateTimeRequiredJadeInput.sendKeys(zonedDateTimeRequiredJade);
  }

  getZonedDateTimeRequiredJadeInput() {
    return this.zonedDateTimeRequiredJadeInput.getAttribute('value');
  }

  getBooleanJadeInput() {
    return this.booleanJadeInput;
  }
  getBooleanRequiredJadeInput() {
    return this.booleanRequiredJadeInput;
  }
  setEnumJadeSelect(enumJade) {
    this.enumJadeSelect.sendKeys(enumJade);
  }

  getEnumJadeSelect() {
    return this.enumJadeSelect.element(by.css('option:checked')).getText();
  }

  enumJadeSelectLastOption() {
    this.enumJadeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredJadeSelect(enumRequiredJade) {
    this.enumRequiredJadeSelect.sendKeys(enumRequiredJade);
  }

  getEnumRequiredJadeSelect() {
    return this.enumRequiredJadeSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredJadeSelectLastOption() {
    this.enumRequiredJadeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageJadeInput(byteImageJade) {
    this.byteImageJadeInput.sendKeys(byteImageJade);
  }

  getByteImageJadeInput() {
    return this.byteImageJadeInput.getAttribute('value');
  }

  setByteImageRequiredJadeInput(byteImageRequiredJade) {
    this.byteImageRequiredJadeInput.sendKeys(byteImageRequiredJade);
  }

  getByteImageRequiredJadeInput() {
    return this.byteImageRequiredJadeInput.getAttribute('value');
  }

  setByteImageMinbytesJadeInput(byteImageMinbytesJade) {
    this.byteImageMinbytesJadeInput.sendKeys(byteImageMinbytesJade);
  }

  getByteImageMinbytesJadeInput() {
    return this.byteImageMinbytesJadeInput.getAttribute('value');
  }

  setByteImageMaxbytesJadeInput(byteImageMaxbytesJade) {
    this.byteImageMaxbytesJadeInput.sendKeys(byteImageMaxbytesJade);
  }

  getByteImageMaxbytesJadeInput() {
    return this.byteImageMaxbytesJadeInput.getAttribute('value');
  }

  setByteAnyJadeInput(byteAnyJade) {
    this.byteAnyJadeInput.sendKeys(byteAnyJade);
  }

  getByteAnyJadeInput() {
    return this.byteAnyJadeInput.getAttribute('value');
  }

  setByteAnyRequiredJadeInput(byteAnyRequiredJade) {
    this.byteAnyRequiredJadeInput.sendKeys(byteAnyRequiredJade);
  }

  getByteAnyRequiredJadeInput() {
    return this.byteAnyRequiredJadeInput.getAttribute('value');
  }

  setByteAnyMinbytesJadeInput(byteAnyMinbytesJade) {
    this.byteAnyMinbytesJadeInput.sendKeys(byteAnyMinbytesJade);
  }

  getByteAnyMinbytesJadeInput() {
    return this.byteAnyMinbytesJadeInput.getAttribute('value');
  }

  setByteAnyMaxbytesJadeInput(byteAnyMaxbytesJade) {
    this.byteAnyMaxbytesJadeInput.sendKeys(byteAnyMaxbytesJade);
  }

  getByteAnyMaxbytesJadeInput() {
    return this.byteAnyMaxbytesJadeInput.getAttribute('value');
  }

  setByteTextJadeInput(byteTextJade) {
    this.byteTextJadeInput.sendKeys(byteTextJade);
  }

  getByteTextJadeInput() {
    return this.byteTextJadeInput.getAttribute('value');
  }

  setByteTextRequiredJadeInput(byteTextRequiredJade) {
    this.byteTextRequiredJadeInput.sendKeys(byteTextRequiredJade);
  }

  getByteTextRequiredJadeInput() {
    return this.byteTextRequiredJadeInput.getAttribute('value');
  }

  setByteTextMinbytesJadeInput(byteTextMinbytesJade) {
    this.byteTextMinbytesJadeInput.sendKeys(byteTextMinbytesJade);
  }

  getByteTextMinbytesJadeInput() {
    return this.byteTextMinbytesJadeInput.getAttribute('value');
  }

  setByteTextMaxbytesJadeInput(byteTextMaxbytesJade) {
    this.byteTextMaxbytesJadeInput.sendKeys(byteTextMaxbytesJade);
  }

  getByteTextMaxbytesJadeInput() {
    return this.byteTextMaxbytesJadeInput.getAttribute('value');
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
