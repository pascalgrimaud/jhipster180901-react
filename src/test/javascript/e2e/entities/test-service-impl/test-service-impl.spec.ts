/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestServiceImplComponentsPage from './test-service-impl.page-object';
import { TestServiceImplDeleteDialog } from './test-service-impl.page-object';
import TestServiceImplUpdatePage from './test-service-impl-update.page-object';

const expect = chai.expect;

describe('TestServiceImpl e2e test', () => {
  let navBarPage: NavBarPage;
  let testServiceImplUpdatePage: TestServiceImplUpdatePage;
  let testServiceImplComponentsPage: TestServiceImplComponentsPage;
  let testServiceImplDeleteDialog: TestServiceImplDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestServiceImpls', async () => {
    navBarPage.getEntityPage('test-service-impl');
    testServiceImplComponentsPage = new TestServiceImplComponentsPage();
    expect(await testServiceImplComponentsPage.getTitle().getText()).to.match(/Test Service Impls/);
  });

  it('should load create TestServiceImpl page', async () => {
    testServiceImplComponentsPage.clickOnCreateButton();
    testServiceImplUpdatePage = new TestServiceImplUpdatePage();
    expect(await testServiceImplUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testServiceImpl.home.createOrEditLabel/
    );
  });

  it('should create and save TestServiceImpls', async () => {
    testServiceImplUpdatePage.userOneToManySelectLastOption();
    // testServiceImplUpdatePage.userManyToManySelectLastOption();
    testServiceImplUpdatePage.userOneToOneSelectLastOption();
    await testServiceImplUpdatePage.save();
    expect(await testServiceImplUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestServiceImpl', async () => {
    testServiceImplComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testServiceImplComponentsPage.countDeleteButtons();
    await testServiceImplComponentsPage.clickOnLastDeleteButton();

    testServiceImplDeleteDialog = new TestServiceImplDeleteDialog();
    expect(await testServiceImplDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testServiceImpl.delete.question/
    );
    await testServiceImplDeleteDialog.clickOnConfirmButton();

    testServiceImplComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
