/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestServiceClassEntityComponentsPage from './field-test-service-class-entity.page-object';
import { FieldTestServiceClassEntityDeleteDialog } from './field-test-service-class-entity.page-object';
import FieldTestServiceClassEntityUpdatePage from './field-test-service-class-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestServiceClassEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestServiceClassEntityUpdatePage: FieldTestServiceClassEntityUpdatePage;
  let fieldTestServiceClassEntityComponentsPage: FieldTestServiceClassEntityComponentsPage;
  let fieldTestServiceClassEntityDeleteDialog: FieldTestServiceClassEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestServiceClassEntities', async () => {
    navBarPage.getEntityPage('field-test-service-class-entity');
    fieldTestServiceClassEntityComponentsPage = new FieldTestServiceClassEntityComponentsPage();
    expect(await fieldTestServiceClassEntityComponentsPage.getTitle().getText()).to.match(/Field Test Service Class Entities/);
  });

  it('should load create FieldTestServiceClassEntity page', async () => {
    fieldTestServiceClassEntityComponentsPage.clickOnCreateButton();
    fieldTestServiceClassEntityUpdatePage = new FieldTestServiceClassEntityUpdatePage();
    expect(await fieldTestServiceClassEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestServiceClassEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestServiceClassEntities', async () => {
    fieldTestServiceClassEntityUpdatePage.setStringBobInput('stringBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getStringBobInput()).to.match(/stringBob/);
    fieldTestServiceClassEntityUpdatePage.setStringRequiredBobInput('stringRequiredBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getStringRequiredBobInput()).to.match(/stringRequiredBob/);
    fieldTestServiceClassEntityUpdatePage.setStringMinlengthBobInput('stringMinlengthBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getStringMinlengthBobInput()).to.match(/stringMinlengthBob/);
    fieldTestServiceClassEntityUpdatePage.setStringMaxlengthBobInput('stringMaxlengthBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getStringMaxlengthBobInput()).to.match(/stringMaxlengthBob/);
    fieldTestServiceClassEntityUpdatePage.setStringPatternBobInput('stringPatternBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getStringPatternBobInput()).to.match(/stringPatternBob/);
    fieldTestServiceClassEntityUpdatePage.setIntegerBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getIntegerBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setIntegerRequiredBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getIntegerRequiredBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setIntegerMinBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getIntegerMinBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setIntegerMaxBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getIntegerMaxBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setLongBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getLongBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setLongRequiredBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getLongRequiredBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setLongMinBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getLongMinBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setLongMaxBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getLongMaxBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setFloatBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getFloatBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setFloatRequiredBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getFloatRequiredBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setFloatMinBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getFloatMinBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setFloatMaxBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getFloatMaxBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setDoubleRequiredBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getDoubleRequiredBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setDoubleMinBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getDoubleMinBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setDoubleMaxBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getDoubleMaxBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setBigDecimalRequiredBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalRequiredBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setBigDecimalMinBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalMinBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setBigDecimalMaxBobInput('5');
    expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalMaxBobInput()).to.eq('5');
    fieldTestServiceClassEntityUpdatePage.setLocalDateBobInput('01-01-2001');
    expect(await fieldTestServiceClassEntityUpdatePage.getLocalDateBobInput()).to.eq('2001-01-01');
    fieldTestServiceClassEntityUpdatePage.setLocalDateRequiredBobInput('01-01-2001');
    expect(await fieldTestServiceClassEntityUpdatePage.getLocalDateRequiredBobInput()).to.eq('2001-01-01');
    fieldTestServiceClassEntityUpdatePage.setInstantBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceClassEntityUpdatePage.getInstantBobInput()).to.contain('2001-01-01T02:30');
    fieldTestServiceClassEntityUpdatePage.setInstanteRequiredBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceClassEntityUpdatePage.getInstanteRequiredBobInput()).to.contain('2001-01-01T02:30');
    fieldTestServiceClassEntityUpdatePage.setZonedDateTimeBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceClassEntityUpdatePage.getZonedDateTimeBobInput()).to.contain('2001-01-01T02:30');
    fieldTestServiceClassEntityUpdatePage.setZonedDateTimeRequiredBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestServiceClassEntityUpdatePage.getZonedDateTimeRequiredBobInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanBob = await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected();
    if (selectedBooleanBob) {
      fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().click();
      expect(await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected()).to.be.false;
    } else {
      fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().click();
      expect(await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredBob = await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected();
    if (selectedBooleanRequiredBob) {
      fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().click();
      expect(await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected()).to.be.false;
    } else {
      fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().click();
      expect(await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected()).to.be.true;
    }
    fieldTestServiceClassEntityUpdatePage.enumBobSelectLastOption();
    fieldTestServiceClassEntityUpdatePage.enumRequiredBobSelectLastOption();
    fieldTestServiceClassEntityUpdatePage.setByteImageBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteImageRequiredBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteImageMinbytesBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteImageMaxbytesBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteAnyBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteAnyRequiredBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteAnyMinbytesBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteAnyMaxbytesBobInput(absolutePath);
    fieldTestServiceClassEntityUpdatePage.setByteTextBobInput('byteTextBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getByteTextBobInput()).to.match(/byteTextBob/);
    fieldTestServiceClassEntityUpdatePage.setByteTextRequiredBobInput('byteTextRequiredBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getByteTextRequiredBobInput()).to.match(/byteTextRequiredBob/);
    fieldTestServiceClassEntityUpdatePage.setByteTextMinbytesBobInput('byteTextMinbytesBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getByteTextMinbytesBobInput()).to.match(/byteTextMinbytesBob/);
    fieldTestServiceClassEntityUpdatePage.setByteTextMaxbytesBobInput('byteTextMaxbytesBob');
    expect(await fieldTestServiceClassEntityUpdatePage.getByteTextMaxbytesBobInput()).to.match(/byteTextMaxbytesBob/);
    await fieldTestServiceClassEntityUpdatePage.save();
    expect(await fieldTestServiceClassEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestServiceClassEntity', async () => {
    fieldTestServiceClassEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestServiceClassEntityComponentsPage.countDeleteButtons();
    await fieldTestServiceClassEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestServiceClassEntityDeleteDialog = new FieldTestServiceClassEntityDeleteDialog();
    expect(await fieldTestServiceClassEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestServiceClassEntity.delete.question/
    );
    await fieldTestServiceClassEntityDeleteDialog.clickOnConfirmButton();

    fieldTestServiceClassEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestServiceClassEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
