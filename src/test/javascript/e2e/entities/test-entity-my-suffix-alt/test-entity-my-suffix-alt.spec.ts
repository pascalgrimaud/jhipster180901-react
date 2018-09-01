/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestEntityComponentsPage from './test-entity-my-suffix-alt.page-object';
import { TestEntityDeleteDialog } from './test-entity-my-suffix-alt.page-object';
import TestEntityUpdatePage from './test-entity-my-suffix-alt-update.page-object';

const expect = chai.expect;

describe('TestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let testEntityUpdatePage: TestEntityUpdatePage;
  let testEntityComponentsPage: TestEntityComponentsPage;
  /*let testEntityDeleteDialog: TestEntityDeleteDialog;*/

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestEntities', async () => {
    navBarPage.getEntityPage('test-entity-my-suffix-alt');
    testEntityComponentsPage = new TestEntityComponentsPage();
    expect(await testEntityComponentsPage.getTitle().getText()).to.match(/Test Entities/);
  });

  it('should load create TestEntity page', async () => {
    testEntityComponentsPage.clickOnCreateButton();
    testEntityUpdatePage = new TestEntityUpdatePage();
    expect(await testEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(/jhipster180901App.testEntity.home.createOrEditLabel/);
  });

  /* it('should create and save TestEntities', async () => {
        testEntityUpdatePage.userOneToManySelectLastOption();
        // testEntityUpdatePage.userManyToManySelectLastOption();
        testEntityUpdatePage.userOneToOneSelectLastOption();
        await testEntityUpdatePage.save();
        expect(await testEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    });*/

  /* it('should delete last TestEntity', async () => {
        testEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await testEntityComponentsPage.countDeleteButtons();
        await testEntityComponentsPage.clickOnLastDeleteButton();

        testEntityDeleteDialog = new TestEntityDeleteDialog();
        expect(await testEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testEntity.delete.question/);
        await testEntityDeleteDialog.clickOnConfirmButton();

        testEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await testEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

  after(() => {
    navBarPage.autoSignOut();
  });
});
