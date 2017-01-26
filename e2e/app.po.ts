import { browser, element, by } from 'protractor';

export class Webreport5asecPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
