/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceClassAndPaginationComponentsPage from './entity-with-service-class-and-pagination.page-object';
import { EntityWithServiceClassAndPaginationDeleteDialog } from './entity-with-service-class-and-pagination.page-object';
import EntityWithServiceClassAndPaginationUpdatePage from './entity-with-service-class-and-pagination-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceClassAndPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceClassAndPaginationUpdatePage: EntityWithServiceClassAndPaginationUpdatePage;
  let entityWithServiceClassAndPaginationComponentsPage: EntityWithServiceClassAndPaginationComponentsPage;
  let entityWithServiceClassAndPaginationDeleteDialog: EntityWithServiceClassAndPaginationDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceClassAndPaginations', async () => {
    navBarPage.getEntityPage('entity-with-service-class-and-pagination');
    entityWithServiceClassAndPaginationComponentsPage = new EntityWithServiceClassAndPaginationComponentsPage();
    expect(await entityWithServiceClassAndPaginationComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Class And Paginations/
    );
  });

  it('should load create EntityWithServiceClassAndPagination page', async () => {
    entityWithServiceClassAndPaginationComponentsPage.clickOnCreateButton();
    entityWithServiceClassAndPaginationUpdatePage = new EntityWithServiceClassAndPaginationUpdatePage();
    expect(await entityWithServiceClassAndPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClassAndPagination.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceClassAndPaginations', async () => {
    entityWithServiceClassAndPaginationUpdatePage.setEnzoInput('enzo');
    expect(await entityWithServiceClassAndPaginationUpdatePage.getEnzoInput()).to.match(/enzo/);
    await entityWithServiceClassAndPaginationUpdatePage.save();
    expect(await entityWithServiceClassAndPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceClassAndPagination', async () => {
    entityWithServiceClassAndPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons();
    await entityWithServiceClassAndPaginationComponentsPage.clickOnLastDeleteButton();

    entityWithServiceClassAndPaginationDeleteDialog = new EntityWithServiceClassAndPaginationDeleteDialog();
    expect(await entityWithServiceClassAndPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClassAndPagination.delete.question/
    );
    await entityWithServiceClassAndPaginationDeleteDialog.clickOnConfirmButton();

    entityWithServiceClassAndPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
