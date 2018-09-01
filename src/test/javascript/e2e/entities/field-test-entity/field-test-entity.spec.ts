/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestEntityComponentsPage from './field-test-entity.page-object';
import { FieldTestEntityDeleteDialog } from './field-test-entity.page-object';
import FieldTestEntityUpdatePage from './field-test-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestEntityUpdatePage: FieldTestEntityUpdatePage;
  let fieldTestEntityComponentsPage: FieldTestEntityComponentsPage;
  let fieldTestEntityDeleteDialog: FieldTestEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestEntities', async () => {
    navBarPage.getEntityPage('field-test-entity');
    fieldTestEntityComponentsPage = new FieldTestEntityComponentsPage();
    expect(await fieldTestEntityComponentsPage.getTitle().getText()).to.match(/Field Test Entities/);
  });

  it('should load create FieldTestEntity page', async () => {
    fieldTestEntityComponentsPage.clickOnCreateButton();
    fieldTestEntityUpdatePage = new FieldTestEntityUpdatePage();
    expect(await fieldTestEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestEntities', async () => {
    fieldTestEntityUpdatePage.setStringTomInput('stringTom');
    expect(await fieldTestEntityUpdatePage.getStringTomInput()).to.match(/stringTom/);
    fieldTestEntityUpdatePage.setStringRequiredTomInput('stringRequiredTom');
    expect(await fieldTestEntityUpdatePage.getStringRequiredTomInput()).to.match(/stringRequiredTom/);
    fieldTestEntityUpdatePage.setStringMinlengthTomInput('stringMinlengthTom');
    expect(await fieldTestEntityUpdatePage.getStringMinlengthTomInput()).to.match(/stringMinlengthTom/);
    fieldTestEntityUpdatePage.setStringMaxlengthTomInput('stringMaxlengthTom');
    expect(await fieldTestEntityUpdatePage.getStringMaxlengthTomInput()).to.match(/stringMaxlengthTom/);
    fieldTestEntityUpdatePage.setStringPatternTomInput('stringPatternTom');
    expect(await fieldTestEntityUpdatePage.getStringPatternTomInput()).to.match(/stringPatternTom/);
    fieldTestEntityUpdatePage.setIntegerTomInput('5');
    expect(await fieldTestEntityUpdatePage.getIntegerTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setIntegerRequiredTomInput('5');
    expect(await fieldTestEntityUpdatePage.getIntegerRequiredTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setIntegerMinTomInput('5');
    expect(await fieldTestEntityUpdatePage.getIntegerMinTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setIntegerMaxTomInput('5');
    expect(await fieldTestEntityUpdatePage.getIntegerMaxTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setLongTomInput('5');
    expect(await fieldTestEntityUpdatePage.getLongTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setLongRequiredTomInput('5');
    expect(await fieldTestEntityUpdatePage.getLongRequiredTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setLongMinTomInput('5');
    expect(await fieldTestEntityUpdatePage.getLongMinTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setLongMaxTomInput('5');
    expect(await fieldTestEntityUpdatePage.getLongMaxTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setFloatTomInput('5');
    expect(await fieldTestEntityUpdatePage.getFloatTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setFloatRequiredTomInput('5');
    expect(await fieldTestEntityUpdatePage.getFloatRequiredTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setFloatMinTomInput('5');
    expect(await fieldTestEntityUpdatePage.getFloatMinTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setFloatMaxTomInput('5');
    expect(await fieldTestEntityUpdatePage.getFloatMaxTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setDoubleRequiredTomInput('5');
    expect(await fieldTestEntityUpdatePage.getDoubleRequiredTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setDoubleMinTomInput('5');
    expect(await fieldTestEntityUpdatePage.getDoubleMinTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setDoubleMaxTomInput('5');
    expect(await fieldTestEntityUpdatePage.getDoubleMaxTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setBigDecimalRequiredTomInput('5');
    expect(await fieldTestEntityUpdatePage.getBigDecimalRequiredTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setBigDecimalMinTomInput('5');
    expect(await fieldTestEntityUpdatePage.getBigDecimalMinTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setBigDecimalMaxTomInput('5');
    expect(await fieldTestEntityUpdatePage.getBigDecimalMaxTomInput()).to.eq('5');
    fieldTestEntityUpdatePage.setLocalDateTomInput('01-01-2001');
    expect(await fieldTestEntityUpdatePage.getLocalDateTomInput()).to.eq('2001-01-01');
    fieldTestEntityUpdatePage.setLocalDateRequiredTomInput('01-01-2001');
    expect(await fieldTestEntityUpdatePage.getLocalDateRequiredTomInput()).to.eq('2001-01-01');
    fieldTestEntityUpdatePage.setInstantTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getInstantTomInput()).to.contain('2001-01-01T02:30');
    fieldTestEntityUpdatePage.setInstantRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getInstantRequiredTomInput()).to.contain('2001-01-01T02:30');
    fieldTestEntityUpdatePage.setZonedDateTimeTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getZonedDateTimeTomInput()).to.contain('2001-01-01T02:30');
    fieldTestEntityUpdatePage.setZonedDateTimeRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getZonedDateTimeRequiredTomInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanTom = await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected();
    if (selectedBooleanTom) {
      fieldTestEntityUpdatePage.getBooleanTomInput().click();
      expect(await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected()).to.be.false;
    } else {
      fieldTestEntityUpdatePage.getBooleanTomInput().click();
      expect(await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredTom = await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected();
    if (selectedBooleanRequiredTom) {
      fieldTestEntityUpdatePage.getBooleanRequiredTomInput().click();
      expect(await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected()).to.be.false;
    } else {
      fieldTestEntityUpdatePage.getBooleanRequiredTomInput().click();
      expect(await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected()).to.be.true;
    }
    fieldTestEntityUpdatePage.enumTomSelectLastOption();
    fieldTestEntityUpdatePage.enumRequiredTomSelectLastOption();
    fieldTestEntityUpdatePage.setByteImageTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteImageRequiredTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteImageMinbytesTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteImageMaxbytesTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteAnyTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteAnyRequiredTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteAnyMinbytesTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteAnyMaxbytesTomInput(absolutePath);
    fieldTestEntityUpdatePage.setByteTextTomInput('byteTextTom');
    expect(await fieldTestEntityUpdatePage.getByteTextTomInput()).to.match(/byteTextTom/);
    fieldTestEntityUpdatePage.setByteTextRequiredTomInput('byteTextRequiredTom');
    expect(await fieldTestEntityUpdatePage.getByteTextRequiredTomInput()).to.match(/byteTextRequiredTom/);
    fieldTestEntityUpdatePage.setByteTextMinbytesTomInput('byteTextMinbytesTom');
    expect(await fieldTestEntityUpdatePage.getByteTextMinbytesTomInput()).to.match(/byteTextMinbytesTom/);
    fieldTestEntityUpdatePage.setByteTextMaxbytesTomInput('byteTextMaxbytesTom');
    expect(await fieldTestEntityUpdatePage.getByteTextMaxbytesTomInput()).to.match(/byteTextMaxbytesTom/);
    await fieldTestEntityUpdatePage.save();
    expect(await fieldTestEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestEntity', async () => {
    fieldTestEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestEntityComponentsPage.countDeleteButtons();
    await fieldTestEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestEntityDeleteDialog = new FieldTestEntityDeleteDialog();
    expect(await fieldTestEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestEntity.delete.question/
    );
    await fieldTestEntityDeleteDialog.clickOnConfirmButton();

    fieldTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
