/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestManyToManyComponentsPage from './test-many-to-many-my-suffix.page-object';
import { TestManyToManyDeleteDialog } from './test-many-to-many-my-suffix.page-object';
import TestManyToManyUpdatePage from './test-many-to-many-my-suffix-update.page-object';

const expect = chai.expect;

describe('TestManyToMany e2e test', () => {
  let navBarPage: NavBarPage;
  let testManyToManyUpdatePage: TestManyToManyUpdatePage;
  let testManyToManyComponentsPage: TestManyToManyComponentsPage;
  let testManyToManyDeleteDialog: TestManyToManyDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestManyToManies', async () => {
    navBarPage.getEntityPage('test-many-to-many-my-suffix');
    testManyToManyComponentsPage = new TestManyToManyComponentsPage();
    expect(await testManyToManyComponentsPage.getTitle().getText()).to.match(/Test Many To Manies/);
  });

  it('should load create TestManyToMany page', async () => {
    testManyToManyComponentsPage.clickOnCreateButton();
    testManyToManyUpdatePage = new TestManyToManyUpdatePage();
    expect(await testManyToManyUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testManyToMany.home.createOrEditLabel/
    );
  });

  it('should create and save TestManyToManies', async () => {
    // testManyToManyUpdatePage.testEntitySelectLastOption();
    // testManyToManyUpdatePage.testMapstructSelectLastOption();
    // testManyToManyUpdatePage.testServiceClassSelectLastOption();
    // testManyToManyUpdatePage.testServiceImplSelectLastOption();
    // testManyToManyUpdatePage.testInfiniteScrollSelectLastOption();
    // testManyToManyUpdatePage.testPagerSelectLastOption();
    // testManyToManyUpdatePage.testPaginationSelectLastOption();
    // testManyToManyUpdatePage.testCustomTableNameSelectLastOption();
    await testManyToManyUpdatePage.save();
    expect(await testManyToManyUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestManyToMany', async () => {
    testManyToManyComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testManyToManyComponentsPage.countDeleteButtons();
    await testManyToManyComponentsPage.clickOnLastDeleteButton();

    testManyToManyDeleteDialog = new TestManyToManyDeleteDialog();
    expect(await testManyToManyDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testManyToMany.delete.question/
    );
    await testManyToManyDeleteDialog.clickOnConfirmButton();

    testManyToManyComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testManyToManyComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
