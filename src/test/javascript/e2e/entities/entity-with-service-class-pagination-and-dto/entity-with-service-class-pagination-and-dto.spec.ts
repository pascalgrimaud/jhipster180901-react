/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceClassPaginationAndDTOComponentsPage from './entity-with-service-class-pagination-and-dto.page-object';
import { EntityWithServiceClassPaginationAndDTODeleteDialog } from './entity-with-service-class-pagination-and-dto.page-object';
import EntityWithServiceClassPaginationAndDTOUpdatePage from './entity-with-service-class-pagination-and-dto-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceClassPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceClassPaginationAndDTOUpdatePage: EntityWithServiceClassPaginationAndDTOUpdatePage;
  let entityWithServiceClassPaginationAndDTOComponentsPage: EntityWithServiceClassPaginationAndDTOComponentsPage;
  let entityWithServiceClassPaginationAndDTODeleteDialog: EntityWithServiceClassPaginationAndDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceClassPaginationAndDTOS', async () => {
    navBarPage.getEntityPage('entity-with-service-class-pagination-and-dto');
    entityWithServiceClassPaginationAndDTOComponentsPage = new EntityWithServiceClassPaginationAndDTOComponentsPage();
    expect(await entityWithServiceClassPaginationAndDTOComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Class Pagination And DTOS/
    );
  });

  it('should load create EntityWithServiceClassPaginationAndDTO page', async () => {
    entityWithServiceClassPaginationAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceClassPaginationAndDTOUpdatePage = new EntityWithServiceClassPaginationAndDTOUpdatePage();
    expect(await entityWithServiceClassPaginationAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceClassPaginationAndDTOS', async () => {
    entityWithServiceClassPaginationAndDTOUpdatePage.setLenaInput('lena');
    expect(await entityWithServiceClassPaginationAndDTOUpdatePage.getLenaInput()).to.match(/lena/);
    await entityWithServiceClassPaginationAndDTOUpdatePage.save();
    expect(await entityWithServiceClassPaginationAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceClassPaginationAndDTO', async () => {
    entityWithServiceClassPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassPaginationAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceClassPaginationAndDTOComponentsPage.clickOnLastDeleteButton();

    entityWithServiceClassPaginationAndDTODeleteDialog = new EntityWithServiceClassPaginationAndDTODeleteDialog();
    expect(await entityWithServiceClassPaginationAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClassPaginationAndDTO.delete.question/
    );
    await entityWithServiceClassPaginationAndDTODeleteDialog.clickOnConfirmButton();

    entityWithServiceClassPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
