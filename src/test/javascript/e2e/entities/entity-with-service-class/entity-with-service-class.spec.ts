/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EntityWithServiceClassComponentsPage from './entity-with-service-class.page-object';
import { EntityWithServiceClassDeleteDialog } from './entity-with-service-class.page-object';
import EntityWithServiceClassUpdatePage from './entity-with-service-class-update.page-object';

const expect = chai.expect;

describe('EntityWithServiceClass e2e test', () => {
  let navBarPage: NavBarPage;
  let entityWithServiceClassUpdatePage: EntityWithServiceClassUpdatePage;
  let entityWithServiceClassComponentsPage: EntityWithServiceClassComponentsPage;
  let entityWithServiceClassDeleteDialog: EntityWithServiceClassDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load EntityWithServiceClasses', async () => {
    navBarPage.getEntityPage('entity-with-service-class');
    entityWithServiceClassComponentsPage = new EntityWithServiceClassComponentsPage();
    expect(await entityWithServiceClassComponentsPage.getTitle().getText()).to.match(/Entity With Service Classes/);
  });

  it('should load create EntityWithServiceClass page', async () => {
    entityWithServiceClassComponentsPage.clickOnCreateButton();
    entityWithServiceClassUpdatePage = new EntityWithServiceClassUpdatePage();
    expect(await entityWithServiceClassUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClass.home.createOrEditLabel/
    );
  });

  it('should create and save EntityWithServiceClasses', async () => {
    entityWithServiceClassUpdatePage.setZoeInput('zoe');
    expect(await entityWithServiceClassUpdatePage.getZoeInput()).to.match(/zoe/);
    await entityWithServiceClassUpdatePage.save();
    expect(await entityWithServiceClassUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last EntityWithServiceClass', async () => {
    entityWithServiceClassComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassComponentsPage.countDeleteButtons();
    await entityWithServiceClassComponentsPage.clickOnLastDeleteButton();

    entityWithServiceClassDeleteDialog = new EntityWithServiceClassDeleteDialog();
    expect(await entityWithServiceClassDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.entityWithServiceClass.delete.question/
    );
    await entityWithServiceClassDeleteDialog.clickOnConfirmButton();

    entityWithServiceClassComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
