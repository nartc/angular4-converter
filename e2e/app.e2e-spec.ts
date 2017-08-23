import { WeightConverterPage } from './app.po';

describe('weight-converter App', () => {
  let page: WeightConverterPage;

  beforeEach(() => {
    page = new WeightConverterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
