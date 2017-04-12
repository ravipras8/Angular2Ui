import { FinExpAppPage } from './app.po';

describe('fin-exp-app App', () => {
  let page: FinExpAppPage;

  beforeEach(() => {
    page = new FinExpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
