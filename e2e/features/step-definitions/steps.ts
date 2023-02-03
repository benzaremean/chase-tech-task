import { Given, When, Then } from '@wdio/cucumber-framework';

import newsPage from '../../pages/guardian/news.page.js';
import articlePage from '../../pages/guardian/article.page.js';
import googleSearchPage from '../../pages/google/search.page.js';
import googleSearchResultsPage from '../../pages/google/searchResults.page.js';

let article: string;
let numberOfMatching: number;

Given(
  /^I take the (\d+)(st|nd|rd)? news article from The Guardian website$/,
  async (index: number, sugar: string) => {
    await browser.url('/tone/news');
    await newsPage.acceptCookies();
    await newsPage.openArticle(index - 1);
    article = await articlePage.getHeadline();
    console.log(article);
  }
);

When(/^I search for similar information on Google$/, async () => {
  await browser.url('https://google.com');
  await googleSearchPage.acceptCookies();
  await googleSearchPage.search(article);
  await googleSearchResultsPage.onTab('All');
  numberOfMatching = await googleSearchResultsPage.numberOfMatchingHeadings(
    article
  );
});

Then(
  /^the Guardian news article is considered fake if there are less than 2 matches on Google$/,
  async () => {
    // was surprised that the expect library that comes with wdio does not allow for setting custom messages hence why I used a try catch
    try {
      expect(numberOfMatching).toBeLessThan(2);
    } catch (error) {
      throw new Error(
        `Expected less than 2 matches on Google to certify news story as fake but found ${numberOfMatching}`
      );
    }
  }
);

Then(
  /^the Guardian news article is considered real if there are 2 or more matches on Google$/,
  async () => {
    try {
      expect(numberOfMatching).toBeGreaterThanOrEqual(2);
    } catch (error) {
      throw new Error(
        `Expected 2 or more macthes on Google to certify news story as real but found ${numberOfMatching}`
      );
    }
  }
);
