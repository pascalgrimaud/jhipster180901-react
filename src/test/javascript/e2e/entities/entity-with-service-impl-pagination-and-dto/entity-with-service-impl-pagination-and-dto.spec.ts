/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceImplPaginationAndDTOComponentsPage from './entity-with-service-impl-pagination-and-dto.page-object';
import { EntityWithServiceImplPaginationAndDTODeleteDialog } from './entity-with-service-impl-pagination-and-dto.page-object';
import EntityWithServiceImplPaginationAndDTOUpdatePage from './entity-with-service-impl-pagination-and-dto-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceImplPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceImplPaginationAndDTOUpdatePage: EntityWithServiceImplPaginationAndDTOUpdatePage;
  let entityWithServiceImplPaginationAndDTOComponentsPage: EntityWithServiceImplPaginationAndDTOComponentsPage;
  let entityWithServiceImplPaginationAndDTODeleteDialog: EntityWithServiceImplPaginationAndDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceImplPaginationAndDTOS', async () => {
    navBarPage.getEntityPage('entity-with-service-impl-pagination-and-dto');
    entityWithServiceImplPaginationAndDTOComponentsPage = new EntityWithServiceImplPaginationAndDTOComponentsPage();
    expect(await entityWithServiceImplPaginationAndDTOComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Impl Pagination And DTOS/
    );
  });

  it('should load create EntityWithServiceImplPaginationAndDTO page', async () => {
    entityWithServiceImplPaginationAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceImplPaginationAndDTOUpdatePage = new EntityWithServiceImplPaginationAndDTOUpdatePage();
    expect(await entityWithServiceImplPaginationAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceImplPaginationAndDTOS', async () => {
    entityWithServiceImplPaginationAndDTOUpdatePage.setTheoInput('theo');
    expect(await entityWithServiceImplPaginationAndDTOUpdatePage.getTheoInput()).to.match(/theo/);
    await entityWithServiceImplPaginationAndDTOUpdatePage.save();
    expect(await entityWithServiceImplPaginationAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceImplPaginationAndDTO', async () => {
    entityWithServiceImplPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplPaginationAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceImplPaginationAndDTOComponentsPage.clickOnLastDeleteButton();

    entityWithServiceImplPaginationAndDTODeleteDialog = new EntityWithServiceImplPaginationAndDTODeleteDialog();
    expect(await entityWithServiceImplPaginationAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImplPaginationAndDTO.delete.question/
    );
    await entityWithServiceImplPaginationAndDTODeleteDialog.clickOnConfirmButton();

    entityWithServiceImplPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
