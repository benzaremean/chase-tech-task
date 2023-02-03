import allureReporter from '@wdio/allure-reporter';

class ArticlePage {
  private selectors = {
    heading: '[data-gu-name="headline"] h1',
  };

  public async getHeadline(): Promise<string> {
    const h1 = await $(this.selectors.heading);
    const heading = await h1.getText();
    allureReporter.addAttachment(
      'News Articles Headline',
      heading,
      'text/plain'
    );
    return heading;
  }
}

export default new ArticlePage();
