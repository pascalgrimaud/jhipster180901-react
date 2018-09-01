/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestPagerEntityComponentsPage from './field-test-pager-entity.page-object';
import { FieldTestPagerEntityDeleteDialog } from './field-test-pager-entity.page-object';
import FieldTestPagerEntityUpdatePage from './field-test-pager-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestPagerEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestPagerEntityUpdatePage: FieldTestPagerEntityUpdatePage;
  let fieldTestPagerEntityComponentsPage: FieldTestPagerEntityComponentsPage;
  let fieldTestPagerEntityDeleteDialog: FieldTestPagerEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestPagerEntities', async () => {
    navBarPage.getEntityPage('field-test-pager-entity');
    fieldTestPagerEntityComponentsPage = new FieldTestPagerEntityComponentsPage();
    expect(await fieldTestPagerEntityComponentsPage.getTitle().getText()).to.match(/Field Test Pager Entities/);
  });

  it('should load create FieldTestPagerEntity page', async () => {
    fieldTestPagerEntityComponentsPage.clickOnCreateButton();
    fieldTestPagerEntityUpdatePage = new FieldTestPagerEntityUpdatePage();
    expect(await fieldTestPagerEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestPagerEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestPagerEntities', async () => {
    fieldTestPagerEntityUpdatePage.setStringJadeInput('stringJade');
    expect(await fieldTestPagerEntityUpdatePage.getStringJadeInput()).to.match(/stringJade/);
    fieldTestPagerEntityUpdatePage.setStringRequiredJadeInput('stringRequiredJade');
    expect(await fieldTestPagerEntityUpdatePage.getStringRequiredJadeInput()).to.match(/stringRequiredJade/);
    fieldTestPagerEntityUpdatePage.setStringMinlengthJadeInput('stringMinlengthJade');
    expect(await fieldTestPagerEntityUpdatePage.getStringMinlengthJadeInput()).to.match(/stringMinlengthJade/);
    fieldTestPagerEntityUpdatePage.setStringMaxlengthJadeInput('stringMaxlengthJade');
    expect(await fieldTestPagerEntityUpdatePage.getStringMaxlengthJadeInput()).to.match(/stringMaxlengthJade/);
    fieldTestPagerEntityUpdatePage.setStringPatternJadeInput('stringPatternJade');
    expect(await fieldTestPagerEntityUpdatePage.getStringPatternJadeInput()).to.match(/stringPatternJade/);
    fieldTestPagerEntityUpdatePage.setIntegerJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getIntegerJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setIntegerRequiredJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getIntegerRequiredJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setIntegerMinJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getIntegerMinJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setIntegerMaxJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getIntegerMaxJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setLongJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getLongJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setLongRequiredJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getLongRequiredJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setLongMinJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getLongMinJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setLongMaxJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getLongMaxJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setFloatJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getFloatJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setFloatRequiredJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getFloatRequiredJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setFloatMinJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getFloatMinJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setFloatMaxJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getFloatMaxJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setDoubleRequiredJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getDoubleRequiredJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setDoubleMinJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getDoubleMinJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setDoubleMaxJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getDoubleMaxJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setBigDecimalRequiredJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getBigDecimalRequiredJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setBigDecimalMinJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getBigDecimalMinJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setBigDecimalMaxJadeInput('5');
    expect(await fieldTestPagerEntityUpdatePage.getBigDecimalMaxJadeInput()).to.eq('5');
    fieldTestPagerEntityUpdatePage.setLocalDateJadeInput('01-01-2001');
    expect(await fieldTestPagerEntityUpdatePage.getLocalDateJadeInput()).to.eq('2001-01-01');
    fieldTestPagerEntityUpdatePage.setLocalDateRequiredJadeInput('01-01-2001');
    expect(await fieldTestPagerEntityUpdatePage.getLocalDateRequiredJadeInput()).to.eq('2001-01-01');
    fieldTestPagerEntityUpdatePage.setInstantJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPagerEntityUpdatePage.getInstantJadeInput()).to.contain('2001-01-01T02:30');
    fieldTestPagerEntityUpdatePage.setInstanteRequiredJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPagerEntityUpdatePage.getInstanteRequiredJadeInput()).to.contain('2001-01-01T02:30');
    fieldTestPagerEntityUpdatePage.setZonedDateTimeJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPagerEntityUpdatePage.getZonedDateTimeJadeInput()).to.contain('2001-01-01T02:30');
    fieldTestPagerEntityUpdatePage.setZonedDateTimeRequiredJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPagerEntityUpdatePage.getZonedDateTimeRequiredJadeInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanJade = await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected();
    if (selectedBooleanJade) {
      fieldTestPagerEntityUpdatePage.getBooleanJadeInput().click();
      expect(await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected()).to.be.false;
    } else {
      fieldTestPagerEntityUpdatePage.getBooleanJadeInput().click();
      expect(await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredJade = await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected();
    if (selectedBooleanRequiredJade) {
      fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().click();
      expect(await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected()).to.be.false;
    } else {
      fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().click();
      expect(await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected()).to.be.true;
    }
    fieldTestPagerEntityUpdatePage.enumJadeSelectLastOption();
    fieldTestPagerEntityUpdatePage.enumRequiredJadeSelectLastOption();
    fieldTestPagerEntityUpdatePage.setByteImageJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteImageRequiredJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteImageMinbytesJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteImageMaxbytesJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteAnyJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteAnyRequiredJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteAnyMinbytesJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteAnyMaxbytesJadeInput(absolutePath);
    fieldTestPagerEntityUpdatePage.setByteTextJadeInput('byteTextJade');
    expect(await fieldTestPagerEntityUpdatePage.getByteTextJadeInput()).to.match(/byteTextJade/);
    fieldTestPagerEntityUpdatePage.setByteTextRequiredJadeInput('byteTextRequiredJade');
    expect(await fieldTestPagerEntityUpdatePage.getByteTextRequiredJadeInput()).to.match(/byteTextRequiredJade/);
    fieldTestPagerEntityUpdatePage.setByteTextMinbytesJadeInput('byteTextMinbytesJade');
    expect(await fieldTestPagerEntityUpdatePage.getByteTextMinbytesJadeInput()).to.match(/byteTextMinbytesJade/);
    fieldTestPagerEntityUpdatePage.setByteTextMaxbytesJadeInput('byteTextMaxbytesJade');
    expect(await fieldTestPagerEntityUpdatePage.getByteTextMaxbytesJadeInput()).to.match(/byteTextMaxbytesJade/);
    await fieldTestPagerEntityUpdatePage.save();
    expect(await fieldTestPagerEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestPagerEntity', async () => {
    fieldTestPagerEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestPagerEntityComponentsPage.countDeleteButtons();
    await fieldTestPagerEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestPagerEntityDeleteDialog = new FieldTestPagerEntityDeleteDialog();
    expect(await fieldTestPagerEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestPagerEntity.delete.question/
    );
    await fieldTestPagerEntityDeleteDialog.clickOnConfirmButton();

    fieldTestPagerEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestPagerEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
