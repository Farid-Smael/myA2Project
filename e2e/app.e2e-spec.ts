import { MyA2ProjectPage } from './app.po';

describe('my-a2-project App', () => {
  let page: MyA2ProjectPage;

  beforeEach(() => {
    page = new MyA2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
