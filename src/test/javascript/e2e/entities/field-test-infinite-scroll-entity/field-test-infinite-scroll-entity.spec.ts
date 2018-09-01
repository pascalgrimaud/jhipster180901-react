/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import FieldTestInfiniteScrollEntityComponentsPage from './field-test-infinite-scroll-entity.page-object';
import { FieldTestInfiniteScrollEntityDeleteDialog } from './field-test-infinite-scroll-entity.page-object';
import FieldTestInfiniteScrollEntityUpdatePage from './field-test-infinite-scroll-entity-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('FieldTestInfiniteScrollEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let fieldTestInfiniteScrollEntityUpdatePage: FieldTestInfiniteScrollEntityUpdatePage;
  let fieldTestInfiniteScrollEntityComponentsPage: FieldTestInfiniteScrollEntityComponentsPage;
  let fieldTestInfiniteScrollEntityDeleteDialog: FieldTestInfiniteScrollEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load FieldTestInfiniteScrollEntities', async () => {
    navBarPage.getEntityPage('field-test-infinite-scroll-entity');
    fieldTestInfiniteScrollEntityComponentsPage = new FieldTestInfiniteScrollEntityComponentsPage();
    expect(await fieldTestInfiniteScrollEntityComponentsPage.getTitle().getText()).to.match(/Field Test Infinite Scroll Entities/);
  });

  it('should load create FieldTestInfiniteScrollEntity page', async () => {
    fieldTestInfiniteScrollEntityComponentsPage.clickOnCreateButton();
    fieldTestInfiniteScrollEntityUpdatePage = new FieldTestInfiniteScrollEntityUpdatePage();
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestInfiniteScrollEntity.home.createOrEditLabel/
    );
  });

  it('should create and save FieldTestInfiniteScrollEntities', async () => {
    fieldTestInfiniteScrollEntityUpdatePage.setStringHugoInput('stringHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringHugoInput()).to.match(/stringHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setStringRequiredHugoInput('stringRequiredHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringRequiredHugoInput()).to.match(/stringRequiredHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setStringMinlengthHugoInput('stringMinlengthHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringMinlengthHugoInput()).to.match(/stringMinlengthHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setStringMaxlengthHugoInput('stringMaxlengthHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringMaxlengthHugoInput()).to.match(/stringMaxlengthHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setStringPatternHugoInput('stringPatternHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringPatternHugoInput()).to.match(/stringPatternHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setIntegerHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setIntegerRequiredHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerRequiredHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setIntegerMinHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerMinHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setIntegerMaxHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerMaxHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setLongHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setLongRequiredHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongRequiredHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setLongMinHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongMinHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setLongMaxHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongMaxHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setFloatHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setFloatRequiredHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatRequiredHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setFloatMinHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatMinHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setFloatMaxHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatMaxHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setDoubleRequiredHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleRequiredHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setDoubleMinHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleMinHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setDoubleMaxHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleMaxHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalRequiredHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalRequiredHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalMinHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalMinHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalMaxHugoInput('5');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalMaxHugoInput()).to.eq('5');
    fieldTestInfiniteScrollEntityUpdatePage.setLocalDateHugoInput('01-01-2001');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getLocalDateHugoInput()).to.eq('2001-01-01');
    fieldTestInfiniteScrollEntityUpdatePage.setLocalDateRequiredHugoInput('01-01-2001');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getLocalDateRequiredHugoInput()).to.eq('2001-01-01');
    fieldTestInfiniteScrollEntityUpdatePage.setInstantHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getInstantHugoInput()).to.contain('2001-01-01T02:30');
    fieldTestInfiniteScrollEntityUpdatePage.setInstanteRequiredHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getInstanteRequiredHugoInput()).to.contain('2001-01-01T02:30');
    fieldTestInfiniteScrollEntityUpdatePage.setZonedDateTimeHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getZonedDateTimeHugoInput()).to.contain('2001-01-01T02:30');
    fieldTestInfiniteScrollEntityUpdatePage.setZonedDateTimeRequiredHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getZonedDateTimeRequiredHugoInput()).to.contain('2001-01-01T02:30');
    const selectedBooleanHugo = await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected();
    if (selectedBooleanHugo) {
      fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().click();
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected()).to.be.false;
    } else {
      fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().click();
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected()).to.be.true;
    }
    const selectedBooleanRequiredHugo = await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected();
    if (selectedBooleanRequiredHugo) {
      fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().click();
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected()).to.be.false;
    } else {
      fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().click();
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected()).to.be.true;
    }
    fieldTestInfiniteScrollEntityUpdatePage.enumHugoSelectLastOption();
    fieldTestInfiniteScrollEntityUpdatePage.enumRequiredHugoSelectLastOption();
    fieldTestInfiniteScrollEntityUpdatePage.setByteImageHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteImageRequiredHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteImageMinbytesHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteImageMaxbytesHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteAnyHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteAnyRequiredHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteAnyMinbytesHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteAnyMaxbytesHugoInput(absolutePath);
    fieldTestInfiniteScrollEntityUpdatePage.setByteTextHugoInput('byteTextHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextHugoInput()).to.match(/byteTextHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setByteTextRequiredHugoInput('byteTextRequiredHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextRequiredHugoInput()).to.match(/byteTextRequiredHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setByteTextMinbytesHugoInput('byteTextMinbytesHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextMinbytesHugoInput()).to.match(/byteTextMinbytesHugo/);
    fieldTestInfiniteScrollEntityUpdatePage.setByteTextMaxbytesHugoInput('byteTextMaxbytesHugo');
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextMaxbytesHugoInput()).to.match(/byteTextMaxbytesHugo/);
    await fieldTestInfiniteScrollEntityUpdatePage.save();
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last FieldTestInfiniteScrollEntity', async () => {
    fieldTestInfiniteScrollEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons();
    await fieldTestInfiniteScrollEntityComponentsPage.clickOnLastDeleteButton();

    fieldTestInfiniteScrollEntityDeleteDialog = new FieldTestInfiniteScrollEntityDeleteDialog();
    expect(await fieldTestInfiniteScrollEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.fieldTestInfiniteScrollEntity.delete.question/
    );
    await fieldTestInfiniteScrollEntityDeleteDialog.clickOnConfirmButton();

    fieldTestInfiniteScrollEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
