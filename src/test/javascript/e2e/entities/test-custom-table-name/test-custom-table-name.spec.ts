/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestCustomTableNameComponentsPage from './test-custom-table-name.page-object';
import { TestCustomTableNameDeleteDialog } from './test-custom-table-name.page-object';
import TestCustomTableNameUpdatePage from './test-custom-table-name-update.page-object';

const expect = chai.expect;

describe('TestCustomTableName e2e test', () => {
  let navBarPage: NavBarPage;
  let testCustomTableNameUpdatePage: TestCustomTableNameUpdatePage;
  let testCustomTableNameComponentsPage: TestCustomTableNameComponentsPage;
  /*let testCustomTableNameDeleteDialog: TestCustomTableNameDeleteDialog;*/

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestCustomTableNames', async () => {
    navBarPage.getEntityPage('test-custom-table-name');
    testCustomTableNameComponentsPage = new TestCustomTableNameComponentsPage();
    expect(await testCustomTableNameComponentsPage.getTitle().getText()).to.match(/Test Custom Table Names/);
  });

  it('should load create TestCustomTableName page', async () => {
    testCustomTableNameComponentsPage.clickOnCreateButton();
    testCustomTableNameUpdatePage = new TestCustomTableNameUpdatePage();
    expect(await testCustomTableNameUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testCustomTableName.home.createOrEditLabel/
    );
  });

  /* it('should create and save TestCustomTableNames', async () => {
        testCustomTableNameUpdatePage.testEntitySelectLastOption();
        testCustomTableNameUpdatePage.userOneToManySelectLastOption();
        // testCustomTableNameUpdatePage.userManyToManySelectLastOption();
        testCustomTableNameUpdatePage.userOneToOneSelectLastOption();
        await testCustomTableNameUpdatePage.save();
        expect(await testCustomTableNameUpdatePage.getSaveButton().isPresent()).to.be.false;
    });*/

  /* it('should delete last TestCustomTableName', async () => {
        testCustomTableNameComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await testCustomTableNameComponentsPage.countDeleteButtons();
        await testCustomTableNameComponentsPage.clickOnLastDeleteButton();

        testCustomTableNameDeleteDialog = new TestCustomTableNameDeleteDialog();
        expect(await testCustomTableNameDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testCustomTableName.delete.question/);
        await testCustomTableNameDeleteDialog.clickOnConfirmButton();

        testCustomTableNameComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await testCustomTableNameComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

  after(() => {
    navBarPage.autoSignOut();
  });
});
