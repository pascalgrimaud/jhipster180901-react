/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithPaginationComponentsPage from './entity-with-pagination.page-object';
import { EntityWithPaginationDeleteDialog } from './entity-with-pagination.page-object';
import EntityWithPaginationUpdatePage from './entity-with-pagination-update.page-object';

const expect = chai.expect;

describe('EntityWithPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithPaginationUpdatePage: EntityWithPaginationUpdatePage;
  let entityWithPaginationComponentsPage: EntityWithPaginationComponentsPage;
  let entityWithPaginationDeleteDialog: EntityWithPaginationDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithPaginations', async () => {
    navBarPage.getEntityPage('entity-with-pagination');
    entityWithPaginationComponentsPage = new EntityWithPaginationComponentsPage();
    expect(await entityWithPaginationComponentsPage.getTitle().getText()).to.match(/Entity With Paginations/);
  });

  it('should load create EntityWithPagination page', async () => {
    entityWithPaginationComponentsPage.clickOnCreateButton();
    entityWithPaginationUpdatePage = new EntityWithPaginationUpdatePage();
    expect(await entityWithPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithPagination.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithPaginations', async () => {
    entityWithPaginationUpdatePage.setNathanInput('nathan');
    expect(await entityWithPaginationUpdatePage.getNathanInput()).to.match(/nathan/);
    await entityWithPaginationUpdatePage.save();
    expect(await entityWithPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithPagination', async () => {
    entityWithPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithPaginationComponentsPage.countDeleteButtons();
    await entityWithPaginationComponentsPage.clickOnLastDeleteButton();

    entityWithPaginationDeleteDialog = new EntityWithPaginationDeleteDialog();
    expect(await entityWithPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithPagination.delete.question/
    );
    await entityWithPaginationDeleteDialog.clickOnConfirmButton();

    entityWithPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
