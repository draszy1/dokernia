import { FrontappPage } from './app.po';

describe('frontapp App', function() {
  let page: FrontappPage;

  beforeEach(() => {
    page = new FrontappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
