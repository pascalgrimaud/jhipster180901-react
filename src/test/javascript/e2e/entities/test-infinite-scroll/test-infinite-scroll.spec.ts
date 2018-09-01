/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestInfiniteScrollComponentsPage from './test-infinite-scroll.page-object';
import { TestInfiniteScrollDeleteDialog } from './test-infinite-scroll.page-object';
import TestInfiniteScrollUpdatePage from './test-infinite-scroll-update.page-object';

const expect = chai.expect;

describe('TestInfiniteScroll e2e test', () => {
  let navBarPage: NavBarPage;
  let testInfiniteScrollUpdatePage: TestInfiniteScrollUpdatePage;
  let testInfiniteScrollComponentsPage: TestInfiniteScrollComponentsPage;
  let testInfiniteScrollDeleteDialog: TestInfiniteScrollDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestInfiniteScrolls', async () => {
    navBarPage.getEntityPage('test-infinite-scroll');
    testInfiniteScrollComponentsPage = new TestInfiniteScrollComponentsPage();
    expect(await testInfiniteScrollComponentsPage.getTitle().getText()).to.match(/Test Infinite Scrolls/);
  });

  it('should load create TestInfiniteScroll page', async () => {
    testInfiniteScrollComponentsPage.clickOnCreateButton();
    testInfiniteScrollUpdatePage = new TestInfiniteScrollUpdatePage();
    expect(await testInfiniteScrollUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testInfiniteScroll.home.createOrEditLabel/
    );
  });

  it('should create and save TestInfiniteScrolls', async () => {
    testInfiniteScrollUpdatePage.userOneToManySelectLastOption();
    // testInfiniteScrollUpdatePage.userManyToManySelectLastOption();
    testInfiniteScrollUpdatePage.userOneToOneSelectLastOption();
    await testInfiniteScrollUpdatePage.save();
    expect(await testInfiniteScrollUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestInfiniteScroll', async () => {
    testInfiniteScrollComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testInfiniteScrollComponentsPage.countDeleteButtons();
    await testInfiniteScrollComponentsPage.clickOnLastDeleteButton();

    testInfiniteScrollDeleteDialog = new TestInfiniteScrollDeleteDialog();
    expect(await testInfiniteScrollDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testInfiniteScroll.delete.question/
    );
    await testInfiniteScrollDeleteDialog.clickOnConfirmButton();

    testInfiniteScrollComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testInfiniteScrollComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
