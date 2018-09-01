/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import DivisionComponentsPage from './division.page-object';
import { DivisionDeleteDialog } from './division.page-object';
import DivisionUpdatePage from './division-update.page-object';

const expect = chai.expect;

describe('Division e2e test', () => {
  let navBarPage: NavBarPage;
  let divisionUpdatePage: DivisionUpdatePage;
  let divisionComponentsPage: DivisionComponentsPage;
  let divisionDeleteDialog: DivisionDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Divisions', async () => {
    navBarPage.getEntityPage('division');
    divisionComponentsPage = new DivisionComponentsPage();
    expect(await divisionComponentsPage.getTitle().getText()).to.match(/Divisions/);
  });

  it('should load create Division page', async () => {
    divisionComponentsPage.clickOnCreateButton();
    divisionUpdatePage = new DivisionUpdatePage();
    expect(await divisionUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testRootDivision.home.createOrEditLabel/
    );
  });

  it('should create and save Divisions', async () => {
    divisionUpdatePage.setNameInput('name');
    expect(await divisionUpdatePage.getNameInput()).to.match(/name/);
    divisionUpdatePage.setShortNameInput('shortName');
    expect(await divisionUpdatePage.getShortNameInput()).to.match(/shortName/);
    divisionUpdatePage.setNumberOfPeopleInput('5');
    expect(await divisionUpdatePage.getNumberOfPeopleInput()).to.eq('5');
    divisionUpdatePage.divisionTypeSelectLastOption();
    divisionUpdatePage.setColorBackgroundInput('colorBackground');
    expect(await divisionUpdatePage.getColorBackgroundInput()).to.match(/colorBackground/);
    divisionUpdatePage.setColorTextInput('colorText');
    expect(await divisionUpdatePage.getColorTextInput()).to.match(/colorText/);
    await divisionUpdatePage.save();
    expect(await divisionUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last Division', async () => {
    divisionComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await divisionComponentsPage.countDeleteButtons();
    await divisionComponentsPage.clickOnLastDeleteButton();

    divisionDeleteDialog = new DivisionDeleteDialog();
    expect(await divisionDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testRootDivision.delete.question/);
    await divisionDeleteDialog.clickOnConfirmButton();

    divisionComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await divisionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
