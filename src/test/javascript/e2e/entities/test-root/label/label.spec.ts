/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import LabelComponentsPage from './label.page-object';
import { LabelDeleteDialog } from './label.page-object';
import LabelUpdatePage from './label-update.page-object';

const expect = chai.expect;

describe('Label e2e test', () => {
  let navBarPage: NavBarPage;
  let labelUpdatePage: LabelUpdatePage;
  let labelComponentsPage: LabelComponentsPage;
  let labelDeleteDialog: LabelDeleteDialog;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Labels', async () => {
    navBarPage.getEntityPage('label');
    labelComponentsPage = new LabelComponentsPage();
    expect(await labelComponentsPage.getTitle().getText()).to.match(/Labels/);
  });

  it('should load create Label page', async () => {
    labelComponentsPage.clickOnCreateButton();
    labelUpdatePage = new LabelUpdatePage();
    expect(await labelUpdatePage.getPageTitle().getAttribute('id')).to.match(/jhipster180901App.testRootLabel.home.createOrEditLabel/);
  });

  it('should create and save Labels', async () => {
    labelUpdatePage.setLabelNameInput('labelName');
    expect(await labelUpdatePage.getLabelNameInput()).to.match(/labelName/);
    await labelUpdatePage.save();
    expect(await labelUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last Label', async () => {
    labelComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await labelComponentsPage.countDeleteButtons();
    await labelComponentsPage.clickOnLastDeleteButton();

    labelDeleteDialog = new LabelDeleteDialog();
    expect(await labelDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testRootLabel.delete.question/);
    await labelDeleteDialog.clickOnConfirmButton();

    labelComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await labelComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
