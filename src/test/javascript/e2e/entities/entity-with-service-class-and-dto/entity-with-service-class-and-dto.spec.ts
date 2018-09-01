/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceClassAndDTOComponentsPage from './entity-with-service-class-and-dto.page-object';
import { EntityWithServiceClassAndDTODeleteDialog } from './entity-with-service-class-and-dto.page-object';
import EntityWithServiceClassAndDTOUpdatePage from './entity-with-service-class-and-dto-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceClassAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceClassAndDTOUpdatePage: EntityWithServiceClassAndDTOUpdatePage;
  let entityWithServiceClassAndDTOComponentsPage: EntityWithServiceClassAndDTOComponentsPage;
  let entityWithServiceClassAndDTODeleteDialog: EntityWithServiceClassAndDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceClassAndDTOS', async () => {
    navBarPage.getEntityPage('entity-with-service-class-and-dto');
    entityWithServiceClassAndDTOComponentsPage = new EntityWithServiceClassAndDTOComponentsPage();
    expect(await entityWithServiceClassAndDTOComponentsPage.getTitle().getText()).to.match(/Entity With Service Class And DTOS/);
  });

  it('should load create EntityWithServiceClassAndDTO page', async () => {
    entityWithServiceClassAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceClassAndDTOUpdatePage = new EntityWithServiceClassAndDTOUpdatePage();
    expect(await entityWithServiceClassAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClassAndDTO.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceClassAndDTOS', async () => {
    entityWithServiceClassAndDTOUpdatePage.setLucasInput('lucas');
    expect(await entityWithServiceClassAndDTOUpdatePage.getLucasInput()).to.match(/lucas/);
    await entityWithServiceClassAndDTOUpdatePage.save();
    expect(await entityWithServiceClassAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceClassAndDTO', async () => {
    entityWithServiceClassAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceClassAndDTOComponentsPage.clickOnLastDeleteButton();

    entityWithServiceClassAndDTODeleteDialog = new EntityWithServiceClassAndDTODeleteDialog();
    expect(await entityWithServiceClassAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClassAndDTO.delete.question/
    );
    await entityWithServiceClassAndDTODeleteDialog.clickOnConfirmButton();

    entityWithServiceClassAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
