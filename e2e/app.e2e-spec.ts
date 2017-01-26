import { Webreport5asecPage } from './app.po';

describe('webreport-5asec App', function() {
  let page: Webreport5asecPage;

  beforeEach(() => {
    page = new Webreport5asecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
