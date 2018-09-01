/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestServiceImplEntityComponentsPage from './field-test-service-impl-entity.page-object';
import { FieldTestServiceImplEntityDeleteDialog } from './field-test-service-impl-entity.page-object';
import FieldTestServiceImplEntityUpdatePage from './field-test-service-impl-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestServiceImplEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestServiceImplEntityUpdatePage: FieldTestServiceImplEntityUpdatePage;
  let fieldTestServiceImplEntityComponentsPage: FieldTestServiceImplEntityComponentsPage;
  let fieldTestServiceImplEntityDeleteDialog: FieldTestServiceImplEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestServiceImplEntities', async () => {
    navBarPage.getEntityPage('field-test-service-impl-entity');
    fieldTestServiceImplEntityComponentsPage = new FieldTestServiceImplEntityComponentsPage();
    expect(await fieldTestServiceImplEntityComponentsPage.getTitle().getText()).to.match(/Field Test Service Impl Entities/);
  });

  it('should load create FieldTestServiceImplEntity page', async () => {
    fieldTestServiceImplEntityComponentsPage.clickOnCreateButton();
    fieldTestServiceImplEntityUpdatePage = new FieldTestServiceImplEntityUpdatePage();
    expect(await fieldTestServiceImplEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestServiceImplEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestServiceImplEntities', async () => {
    fieldTestServiceImplEntityUpdatePage.setStringMikaInput('stringMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getStringMikaInput()).to.match(/stringMika/);
    fieldTestServiceImplEntityUpdatePage.setStringRequiredMikaInput('stringRequiredMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getStringRequiredMikaInput()).to.match(/stringRequiredMika/);
    fieldTestServiceImplEntityUpdatePage.setStringMinlengthMikaInput('stringMinlengthMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getStringMinlengthMikaInput()).to.match(/stringMinlengthMika/);
    fieldTestServiceImplEntityUpdatePage.setStringMaxlengthMikaInput('stringMaxlengthMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getStringMaxlengthMikaInput()).to.match(/stringMaxlengthMika/);
    fieldTestServiceImplEntityUpdatePage.setStringPatternMikaInput('stringPatternMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getStringPatternMikaInput()).to.match(/stringPatternMika/);
    fieldTestServiceImplEntityUpdatePage.setIntegerMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setIntegerRequiredMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getIntegerRequiredMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setIntegerMinMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMinMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setIntegerMaxMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMaxMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setLongMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getLongMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setLongRequiredMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getLongRequiredMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setLongMinMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getLongMinMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setLongMaxMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getLongMaxMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setFloatMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getFloatMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setFloatRequiredMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getFloatRequiredMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setFloatMinMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getFloatMinMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setFloatMaxMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getFloatMaxMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setDoubleRequiredMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getDoubleRequiredMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setDoubleMinMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getDoubleMinMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setDoubleMaxMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getDoubleMaxMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setBigDecimalRequiredMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalRequiredMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setBigDecimalMinMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalMinMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setBigDecimalMaxMikaInput('5');
    expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalMaxMikaInput()).to.eq('5');
    fieldTestServiceImplEntityUpdatePage.setLocalDateMikaInput('01-01-2001');
    expect(await fieldTestServiceImplEntityUpdatePage.getLocalDateMikaInput()).to.eq('2001-01-01');
    fieldTestServiceImplEntityUpdatePage.setLocalDateRequiredMikaInput('01-01-2001');
    expect(await fieldTestServiceImplEntityUpdatePage.getLocalDateRequiredMikaInput()).to.eq('2001-01-01');
    fieldTestServiceImplEntityUpdatePage.setInstantMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceImplEntityUpdatePage.getInstantMikaInput()).to.contain('2001-01-01T02:30');
    fieldTestServiceImplEntityUpdatePage.setInstanteRequiredMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceImplEntityUpdatePage.getInstanteRequiredMikaInput()).to.contain('2001-01-01T02:30');
    fieldTestServiceImplEntityUpdatePage.setZonedDateTimeMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceImplEntityUpdatePage.getZonedDateTimeMikaInput()).to.contain('2001-01-01T02:30');
    fieldTestServiceImplEntityUpdatePage.setZonedDateTimeRequiredMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceImplEntityUpdatePage.getZonedDateTimeRequiredMikaInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanMika = await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected();
    if (selectedBooleanMika) {
      fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().click();
      expect(await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected()).to.be.false;
    } else {
      fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().click();
      expect(await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredMika = await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected();
    if (selectedBooleanRequiredMika) {
      fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().click();
      expect(await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected()).to.be.false;
    } else {
      fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().click();
      expect(await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected()).to.be.true;
    }
    fieldTestServiceImplEntityUpdatePage.enumMikaSelectLastOption();
    fieldTestServiceImplEntityUpdatePage.enumRequiredMikaSelectLastOption();
    fieldTestServiceImplEntityUpdatePage.setByteImageMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteImageRequiredMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteImageMinbytesMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteImageMaxbytesMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteAnyMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteAnyRequiredMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteAnyMinbytesMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteAnyMaxbytesMikaInput(absolutePath);
    fieldTestServiceImplEntityUpdatePage.setByteTextMikaInput('byteTextMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMikaInput()).to.match(/byteTextMika/);
    fieldTestServiceImplEntityUpdatePage.setByteTextRequiredMikaInput('byteTextRequiredMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getByteTextRequiredMikaInput()).to.match(/byteTextRequiredMika/);
    fieldTestServiceImplEntityUpdatePage.setByteTextMinbytesMikaInput('byteTextMinbytesMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMinbytesMikaInput()).to.match(/byteTextMinbytesMika/);
    fieldTestServiceImplEntityUpdatePage.setByteTextMaxbytesMikaInput('byteTextMaxbytesMika');
    expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMaxbytesMikaInput()).to.match(/byteTextMaxbytesMika/);
    await fieldTestServiceImplEntityUpdatePage.save();
    expect(await fieldTestServiceImplEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestServiceImplEntity', async () => {
    fieldTestServiceImplEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestServiceImplEntityComponentsPage.countDeleteButtons();
    await fieldTestServiceImplEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestServiceImplEntityDeleteDialog = new FieldTestServiceImplEntityDeleteDialog();
    expect(await fieldTestServiceImplEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestServiceImplEntity.delete.question/
    );
    await fieldTestServiceImplEntityDeleteDialog.clickOnConfirmButton();

    fieldTestServiceImplEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestServiceImplEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
