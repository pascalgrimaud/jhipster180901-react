/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestServiceClassComponentsPage from './test-service-class.page-object';
import { TestServiceClassDeleteDialog } from './test-service-class.page-object';
import TestServiceClassUpdatePage from './test-service-class-update.page-object';

const expect = chai.expect;

describe('TestServiceClass e2e test', () => {
  let navBarPage: NavBarPage;
  let testServiceClassUpdatePage: TestServiceClassUpdatePage;
  let testServiceClassComponentsPage: TestServiceClassComponentsPage;
  let testServiceClassDeleteDialog: TestServiceClassDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestServiceClasses', async () => {
    navBarPage.getEntityPage('test-service-class');
    testServiceClassComponentsPage = new TestServiceClassComponentsPage();
    expect(await testServiceClassComponentsPage.getTitle().getText()).to.match(/Test Service Classes/);
  });

  it('should load create TestServiceClass page', async () => {
    testServiceClassComponentsPage.clickOnCreateButton();
    testServiceClassUpdatePage = new TestServiceClassUpdatePage();
    expect(await testServiceClassUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testServiceClass.home.createOrEditLabel/
    );
  });

  it('should create and save TestServiceClasses', async () => {
    testServiceClassUpdatePage.userOneToManySelectLastOption();
    // testServiceClassUpdatePage.userManyToManySelectLastOption();
    testServiceClassUpdatePage.userOneToOneSelectLastOption();
    await testServiceClassUpdatePage.save();
    expect(await testServiceClassUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestServiceClass', async () => {
    testServiceClassComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testServiceClassComponentsPage.countDeleteButtons();
    await testServiceClassComponentsPage.clickOnLastDeleteButton();

    testServiceClassDeleteDialog = new TestServiceClassDeleteDialog();
    expect(await testServiceClassDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testServiceClass.delete.question/
    );
    await testServiceClassDeleteDialog.clickOnConfirmButton();

    testServiceClassComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testServiceClassComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
