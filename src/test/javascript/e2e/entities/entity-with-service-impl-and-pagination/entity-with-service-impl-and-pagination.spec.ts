/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceImplAndPaginationComponentsPage from './entity-with-service-impl-and-pagination.page-object';
import { EntityWithServiceImplAndPaginationDeleteDialog } from './entity-with-service-impl-and-pagination.page-object';
import EntityWithServiceImplAndPaginationUpdatePage from './entity-with-service-impl-and-pagination-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceImplAndPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceImplAndPaginationUpdatePage: EntityWithServiceImplAndPaginationUpdatePage;
  let entityWithServiceImplAndPaginationComponentsPage: EntityWithServiceImplAndPaginationComponentsPage;
  let entityWithServiceImplAndPaginationDeleteDialog: EntityWithServiceImplAndPaginationDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceImplAndPaginations', async () => {
    navBarPage.getEntityPage('entity-with-service-impl-and-pagination');
    entityWithServiceImplAndPaginationComponentsPage = new EntityWithServiceImplAndPaginationComponentsPage();
    expect(await entityWithServiceImplAndPaginationComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Impl And Paginations/
    );
  });

  it('should load create EntityWithServiceImplAndPagination page', async () => {
    entityWithServiceImplAndPaginationComponentsPage.clickOnCreateButton();
    entityWithServiceImplAndPaginationUpdatePage = new EntityWithServiceImplAndPaginationUpdatePage();
    expect(await entityWithServiceImplAndPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImplAndPagination.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceImplAndPaginations', async () => {
    entityWithServiceImplAndPaginationUpdatePage.setHugoInput('hugo');
    expect(await entityWithServiceImplAndPaginationUpdatePage.getHugoInput()).to.match(/hugo/);
    await entityWithServiceImplAndPaginationUpdatePage.save();
    expect(await entityWithServiceImplAndPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceImplAndPagination', async () => {
    entityWithServiceImplAndPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplAndPaginationComponentsPage.countDeleteButtons();
    await entityWithServiceImplAndPaginationComponentsPage.clickOnLastDeleteButton();

    entityWithServiceImplAndPaginationDeleteDialog = new EntityWithServiceImplAndPaginationDeleteDialog();
    expect(await entityWithServiceImplAndPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImplAndPagination.delete.question/
    );
    await entityWithServiceImplAndPaginationDeleteDialog.clickOnConfirmButton();

    entityWithServiceImplAndPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
