/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestManyRelPaginDTOComponentsPage from './test-many-rel-pagin-dto-my-suffix.page-object';
import { TestManyRelPaginDTODeleteDialog } from './test-many-rel-pagin-dto-my-suffix.page-object';
import TestManyRelPaginDTOUpdatePage from './test-many-rel-pagin-dto-my-suffix-update.page-object';

const expect = chai.expect;

describe('TestManyRelPaginDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let testManyRelPaginDTOUpdatePage: TestManyRelPaginDTOUpdatePage;
  let testManyRelPaginDTOComponentsPage: TestManyRelPaginDTOComponentsPage;
  let testManyRelPaginDTODeleteDialog: TestManyRelPaginDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestManyRelPaginDTOS', async () => {
    navBarPage.getEntityPage('test-many-rel-pagin-dto-my-suffix');
    testManyRelPaginDTOComponentsPage = new TestManyRelPaginDTOComponentsPage();
    expect(await testManyRelPaginDTOComponentsPage.getTitle().getText()).to.match(/Test Many Rel Pagin DTOS/);
  });

  it('should load create TestManyRelPaginDTO page', async () => {
    testManyRelPaginDTOComponentsPage.clickOnCreateButton();
    testManyRelPaginDTOUpdatePage = new TestManyRelPaginDTOUpdatePage();
    expect(await testManyRelPaginDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testManyRelPaginDTO.home.createOrEditLabel/
    );
  });

  it('should create and save TestManyRelPaginDTOS', async () => {
    // testManyRelPaginDTOUpdatePage.testMapstructSelectLastOption();
    await testManyRelPaginDTOUpdatePage.save();
    expect(await testManyRelPaginDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last TestManyRelPaginDTO', async () => {
    testManyRelPaginDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testManyRelPaginDTOComponentsPage.countDeleteButtons();
    await testManyRelPaginDTOComponentsPage.clickOnLastDeleteButton();

    testManyRelPaginDTODeleteDialog = new TestManyRelPaginDTODeleteDialog();
    expect(await testManyRelPaginDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testManyRelPaginDTO.delete.question/
    );
    await testManyRelPaginDTODeleteDialog.clickOnConfirmButton();

    testManyRelPaginDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testManyRelPaginDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
