/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceImplAndDTOComponentsPage from './entity-with-service-impl-and-dto.page-object';
import { EntityWithServiceImplAndDTODeleteDialog } from './entity-with-service-impl-and-dto.page-object';
import EntityWithServiceImplAndDTOUpdatePage from './entity-with-service-impl-and-dto-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceImplAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceImplAndDTOUpdatePage: EntityWithServiceImplAndDTOUpdatePage;
  let entityWithServiceImplAndDTOComponentsPage: EntityWithServiceImplAndDTOComponentsPage;
  let entityWithServiceImplAndDTODeleteDialog: EntityWithServiceImplAndDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceImplAndDTOS', async () => {
    navBarPage.getEntityPage('entity-with-service-impl-and-dto');
    entityWithServiceImplAndDTOComponentsPage = new EntityWithServiceImplAndDTOComponentsPage();
    expect(await entityWithServiceImplAndDTOComponentsPage.getTitle().getText()).to.match(/Entity With Service Impl And DTOS/);
  });

  it('should load create EntityWithServiceImplAndDTO page', async () => {
    entityWithServiceImplAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceImplAndDTOUpdatePage = new EntityWithServiceImplAndDTOUpdatePage();
    expect(await entityWithServiceImplAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImplAndDTO.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceImplAndDTOS', async () => {
    entityWithServiceImplAndDTOUpdatePage.setLouisInput('louis');
    expect(await entityWithServiceImplAndDTOUpdatePage.getLouisInput()).to.match(/louis/);
    await entityWithServiceImplAndDTOUpdatePage.save();
    expect(await entityWithServiceImplAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceImplAndDTO', async () => {
    entityWithServiceImplAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceImplAndDTOComponentsPage.clickOnLastDeleteButton();

    entityWithServiceImplAndDTODeleteDialog = new EntityWithServiceImplAndDTODeleteDialog();
    expect(await entityWithServiceImplAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImplAndDTO.delete.question/
    );
    await entityWithServiceImplAndDTODeleteDialog.clickOnConfirmButton();

    entityWithServiceImplAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
