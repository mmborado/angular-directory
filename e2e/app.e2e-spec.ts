import { AngularDirectoryPage } from './app.po';

describe('angular-directory App', function() {
  let page: AngularDirectoryPage;

  beforeEach(() => {
    page = new AngularDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
