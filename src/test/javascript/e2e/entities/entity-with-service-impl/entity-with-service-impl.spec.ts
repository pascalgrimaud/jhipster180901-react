/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceImplComponentsPage from './entity-with-service-impl.page-object';
import { EntityWithServiceImplDeleteDialog } from './entity-with-service-impl.page-object';
import EntityWithServiceImplUpdatePage from './entity-with-service-impl-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceImpl e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceImplUpdatePage: EntityWithServiceImplUpdatePage;
  let entityWithServiceImplComponentsPage: EntityWithServiceImplComponentsPage;
  let entityWithServiceImplDeleteDialog: EntityWithServiceImplDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceImpls', async () => {
    navBarPage.getEntityPage('entity-with-service-impl');
    entityWithServiceImplComponentsPage = new EntityWithServiceImplComponentsPage();
    expect(await entityWithServiceImplComponentsPage.getTitle().getText()).to.match(/Entity With Service Impls/);
  });

  it('should load create EntityWithServiceImpl page', async () => {
    entityWithServiceImplComponentsPage.clickOnCreateButton();
    entityWithServiceImplUpdatePage = new EntityWithServiceImplUpdatePage();
    expect(await entityWithServiceImplUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImpl.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceImpls', async () => {
    entityWithServiceImplUpdatePage.setClaraInput('clara');
    expect(await entityWithServiceImplUpdatePage.getClaraInput()).to.match(/clara/);
    await entityWithServiceImplUpdatePage.save();
    expect(await entityWithServiceImplUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceImpl', async () => {
    entityWithServiceImplComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplComponentsPage.countDeleteButtons();
    await entityWithServiceImplComponentsPage.clickOnLastDeleteButton();

    entityWithServiceImplDeleteDialog = new EntityWithServiceImplDeleteDialog();
    expect(await entityWithServiceImplDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceImpl.delete.question/
    );
    await entityWithServiceImplDeleteDialog.clickOnConfirmButton();

    entityWithServiceImplComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
