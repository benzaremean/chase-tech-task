import allureReporter from '@wdio/allure-reporter';

class SearchResultsPage {
  private selectors = {
    navigation: {
      container: 'div[role="navigation"]',
      currentPage: '[aria-current="page"] span',
    },
    newsHeadings: 'a h3',
  };

  public async onTab(expectedTab: string) {
    const container = await $(this.selectors.navigation.container);
    const selectedTab = await container.$(
      this.selectors.navigation.currentPage
    );
    expect(selectedTab).toHaveText(expectedTab);
  }

  private async collectHeadings(): Promise<string[]> {
    await $(this.selectors.newsHeadings);
    const headingElements = await $$(this.selectors.newsHeadings);
    const headings = await Promise.all(
      headingElements.map((element) => element.getText())
    );
    return headings;
  }

  public async numberOfMatchingHeadings(headline: string): Promise<number> {
    const headings = (await this.collectHeadings()).map((heading) =>
      heading.replace('...', '').trim()
    );
    allureReporter.addAttachment(
      'News Articles on Google',
      JSON.stringify(headings, undefined, 2),
      'text/plain'
    );
    return headings.filter((heading) => heading === headline).length;
  }
}

export default new SearchResultsPage();
