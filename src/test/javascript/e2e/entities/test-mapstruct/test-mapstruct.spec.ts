/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestMapstructComponentsPage from './test-mapstruct.page-object';
import { TestMapstructDeleteDialog } from './test-mapstruct.page-object';
import TestMapstructUpdatePage from './test-mapstruct-update.page-object';

const expect = chai.expect;

describe('TestMapstruct e2e test', () => {
  let navBarPage: NavBarPage;
  let testMapstructUpdatePage: TestMapstructUpdatePage;
  let testMapstructComponentsPage: TestMapstructComponentsPage;
  let testMapstructDeleteDialog: TestMapstructDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestMapstructs', async () => {
    navBarPage.getEntityPage('test-mapstruct');
    testMapstructComponentsPage = new TestMapstructComponentsPage();
    expect(await testMapstructComponentsPage.getTitle().getText()).to.match(/Test Mapstructs/);
  });

  it('should load create TestMapstruct page', async () => {
    testMapstructComponentsPage.clickOnCreateButton();
    testMapstructUpdatePage = new TestMapstructUpdatePage();
    expect(await testMapstructUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testMapstruct.home.createOrEditLabel/
    );
  });

  it('should create and save TestMapstructs', async () => {
    testMapstructUpdatePage.userOneToManySelectLastOption();
    // testMapstructUpdatePage.userManyToManySelectLastOption();
    testMapstructUpdatePage.userOneToOneSelectLastOption();
    await testMapstructUpdatePage.save();
    expect(await testMapstructUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestMapstruct', async () => {
    testMapstructComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testMapstructComponentsPage.countDeleteButtons();
    await testMapstructComponentsPage.clickOnLastDeleteButton();

    testMapstructDeleteDialog = new TestMapstructDeleteDialog();
    expect(await testMapstructDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testMapstruct.delete.question/);
    await testMapstructDeleteDialog.clickOnConfirmButton();

    testMapstructComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testMapstructComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
