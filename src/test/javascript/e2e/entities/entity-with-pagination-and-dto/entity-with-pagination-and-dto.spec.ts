/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithPaginationAndDTOComponentsPage from './entity-with-pagination-and-dto.page-object';
import { EntityWithPaginationAndDTODeleteDialog } from './entity-with-pagination-and-dto.page-object';
import EntityWithPaginationAndDTOUpdatePage from './entity-with-pagination-and-dto-update.page-object';

const expect = chai.expect;

describe('EntityWithPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithPaginationAndDTOUpdatePage: EntityWithPaginationAndDTOUpdatePage;
  let entityWithPaginationAndDTOComponentsPage: EntityWithPaginationAndDTOComponentsPage;
  let entityWithPaginationAndDTODeleteDialog: EntityWithPaginationAndDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithPaginationAndDTOS', async () => {
    navBarPage.getEntityPage('entity-with-pagination-and-dto');
    entityWithPaginationAndDTOComponentsPage = new EntityWithPaginationAndDTOComponentsPage();
    expect(await entityWithPaginationAndDTOComponentsPage.getTitle().getText()).to.match(/Entity With Pagination And DTOS/);
  });

  it('should load create EntityWithPaginationAndDTO page', async () => {
    entityWithPaginationAndDTOComponentsPage.clickOnCreateButton();
    entityWithPaginationAndDTOUpdatePage = new EntityWithPaginationAndDTOUpdatePage();
    expect(await entityWithPaginationAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithPaginationAndDTO.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithPaginationAndDTOS', async () => {
    entityWithPaginationAndDTOUpdatePage.setLeaInput('lea');
    expect(await entityWithPaginationAndDTOUpdatePage.getLeaInput()).to.match(/lea/);
    await entityWithPaginationAndDTOUpdatePage.save();
    expect(await entityWithPaginationAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithPaginationAndDTO', async () => {
    entityWithPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithPaginationAndDTOComponentsPage.countDeleteButtons();
    await entityWithPaginationAndDTOComponentsPage.clickOnLastDeleteButton();

    entityWithPaginationAndDTODeleteDialog = new EntityWithPaginationAndDTODeleteDialog();
    expect(await entityWithPaginationAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithPaginationAndDTO.delete.question/
    );
    await entityWithPaginationAndDTODeleteDialog.clickOnConfirmButton();

    entityWithPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
