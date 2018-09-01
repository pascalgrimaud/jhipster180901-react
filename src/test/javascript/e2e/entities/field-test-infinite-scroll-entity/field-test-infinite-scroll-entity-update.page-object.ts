import { element, by, ElementFinder } from 'protractor';

export default class FieldTestInfiniteScrollEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.fieldTestInfiniteScrollEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringHugo'));
  stringRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringRequiredHugo'));
  stringMinlengthHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringMinlengthHugo'));
  stringMaxlengthHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringMaxlengthHugo'));
  stringPatternHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringPatternHugo'));
  integerHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerHugo'));
  integerRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerRequiredHugo'));
  integerMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerMinHugo'));
  integerMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerMaxHugo'));
  longHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longHugo'));
  longRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longRequiredHugo'));
  longMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longMinHugo'));
  longMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longMaxHugo'));
  floatHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatHugo'));
  floatRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatRequiredHugo'));
  floatMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatMinHugo'));
  floatMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatMaxHugo'));
  doubleRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleRequiredHugo'));
  doubleMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleMinHugo'));
  doubleMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleMaxHugo'));
  bigDecimalRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalRequiredHugo'));
  bigDecimalMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalMinHugo'));
  bigDecimalMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalMaxHugo'));
  localDateHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-localDateHugo'));
  localDateRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-localDateRequiredHugo'));
  instantHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-instantHugo'));
  instanteRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-instanteRequiredHugo'));
  zonedDateTimeHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-zonedDateTimeHugo'));
  zonedDateTimeRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo'));
  booleanHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-booleanHugo'));
  booleanRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-booleanRequiredHugo'));
  enumHugoSelect: ElementFinder = element(by.css('select#field-test-infinite-scroll-entity-enumHugo'));
  enumRequiredHugoSelect: ElementFinder = element(by.css('select#field-test-infinite-scroll-entity-enumRequiredHugo'));
  byteImageHugoInput: ElementFinder = element(by.css('input#file_byteImageHugo'));
  byteImageRequiredHugoInput: ElementFinder = element(by.css('input#file_byteImageRequiredHugo'));
  byteImageMinbytesHugoInput: ElementFinder = element(by.css('input#file_byteImageMinbytesHugo'));
  byteImageMaxbytesHugoInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesHugo'));
  byteAnyHugoInput: ElementFinder = element(by.css('input#file_byteAnyHugo'));
  byteAnyRequiredHugoInput: ElementFinder = element(by.css('input#file_byteAnyRequiredHugo'));
  byteAnyMinbytesHugoInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesHugo'));
  byteAnyMaxbytesHugoInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesHugo'));
  byteTextHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextHugo'));
  byteTextRequiredHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextRequiredHugo'));
  byteTextMinbytesHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextMinbytesHugo'));
  byteTextMaxbytesHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextMaxbytesHugo'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStringHugoInput(stringHugo) {
    this.stringHugoInput.sendKeys(stringHugo);
  }

  getStringHugoInput() {
    return this.stringHugoInput.getAttribute('value');
  }

  setStringRequiredHugoInput(stringRequiredHugo) {
    this.stringRequiredHugoInput.sendKeys(stringRequiredHugo);
  }

  getStringRequiredHugoInput() {
    return this.stringRequiredHugoInput.getAttribute('value');
  }

  setStringMinlengthHugoInput(stringMinlengthHugo) {
    this.stringMinlengthHugoInput.sendKeys(stringMinlengthHugo);
  }

  getStringMinlengthHugoInput() {
    return this.stringMinlengthHugoInput.getAttribute('value');
  }

  setStringMaxlengthHugoInput(stringMaxlengthHugo) {
    this.stringMaxlengthHugoInput.sendKeys(stringMaxlengthHugo);
  }

  getStringMaxlengthHugoInput() {
    return this.stringMaxlengthHugoInput.getAttribute('value');
  }

  setStringPatternHugoInput(stringPatternHugo) {
    this.stringPatternHugoInput.sendKeys(stringPatternHugo);
  }

  getStringPatternHugoInput() {
    return this.stringPatternHugoInput.getAttribute('value');
  }

  setIntegerHugoInput(integerHugo) {
    this.integerHugoInput.sendKeys(integerHugo);
  }

  getIntegerHugoInput() {
    return this.integerHugoInput.getAttribute('value');
  }

  setIntegerRequiredHugoInput(integerRequiredHugo) {
    this.integerRequiredHugoInput.sendKeys(integerRequiredHugo);
  }

  getIntegerRequiredHugoInput() {
    return this.integerRequiredHugoInput.getAttribute('value');
  }

  setIntegerMinHugoInput(integerMinHugo) {
    this.integerMinHugoInput.sendKeys(integerMinHugo);
  }

  getIntegerMinHugoInput() {
    return this.integerMinHugoInput.getAttribute('value');
  }

  setIntegerMaxHugoInput(integerMaxHugo) {
    this.integerMaxHugoInput.sendKeys(integerMaxHugo);
  }

  getIntegerMaxHugoInput() {
    return this.integerMaxHugoInput.getAttribute('value');
  }

  setLongHugoInput(longHugo) {
    this.longHugoInput.sendKeys(longHugo);
  }

  getLongHugoInput() {
    return this.longHugoInput.getAttribute('value');
  }

  setLongRequiredHugoInput(longRequiredHugo) {
    this.longRequiredHugoInput.sendKeys(longRequiredHugo);
  }

  getLongRequiredHugoInput() {
    return this.longRequiredHugoInput.getAttribute('value');
  }

  setLongMinHugoInput(longMinHugo) {
    this.longMinHugoInput.sendKeys(longMinHugo);
  }

  getLongMinHugoInput() {
    return this.longMinHugoInput.getAttribute('value');
  }

  setLongMaxHugoInput(longMaxHugo) {
    this.longMaxHugoInput.sendKeys(longMaxHugo);
  }

  getLongMaxHugoInput() {
    return this.longMaxHugoInput.getAttribute('value');
  }

  setFloatHugoInput(floatHugo) {
    this.floatHugoInput.sendKeys(floatHugo);
  }

  getFloatHugoInput() {
    return this.floatHugoInput.getAttribute('value');
  }

  setFloatRequiredHugoInput(floatRequiredHugo) {
    this.floatRequiredHugoInput.sendKeys(floatRequiredHugo);
  }

  getFloatRequiredHugoInput() {
    return this.floatRequiredHugoInput.getAttribute('value');
  }

  setFloatMinHugoInput(floatMinHugo) {
    this.floatMinHugoInput.sendKeys(floatMinHugo);
  }

  getFloatMinHugoInput() {
    return this.floatMinHugoInput.getAttribute('value');
  }

  setFloatMaxHugoInput(floatMaxHugo) {
    this.floatMaxHugoInput.sendKeys(floatMaxHugo);
  }

  getFloatMaxHugoInput() {
    return this.floatMaxHugoInput.getAttribute('value');
  }

  setDoubleRequiredHugoInput(doubleRequiredHugo) {
    this.doubleRequiredHugoInput.sendKeys(doubleRequiredHugo);
  }

  getDoubleRequiredHugoInput() {
    return this.doubleRequiredHugoInput.getAttribute('value');
  }

  setDoubleMinHugoInput(doubleMinHugo) {
    this.doubleMinHugoInput.sendKeys(doubleMinHugo);
  }

  getDoubleMinHugoInput() {
    return this.doubleMinHugoInput.getAttribute('value');
  }

  setDoubleMaxHugoInput(doubleMaxHugo) {
    this.doubleMaxHugoInput.sendKeys(doubleMaxHugo);
  }

  getDoubleMaxHugoInput() {
    return this.doubleMaxHugoInput.getAttribute('value');
  }

  setBigDecimalRequiredHugoInput(bigDecimalRequiredHugo) {
    this.bigDecimalRequiredHugoInput.sendKeys(bigDecimalRequiredHugo);
  }

  getBigDecimalRequiredHugoInput() {
    return this.bigDecimalRequiredHugoInput.getAttribute('value');
  }

  setBigDecimalMinHugoInput(bigDecimalMinHugo) {
    this.bigDecimalMinHugoInput.sendKeys(bigDecimalMinHugo);
  }

  getBigDecimalMinHugoInput() {
    return this.bigDecimalMinHugoInput.getAttribute('value');
  }

  setBigDecimalMaxHugoInput(bigDecimalMaxHugo) {
    this.bigDecimalMaxHugoInput.sendKeys(bigDecimalMaxHugo);
  }

  getBigDecimalMaxHugoInput() {
    return this.bigDecimalMaxHugoInput.getAttribute('value');
  }

  setLocalDateHugoInput(localDateHugo) {
    this.localDateHugoInput.sendKeys(localDateHugo);
  }

  getLocalDateHugoInput() {
    return this.localDateHugoInput.getAttribute('value');
  }

  setLocalDateRequiredHugoInput(localDateRequiredHugo) {
    this.localDateRequiredHugoInput.sendKeys(localDateRequiredHugo);
  }

  getLocalDateRequiredHugoInput() {
    return this.localDateRequiredHugoInput.getAttribute('value');
  }

  setInstantHugoInput(instantHugo) {
    this.instantHugoInput.sendKeys(instantHugo);
  }

  getInstantHugoInput() {
    return this.instantHugoInput.getAttribute('value');
  }

  setInstanteRequiredHugoInput(instanteRequiredHugo) {
    this.instanteRequiredHugoInput.sendKeys(instanteRequiredHugo);
  }

  getInstanteRequiredHugoInput() {
    return this.instanteRequiredHugoInput.getAttribute('value');
  }

  setZonedDateTimeHugoInput(zonedDateTimeHugo) {
    this.zonedDateTimeHugoInput.sendKeys(zonedDateTimeHugo);
  }

  getZonedDateTimeHugoInput() {
    return this.zonedDateTimeHugoInput.getAttribute('value');
  }

  setZonedDateTimeRequiredHugoInput(zonedDateTimeRequiredHugo) {
    this.zonedDateTimeRequiredHugoInput.sendKeys(zonedDateTimeRequiredHugo);
  }

  getZonedDateTimeRequiredHugoInput() {
    return this.zonedDateTimeRequiredHugoInput.getAttribute('value');
  }

  getBooleanHugoInput() {
    return this.booleanHugoInput;
  }
  getBooleanRequiredHugoInput() {
    return this.booleanRequiredHugoInput;
  }
  setEnumHugoSelect(enumHugo) {
    this.enumHugoSelect.sendKeys(enumHugo);
  }

  getEnumHugoSelect() {
    return this.enumHugoSelect.element(by.css('option:checked')).getText();
  }

  enumHugoSelectLastOption() {
    this.enumHugoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setEnumRequiredHugoSelect(enumRequiredHugo) {
    this.enumRequiredHugoSelect.sendKeys(enumRequiredHugo);
  }

  getEnumRequiredHugoSelect() {
    return this.enumRequiredHugoSelect.element(by.css('option:checked')).getText();
  }

  enumRequiredHugoSelectLastOption() {
    this.enumRequiredHugoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setByteImageHugoInput(byteImageHugo) {
    this.byteImageHugoInput.sendKeys(byteImageHugo);
  }

  getByteImageHugoInput() {
    return this.byteImageHugoInput.getAttribute('value');
  }

  setByteImageRequiredHugoInput(byteImageRequiredHugo) {
    this.byteImageRequiredHugoInput.sendKeys(byteImageRequiredHugo);
  }

  getByteImageRequiredHugoInput() {
    return this.byteImageRequiredHugoInput.getAttribute('value');
  }

  setByteImageMinbytesHugoInput(byteImageMinbytesHugo) {
    this.byteImageMinbytesHugoInput.sendKeys(byteImageMinbytesHugo);
  }

  getByteImageMinbytesHugoInput() {
    return this.byteImageMinbytesHugoInput.getAttribute('value');
  }

  setByteImageMaxbytesHugoInput(byteImageMaxbytesHugo) {
    this.byteImageMaxbytesHugoInput.sendKeys(byteImageMaxbytesHugo);
  }

  getByteImageMaxbytesHugoInput() {
    return this.byteImageMaxbytesHugoInput.getAttribute('value');
  }

  setByteAnyHugoInput(byteAnyHugo) {
    this.byteAnyHugoInput.sendKeys(byteAnyHugo);
  }

  getByteAnyHugoInput() {
    return this.byteAnyHugoInput.getAttribute('value');
  }

  setByteAnyRequiredHugoInput(byteAnyRequiredHugo) {
    this.byteAnyRequiredHugoInput.sendKeys(byteAnyRequiredHugo);
  }

  getByteAnyRequiredHugoInput() {
    return this.byteAnyRequiredHugoInput.getAttribute('value');
  }

  setByteAnyMinbytesHugoInput(byteAnyMinbytesHugo) {
    this.byteAnyMinbytesHugoInput.sendKeys(byteAnyMinbytesHugo);
  }

  getByteAnyMinbytesHugoInput() {
    return this.byteAnyMinbytesHugoInput.getAttribute('value');
  }

  setByteAnyMaxbytesHugoInput(byteAnyMaxbytesHugo) {
    this.byteAnyMaxbytesHugoInput.sendKeys(byteAnyMaxbytesHugo);
  }

  getByteAnyMaxbytesHugoInput() {
    return this.byteAnyMaxbytesHugoInput.getAttribute('value');
  }

  setByteTextHugoInput(byteTextHugo) {
    this.byteTextHugoInput.sendKeys(byteTextHugo);
  }

  getByteTextHugoInput() {
    return this.byteTextHugoInput.getAttribute('value');
  }

  setByteTextRequiredHugoInput(byteTextRequiredHugo) {
    this.byteTextRequiredHugoInput.sendKeys(byteTextRequiredHugo);
  }

  getByteTextRequiredHugoInput() {
    return this.byteTextRequiredHugoInput.getAttribute('value');
  }

  setByteTextMinbytesHugoInput(byteTextMinbytesHugo) {
    this.byteTextMinbytesHugoInput.sendKeys(byteTextMinbytesHugo);
  }

  getByteTextMinbytesHugoInput() {
    return this.byteTextMinbytesHugoInput.getAttribute('value');
  }

  setByteTextMaxbytesHugoInput(byteTextMaxbytesHugo) {
    this.byteTextMaxbytesHugoInput.sendKeys(byteTextMaxbytesHugo);
  }

  getByteTextMaxbytesHugoInput() {
    return this.byteTextMaxbytesHugoInput.getAttribute('value');
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
