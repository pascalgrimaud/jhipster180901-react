/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import PlaceComponentsPage from './place.page-object';
import { PlaceDeleteDialog } from './place.page-object';
import PlaceUpdatePage from './place-update.page-object';

const expect = chai.expect;

describe('Place e2e test', () => {
  let navBarPage: NavBarPage;
  let placeUpdatePage: PlaceUpdatePage;
  let placeComponentsPage: PlaceComponentsPage;
  let placeDeleteDialog: PlaceDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Places', async () => {
    navBarPage.getEntityPage('place');
    placeComponentsPage = new PlaceComponentsPage();
    expect(await placeComponentsPage.getTitle().getText()).to.match(/Places/);
  });

  it('should load create Place page', async () => {
    placeComponentsPage.clickOnCreateButton();
    placeUpdatePage = new PlaceUpdatePage();
    expect(await placeUpdatePage.getPageTitle().getAttribute('id')).to.match(/jhipster180901App.testRootPlace.home.createOrEditLabel/);
  });

  it('should create and save Places', async () => {
    placeUpdatePage.setNameInput('name');
    expect(await placeUpdatePage.getNameInput()).to.match(/name/);
    placeUpdatePage.setNumberOfSeatsInput('5');
    expect(await placeUpdatePage.getNumberOfSeatsInput()).to.eq('5');
    placeUpdatePage.setShortNameInput('shortName');
    expect(await placeUpdatePage.getShortNameInput()).to.match(/shortName/);
    placeUpdatePage.setColorBackgroundInput('colorBackground');
    expect(await placeUpdatePage.getColorBackgroundInput()).to.match(/colorBackground/);
    placeUpdatePage.setColorTextInput('colorText');
    expect(await placeUpdatePage.getColorTextInput()).to.match(/colorText/);
    placeUpdatePage.setDescriptionInput('description');
    expect(await placeUpdatePage.getDescriptionInput()).to.match(/description/);
    // placeUpdatePage.preferredDivisionSelectLastOption();
    placeUpdatePage.ownerSelectLastOption();
    await placeUpdatePage.save();
    expect(await placeUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last Place', async () => {
    placeComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await placeComponentsPage.countDeleteButtons();
    await placeComponentsPage.clickOnLastDeleteButton();

    placeDeleteDialog = new PlaceDeleteDialog();
    expect(await placeDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testRootPlace.delete.question/);
    await placeDeleteDialog.clickOnConfirmButton();

    placeComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await placeComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
