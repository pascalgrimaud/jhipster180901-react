/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestOneToOneComponentsPage from './test-one-to-one-my-suffix.page-object';
import { TestOneToOneDeleteDialog } from './test-one-to-one-my-suffix.page-object';
import TestOneToOneUpdatePage from './test-one-to-one-my-suffix-update.page-object';

const expect = chai.expect;

describe('TestOneToOne e2e test', () => {
  let navBarPage: NavBarPage;
  let testOneToOneUpdatePage: TestOneToOneUpdatePage;
  let testOneToOneComponentsPage: TestOneToOneComponentsPage;
  let testOneToOneDeleteDialog: TestOneToOneDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestOneToOnes', async () => {
    navBarPage.getEntityPage('test-one-to-one-my-suffix');
    testOneToOneComponentsPage = new TestOneToOneComponentsPage();
    expect(await testOneToOneComponentsPage.getTitle().getText()).to.match(/Test One To Ones/);
  });

  it('should load create TestOneToOne page', async () => {
    testOneToOneComponentsPage.clickOnCreateButton();
    testOneToOneUpdatePage = new TestOneToOneUpdatePage();
    expect(await testOneToOneUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testOneToOne.home.createOrEditLabel/
    );
  });

  it('should create and save TestOneToOnes', async () => {
    testOneToOneUpdatePage.testEntitySelectLastOption();
    testOneToOneUpdatePage.testMapstructSelectLastOption();
    testOneToOneUpdatePage.testServiceClassSelectLastOption();
    testOneToOneUpdatePage.testServiceImplSelectLastOption();
    testOneToOneUpdatePage.testInfiniteScrollSelectLastOption();
    testOneToOneUpdatePage.testPagerSelectLastOption();
    testOneToOneUpdatePage.testPaginationSelectLastOption();
    testOneToOneUpdatePage.testCustomTableNameSelectLastOption();
    await testOneToOneUpdatePage.save();
    expect(await testOneToOneUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestOneToOne', async () => {
    testOneToOneComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testOneToOneComponentsPage.countDeleteButtons();
    await testOneToOneComponentsPage.clickOnLastDeleteButton();

    testOneToOneDeleteDialog = new TestOneToOneDeleteDialog();
    expect(await testOneToOneDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testOneToOne.delete.question/);
    await testOneToOneDeleteDialog.clickOnConfirmButton();

    testOneToOneComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testOneToOneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
