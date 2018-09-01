/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestPagerComponentsPage from './test-pager.page-object';
import { TestPagerDeleteDialog } from './test-pager.page-object';
import TestPagerUpdatePage from './test-pager-update.page-object';

const expect = chai.expect;

describe('TestPager e2e test', () => {
  let navBarPage: NavBarPage;
  let testPagerUpdatePage: TestPagerUpdatePage;
  let testPagerComponentsPage: TestPagerComponentsPage;
  let testPagerDeleteDialog: TestPagerDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestPagers', async () => {
    navBarPage.getEntityPage('test-pager');
    testPagerComponentsPage = new TestPagerComponentsPage();
    expect(await testPagerComponentsPage.getTitle().getText()).to.match(/Test Pagers/);
  });

  it('should load create TestPager page', async () => {
    testPagerComponentsPage.clickOnCreateButton();
    testPagerUpdatePage = new TestPagerUpdatePage();
    expect(await testPagerUpdatePage.getPageTitle().getAttribute('id')).to.match(/jhipster180901App.testPager.home.createOrEditLabel/);
  });

  it('should create and save TestPagers', async () => {
    testPagerUpdatePage.userOneToManySelectLastOption();
    // testPagerUpdatePage.userManyToManySelectLastOption();
    testPagerUpdatePage.userOneToOneSelectLastOption();
    await testPagerUpdatePage.save();
    expect(await testPagerUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestPager', async () => {
    testPagerComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testPagerComponentsPage.countDeleteButtons();
    await testPagerComponentsPage.clickOnLastDeleteButton();

    testPagerDeleteDialog = new TestPagerDeleteDialog();
    expect(await testPagerDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testPager.delete.question/);
    await testPagerDeleteDialog.clickOnConfirmButton();

    testPagerComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testPagerComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
