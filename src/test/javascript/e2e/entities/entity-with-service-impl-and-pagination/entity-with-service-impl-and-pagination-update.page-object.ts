import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplAndPaginationUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipster180901App.entityWithServiceImplAndPagination.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  hugoInput: ElementFinder = element(by.css('input#entity-with-service-impl-and-pagination-hugo'));

  getPageTitle() {
    return this.pageTitle;
  }

  setHugoInput(hugo) {
    this.hugoInput.sendKeys(hugo);
  }

  getHugoInput() {
    return this.hugoInput.getAttribute('value');
  }

  save() {
    return this.saveButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
