/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestManyToOneComponentsPage from './test-many-to-one-my-suffix.page-object';
import { TestManyToOneDeleteDialog } from './test-many-to-one-my-suffix.page-object';
import TestManyToOneUpdatePage from './test-many-to-one-my-suffix-update.page-object';

const expect = chai.expect;

describe('TestManyToOne e2e test', () => {
  let navBarPage: NavBarPage;
  let testManyToOneUpdatePage: TestManyToOneUpdatePage;
  let testManyToOneComponentsPage: TestManyToOneComponentsPage;
  let testManyToOneDeleteDialog: TestManyToOneDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestManyToOnes', async () => {
    navBarPage.getEntityPage('test-many-to-one-my-suffix');
    testManyToOneComponentsPage = new TestManyToOneComponentsPage();
    expect(await testManyToOneComponentsPage.getTitle().getText()).to.match(/Test Many To Ones/);
  });

  it('should load create TestManyToOne page', async () => {
    testManyToOneComponentsPage.clickOnCreateButton();
    testManyToOneUpdatePage = new TestManyToOneUpdatePage();
    expect(await testManyToOneUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testManyToOne.home.createOrEditLabel/
    );
  });

  it('should create and save TestManyToOnes', async () => {
    testManyToOneUpdatePage.testEntitySelectLastOption();
    testManyToOneUpdatePage.testMapstructSelectLastOption();
    testManyToOneUpdatePage.testServiceClassSelectLastOption();
    testManyToOneUpdatePage.testServiceImplSelectLastOption();
    testManyToOneUpdatePage.testInfiniteScrollSelectLastOption();
    testManyToOneUpdatePage.testPagerSelectLastOption();
    testManyToOneUpdatePage.testPaginationSelectLastOption();
    testManyToOneUpdatePage.testCustomTableNameSelectLastOption();
    await testManyToOneUpdatePage.save();
    expect(await testManyToOneUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestManyToOne', async () => {
    testManyToOneComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testManyToOneComponentsPage.countDeleteButtons();
    await testManyToOneComponentsPage.clickOnLastDeleteButton();

    testManyToOneDeleteDialog = new TestManyToOneDeleteDialog();
    expect(await testManyToOneDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testManyToOne.delete.question/);
    await testManyToOneDeleteDialog.clickOnConfirmButton();

    testManyToOneComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testManyToOneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
