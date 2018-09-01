/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TestTwoRelationshipsSameEntityComponentsPage from './test-two-relationships-same-entity-my-suffix.page-object';
import { TestTwoRelationshipsSameEntityDeleteDialog } from './test-two-relationships-same-entity-my-suffix.page-object';
import TestTwoRelationshipsSameEntityUpdatePage from './test-two-relationships-same-entity-my-suffix-update.page-object';

const expect = chai.expect;

describe('TestTwoRelationshipsSameEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let testTwoRelationshipsSameEntityUpdatePage: TestTwoRelationshipsSameEntityUpdatePage;
  let testTwoRelationshipsSameEntityComponentsPage: TestTwoRelationshipsSameEntityComponentsPage;
  /*let testTwoRelationshipsSameEntityDeleteDialog: TestTwoRelationshipsSameEntityDeleteDialog;*/

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load TestTwoRelationshipsSameEntities', async () => {
    navBarPage.getEntityPage('test-two-relationships-same-entity-my-suffix');
    testTwoRelationshipsSameEntityComponentsPage = new TestTwoRelationshipsSameEntityComponentsPage();
    expect(await testTwoRelationshipsSameEntityComponentsPage.getTitle().getText()).to.match(/Test Two Relationships Same Entities/);
  });

  it('should load create TestTwoRelationshipsSameEntity page', async () => {
    testTwoRelationshipsSameEntityComponentsPage.clickOnCreateButton();
    testTwoRelationshipsSameEntityUpdatePage = new TestTwoRelationshipsSameEntityUpdatePage();
    expect(await testTwoRelationshipsSameEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /jhipster180901App.testTwoRelationshipsSameEntity.home.createOrEditLabel/
    );
  });

  /* it('should create and save TestTwoRelationshipsSameEntities', async () => {
        testTwoRelationshipsSameEntityUpdatePage.firstRelationshipSelectLastOption();
        testTwoRelationshipsSameEntityUpdatePage.secondRelationshipSelectLastOption();
        testTwoRelationshipsSameEntityUpdatePage.userOneSelectLastOption();
        testTwoRelationshipsSameEntityUpdatePage.userTwoSelectLastOption();
        testTwoRelationshipsSameEntityUpdatePage.firstUniqueRequiredRelationSelectLastOption();
        testTwoRelationshipsSameEntityUpdatePage.secondUniqueRequiredRelationSelectLastOption();
        await testTwoRelationshipsSameEntityUpdatePage.save();
        expect(await testTwoRelationshipsSameEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    });*/

  /* it('should delete last TestTwoRelationshipsSameEntity', async () => {
        testTwoRelationshipsSameEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await testTwoRelationshipsSameEntityComponentsPage.countDeleteButtons();
        await testTwoRelationshipsSameEntityComponentsPage.clickOnLastDeleteButton();

        testTwoRelationshipsSameEntityDeleteDialog = new TestTwoRelationshipsSameEntityDeleteDialog();
        expect(await testTwoRelationshipsSameEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipster180901App.testTwoRelationshipsSameEntity.delete.question/);
        await testTwoRelationshipsSameEntityDeleteDialog.clickOnConfirmButton();

        testTwoRelationshipsSameEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await testTwoRelationshipsSameEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

  after(() => {
    navBarPage.autoSignOut();
  });
});
