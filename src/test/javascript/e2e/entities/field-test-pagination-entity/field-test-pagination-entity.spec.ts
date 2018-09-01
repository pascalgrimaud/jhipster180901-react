/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestPaginationEntityComponentsPage from './field-test-pagination-entity.page-object';
import { FieldTestPaginationEntityDeleteDialog } from './field-test-pagination-entity.page-object';
import FieldTestPaginationEntityUpdatePage from './field-test-pagination-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestPaginationEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestPaginationEntityUpdatePage: FieldTestPaginationEntityUpdatePage;
  let fieldTestPaginationEntityComponentsPage: FieldTestPaginationEntityComponentsPage;
  let fieldTestPaginationEntityDeleteDialog: FieldTestPaginationEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestPaginationEntities', async () => {
    navBarPage.getEntityPage('field-test-pagination-entity');
    fieldTestPaginationEntityComponentsPage = new FieldTestPaginationEntityComponentsPage();
    expect(await fieldTestPaginationEntityComponentsPage.getTitle().getText()).to.match(/Field Test Pagination Entities/);
  });

  it('should load create FieldTestPaginationEntity page', async () => {
    fieldTestPaginationEntityComponentsPage.clickOnCreateButton();
    fieldTestPaginationEntityUpdatePage = new FieldTestPaginationEntityUpdatePage();
    expect(await fieldTestPaginationEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestPaginationEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestPaginationEntities', async () => {
    fieldTestPaginationEntityUpdatePage.setStringAliceInput('stringAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getStringAliceInput()).to.match(/stringAlice/);
    fieldTestPaginationEntityUpdatePage.setStringRequiredAliceInput('stringRequiredAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getStringRequiredAliceInput()).to.match(/stringRequiredAlice/);
    fieldTestPaginationEntityUpdatePage.setStringMinlengthAliceInput('stringMinlengthAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getStringMinlengthAliceInput()).to.match(/stringMinlengthAlice/);
    fieldTestPaginationEntityUpdatePage.setStringMaxlengthAliceInput('stringMaxlengthAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getStringMaxlengthAliceInput()).to.match(/stringMaxlengthAlice/);
    fieldTestPaginationEntityUpdatePage.setStringPatternAliceInput('stringPatternAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getStringPatternAliceInput()).to.match(/stringPatternAlice/);
    fieldTestPaginationEntityUpdatePage.setIntegerAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getIntegerAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setIntegerRequiredAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getIntegerRequiredAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setIntegerMinAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getIntegerMinAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setIntegerMaxAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getIntegerMaxAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setLongAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getLongAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setLongRequiredAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getLongRequiredAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setLongMinAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getLongMinAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setLongMaxAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getLongMaxAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setFloatAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getFloatAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setFloatRequiredAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getFloatRequiredAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setFloatMinAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getFloatMinAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setFloatMaxAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getFloatMaxAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setDoubleRequiredAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getDoubleRequiredAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setDoubleMinAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getDoubleMinAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setDoubleMaxAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getDoubleMaxAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setBigDecimalRequiredAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalRequiredAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setBigDecimalMinAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalMinAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setBigDecimalMaxAliceInput('5');
    expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalMaxAliceInput()).to.eq('5');
    fieldTestPaginationEntityUpdatePage.setLocalDateAliceInput('01-01-2001');
    expect(await fieldTestPaginationEntityUpdatePage.getLocalDateAliceInput()).to.eq('2001-01-01');
    fieldTestPaginationEntityUpdatePage.setLocalDateRequiredAliceInput('01-01-2001');
    expect(await fieldTestPaginationEntityUpdatePage.getLocalDateRequiredAliceInput()).to.eq('2001-01-01');
    fieldTestPaginationEntityUpdatePage.setInstantAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPaginationEntityUpdatePage.getInstantAliceInput()).to.contain('2001-01-01T02:30');
    fieldTestPaginationEntityUpdatePage.setInstanteRequiredAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPaginationEntityUpdatePage.getInstanteRequiredAliceInput()).to.contain('2001-01-01T02:30');
    fieldTestPaginationEntityUpdatePage.setZonedDateTimeAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPaginationEntityUpdatePage.getZonedDateTimeAliceInput()).to.contain('2001-01-01T02:30');
    fieldTestPaginationEntityUpdatePage.setZonedDateTimeRequiredAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestPaginationEntityUpdatePage.getZonedDateTimeRequiredAliceInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanAlice = await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected();
    if (selectedBooleanAlice) {
      fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().click();
      expect(await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected()).to.be.false;
    } else {
      fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().click();
      expect(await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredAlice = await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected();
    if (selectedBooleanRequiredAlice) {
      fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().click();
      expect(await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected()).to.be.false;
    } else {
      fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().click();
      expect(await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected()).to.be.true;
    }
    fieldTestPaginationEntityUpdatePage.enumAliceSelectLastOption();
    fieldTestPaginationEntityUpdatePage.enumRequiredAliceSelectLastOption();
    fieldTestPaginationEntityUpdatePage.setByteImageAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteImageRequiredAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteImageMinbytesAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteImageMaxbytesAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteAnyAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteAnyRequiredAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteAnyMinbytesAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteAnyMaxbytesAliceInput(absolutePath);
    fieldTestPaginationEntityUpdatePage.setByteTextAliceInput('byteTextAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getByteTextAliceInput()).to.match(/byteTextAlice/);
    fieldTestPaginationEntityUpdatePage.setByteTextRequiredAliceInput('byteTextRequiredAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getByteTextRequiredAliceInput()).to.match(/byteTextRequiredAlice/);
    fieldTestPaginationEntityUpdatePage.setByteTextMinbytesAliceInput('byteTextMinbytesAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getByteTextMinbytesAliceInput()).to.match(/byteTextMinbytesAlice/);
    fieldTestPaginationEntityUpdatePage.setByteTextMaxbytesAliceInput('byteTextMaxbytesAlice');
    expect(await fieldTestPaginationEntityUpdatePage.getByteTextMaxbytesAliceInput()).to.match(/byteTextMaxbytesAlice/);
    await fieldTestPaginationEntityUpdatePage.save();
    expect(await fieldTestPaginationEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestPaginationEntity', async () => {
    fieldTestPaginationEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestPaginationEntityComponentsPage.countDeleteButtons();
    await fieldTestPaginationEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestPaginationEntityDeleteDialog = new FieldTestPaginationEntityDeleteDialog();
    expect(await fieldTestPaginationEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestPaginationEntity.delete.question/
    );
    await fieldTestPaginationEntityDeleteDialog.clickOnConfirmButton();

    fieldTestPaginationEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestPaginationEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
