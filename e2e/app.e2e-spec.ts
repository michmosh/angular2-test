import { UrlsPage } from './app.po';

describe('urls App', function() {
  let page: UrlsPage;

  beforeEach(() => {
    page = new UrlsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
