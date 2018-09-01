/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestMapstructEntityComponentsPage from './field-test-mapstruct-entity.page-object';
import { FieldTestMapstructEntityDeleteDialog } from './field-test-mapstruct-entity.page-object';
import FieldTestMapstructEntityUpdatePage from './field-test-mapstruct-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestMapstructEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestMapstructEntityUpdatePage: FieldTestMapstructEntityUpdatePage;
  let fieldTestMapstructEntityComponentsPage: FieldTestMapstructEntityComponentsPage;
  let fieldTestMapstructEntityDeleteDialog: FieldTestMapstructEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestMapstructEntities', async () => {
    navBarPage.getEntityPage('field-test-mapstruct-entity');
    fieldTestMapstructEntityComponentsPage = new FieldTestMapstructEntityComponentsPage();
    expect(await fieldTestMapstructEntityComponentsPage.getTitle().getText()).to.match(/Field Test Mapstruct Entities/);
  });

  it('should load create FieldTestMapstructEntity page', async () => {
    fieldTestMapstructEntityComponentsPage.clickOnCreateButton();
    fieldTestMapstructEntityUpdatePage = new FieldTestMapstructEntityUpdatePage();
    expect(await fieldTestMapstructEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestMapstructEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestMapstructEntities', async () => {
    fieldTestMapstructEntityUpdatePage.setStringEvaInput('stringEva');
    expect(await fieldTestMapstructEntityUpdatePage.getStringEvaInput()).to.match(/stringEva/);
    fieldTestMapstructEntityUpdatePage.setStringRequiredEvaInput('stringRequiredEva');
    expect(await fieldTestMapstructEntityUpdatePage.getStringRequiredEvaInput()).to.match(/stringRequiredEva/);
    fieldTestMapstructEntityUpdatePage.setStringMinlengthEvaInput('stringMinlengthEva');
    expect(await fieldTestMapstructEntityUpdatePage.getStringMinlengthEvaInput()).to.match(/stringMinlengthEva/);
    fieldTestMapstructEntityUpdatePage.setStringMaxlengthEvaInput('stringMaxlengthEva');
    expect(await fieldTestMapstructEntityUpdatePage.getStringMaxlengthEvaInput()).to.match(/stringMaxlengthEva/);
    fieldTestMapstructEntityUpdatePage.setStringPatternEvaInput('stringPatternEva');
    expect(await fieldTestMapstructEntityUpdatePage.getStringPatternEvaInput()).to.match(/stringPatternEva/);
    fieldTestMapstructEntityUpdatePage.setIntegerEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getIntegerEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setIntegerRequiredEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getIntegerRequiredEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setIntegerMinEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getIntegerMinEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setIntegerMaxEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getIntegerMaxEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setLongEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getLongEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setLongRequiredEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getLongRequiredEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setLongMinEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getLongMinEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setLongMaxEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getLongMaxEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setFloatEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getFloatEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setFloatRequiredEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getFloatRequiredEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setFloatMinEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getFloatMinEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setFloatMaxEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getFloatMaxEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setDoubleRequiredEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getDoubleRequiredEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setDoubleMinEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getDoubleMinEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setDoubleMaxEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getDoubleMaxEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setBigDecimalRequiredEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalRequiredEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setBigDecimalMinEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalMinEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setBigDecimalMaxEvaInput('5');
    expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalMaxEvaInput()).to.eq('5');
    fieldTestMapstructEntityUpdatePage.setLocalDateEvaInput('01-01-2001');
    expect(await fieldTestMapstructEntityUpdatePage.getLocalDateEvaInput()).to.eq('2001-01-01');
    fieldTestMapstructEntityUpdatePage.setLocalDateRequiredEvaInput('01-01-2001');
    expect(await fieldTestMapstructEntityUpdatePage.getLocalDateRequiredEvaInput()).to.eq('2001-01-01');
    fieldTestMapstructEntityUpdatePage.setInstantEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestMapstructEntityUpdatePage.getInstantEvaInput()).to.contain('2001-01-01T02:30');
    fieldTestMapstructEntityUpdatePage.setInstanteRequiredEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestMapstructEntityUpdatePage.getInstanteRequiredEvaInput()).to.contain('2001-01-01T02:30');
    fieldTestMapstructEntityUpdatePage.setZonedDateTimeEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestMapstructEntityUpdatePage.getZonedDateTimeEvaInput()).to.contain('2001-01-01T02:30');
    fieldTestMapstructEntityUpdatePage.setZonedDateTimeRequiredEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestMapstructEntityUpdatePage.getZonedDateTimeRequiredEvaInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanEva = await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected();
    if (selectedBooleanEva) {
      fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().click();
      expect(await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected()).to.be.false;
    } else {
      fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().click();
      expect(await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredEva = await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected();
    if (selectedBooleanRequiredEva) {
      fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().click();
      expect(await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected()).to.be.false;
    } else {
      fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().click();
      expect(await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected()).to.be.true;
    }
    fieldTestMapstructEntityUpdatePage.enumEvaSelectLastOption();
    fieldTestMapstructEntityUpdatePage.enumRequiredEvaSelectLastOption();
    fieldTestMapstructEntityUpdatePage.setByteImageEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteImageRequiredEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteImageMinbytesEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteImageMaxbytesEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteAnyEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteAnyRequiredEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteAnyMinbytesEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteAnyMaxbytesEvaInput(absolutePath);
    fieldTestMapstructEntityUpdatePage.setByteTextEvaInput('byteTextEva');
    expect(await fieldTestMapstructEntityUpdatePage.getByteTextEvaInput()).to.match(/byteTextEva/);
    fieldTestMapstructEntityUpdatePage.setByteTextRequiredEvaInput('byteTextRequiredEva');
    expect(await fieldTestMapstructEntityUpdatePage.getByteTextRequiredEvaInput()).to.match(/byteTextRequiredEva/);
    fieldTestMapstructEntityUpdatePage.setByteTextMinbytesEvaInput('byteTextMinbytesEva');
    expect(await fieldTestMapstructEntityUpdatePage.getByteTextMinbytesEvaInput()).to.match(/byteTextMinbytesEva/);
    fieldTestMapstructEntityUpdatePage.setByteTextMaxbytesEvaInput('byteTextMaxbytesEva');
    expect(await fieldTestMapstructEntityUpdatePage.getByteTextMaxbytesEvaInput()).to.match(/byteTextMaxbytesEva/);
    await fieldTestMapstructEntityUpdatePage.save();
    expect(await fieldTestMapstructEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestMapstructEntity', async () => {
    fieldTestMapstructEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestMapstructEntityComponentsPage.countDeleteButtons();
    await fieldTestMapstructEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestMapstructEntityDeleteDialog = new FieldTestMapstructEntityDeleteDialog();
    expect(await fieldTestMapstructEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestMapstructEntity.delete.question/
    );
    await fieldTestMapstructEntityDeleteDialog.clickOnConfirmButton();

    fieldTestMapstructEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestMapstructEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
