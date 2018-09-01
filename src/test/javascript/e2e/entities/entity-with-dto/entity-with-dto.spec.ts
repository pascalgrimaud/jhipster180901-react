/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithDTOComponentsPage from './entity-with-dto.page-object';
import { EntityWithDTODeleteDialog } from './entity-with-dto.page-object';
import EntityWithDTOUpdatePage from './entity-with-dto-update.page-object';

const expect = chai.expect;

describe('EntityWithDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithDTOUpdatePage: EntityWithDTOUpdatePage;
  let entityWithDTOComponentsPage: EntityWithDTOComponentsPage;
  let entityWithDTODeleteDialog: EntityWithDTODeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithDTOS', async () => {
    navBarPage.getEntityPage('entity-with-dto');
    entityWithDTOComponentsPage = new EntityWithDTOComponentsPage();
    expect(await entityWithDTOComponentsPage.getTitle().getText()).to.match(/Entity With DTOS/);
  });

  it('should load create EntityWithDTO page', async () => {
    entityWithDTOComponentsPage.clickOnCreateButton();
    entityWithDTOUpdatePage = new EntityWithDTOUpdatePage();
    expect(await entityWithDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithDTO.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithDTOS', async () => {
    entityWithDTOUpdatePage.setEmmaInput('emma');
    expect(await entityWithDTOUpdatePage.getEmmaInput()).to.match(/emma/);
    await entityWithDTOUpdatePage.save();
    expect(await entityWithDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithDTO', async () => {
    entityWithDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithDTOComponentsPage.countDeleteButtons();
    await entityWithDTOComponentsPage.clickOnLastDeleteButton();

    entityWithDTODeleteDialog = new EntityWithDTODeleteDialog();
    expect(await entityWithDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.entityWithDTO.delete.question/);
    await entityWithDTODeleteDialog.clickOnConfirmButton();

    entityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
