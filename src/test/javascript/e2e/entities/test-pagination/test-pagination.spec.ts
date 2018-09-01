/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestPaginationComponentsPage from './test-pagination.page-object';
import { TestPaginationDeleteDialog } from './test-pagination.page-object';
import TestPaginationUpdatePage from './test-pagination-update.page-object';

const expect = chai.expect;

describe('TestPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let testPaginationUpdatePage: TestPaginationUpdatePage;
  let testPaginationComponentsPage: TestPaginationComponentsPage;
  let testPaginationDeleteDialog: TestPaginationDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestPaginations', async () => {
    navBarPage.getEntityPage('test-pagination');
    testPaginationComponentsPage = new TestPaginationComponentsPage();
    expect(await testPaginationComponentsPage.getTitle().getText()).to.match(/Test Paginations/);
  });

  it('should load create TestPagination page', async () => {
    testPaginationComponentsPage.clickOnCreateButton();
    testPaginationUpdatePage = new TestPaginationUpdatePage();
    expect(await testPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testPagination.home.createOrEditLabel/
    );
  });

  it('should create and save TestPaginations', async () => {
    testPaginationUpdatePage.userOneToManySelectLastOption();
    // testPaginationUpdatePage.userManyToManySelectLastOption();
    testPaginationUpdatePage.userOneToOneSelectLastOption();
    await testPaginationUpdatePage.save();
    expect(await testPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestPagination', async () => {
    testPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testPaginationComponentsPage.countDeleteButtons();
    await testPaginationComponentsPage.clickOnLastDeleteButton();

    testPaginationDeleteDialog = new TestPaginationDeleteDialog();
    expect(await testPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testPagination.delete.question/
    );
    await testPaginationDeleteDialog.clickOnConfirmButton();

    testPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
