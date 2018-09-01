/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import BankAccountComponentsPage from './bank-account-my-suffix.page-object';
import { BankAccountDeleteDialog } from './bank-account-my-suffix.page-object';
import BankAccountUpdatePage from './bank-account-my-suffix-update.page-object';
import path from 'path';

const expect = chai.expect;

describe('BankAccount e2e test', () => {
  let navBarPage: NavBarPage;
  let bankAccountUpdatePage: BankAccountUpdatePage;
  let bankAccountComponentsPage: BankAccountComponentsPage;
  let bankAccountDeleteDialog: BankAccountDeleteDialog;
  const fileToUpload = '../../../../../../main/webapp/static/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load BankAccounts', async () => {
    navBarPage.getEntityPage('bank-account-my-suffix');
    bankAccountComponentsPage = new BankAccountComponentsPage();
    expect(await bankAccountComponentsPage.getTitle().getText()).to.match(/Bank Accounts/);
  });

  it('should load create BankAccount page', async () => {
    bankAccountComponentsPage.clickOnCreateButton();
    bankAccountUpdatePage = new BankAccountUpdatePage();
    expect(await bankAccountUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testRootBankAccount.home.createOrEditLabel/
    );
  });

  it('should create and save BankAccounts', async () => {
    bankAccountUpdatePage.setNameInput('name');
    expect(await bankAccountUpdatePage.getNameInput()).to.match(/name/);
    bankAccountUpdatePage.setBankNumberInput('5');
    expect(await bankAccountUpdatePage.getBankNumberInput()).to.eq('5');
    bankAccountUpdatePage.setAgencyNumberInput('5');
    expect(await bankAccountUpdatePage.getAgencyNumberInput()).to.eq('5');
    bankAccountUpdatePage.setLastOperationDurationInput('5');
    expect(await bankAccountUpdatePage.getLastOperationDurationInput()).to.eq('5');
    bankAccountUpdatePage.setMeanOperationDurationInput('5');
    expect(await bankAccountUpdatePage.getMeanOperationDurationInput()).to.eq('5');
    bankAccountUpdatePage.setBalanceInput('5');
    expect(await bankAccountUpdatePage.getBalanceInput()).to.eq('5');
    bankAccountUpdatePage.setOpeningDayInput('01-01-2001');
    expect(await bankAccountUpdatePage.getOpeningDayInput()).to.eq('2001-01-01');
    bankAccountUpdatePage.setLastOperationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await bankAccountUpdatePage.getLastOperationDateInput()).to.contain('2001-01-01T02:30');
    const selectedActive = await bankAccountUpdatePage.getActiveInput().isSelected();
    if (selectedActive) {
      bankAccountUpdatePage.getActiveInput().click();
      expect(await bankAccountUpdatePage.getActiveInput().isSelected()).to.be.false;
    } else {
      bankAccountUpdatePage.getActiveInput().click();
      expect(await bankAccountUpdatePage.getActiveInput().isSelected()).to.be.true;
    }
    bankAccountUpdatePage.accountTypeSelectLastOption();
    bankAccountUpdatePage.setAttachmentInput(absolutePath);
    bankAccountUpdatePage.setDescriptionInput('description');
    expect(await bankAccountUpdatePage.getDescriptionInput()).to.match(/description/);
    bankAccountUpdatePage.userSelectLastOption();
    await bankAccountUpdatePage.save();
    expect(await bankAccountUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  it('should delete last BankAccount', async () => {
    bankAccountComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await bankAccountComponentsPage.countDeleteButtons();
    await bankAccountComponentsPage.clickOnLastDeleteButton();

    bankAccountDeleteDialog = new BankAccountDeleteDialog();
    expect(await bankAccountDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /jhipster180901App.testRootBankAccount.delete.question/
    );
    await bankAccountDeleteDialog.clickOnConfirmButton();

    bankAccountComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await bankAccountComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
