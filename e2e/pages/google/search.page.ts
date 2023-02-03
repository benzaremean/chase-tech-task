import { Key } from 'webdriverio';

class SearchPage {
  private selectors = {
    cookies: {
      acceptBtn: 'button=Accept all',
    },
    searchTxtField: 'input[title="Search"]',
  };

  public async acceptCookies() {
    const acceptBtn = await $(this.selectors.cookies.acceptBtn);
    await acceptBtn.waitForClickable();
    await acceptBtn.click();
  }

  public async search(term: string) {
    const searchTxtField = await $(this.selectors.searchTxtField);
    await searchTxtField.addValue(term);
    await browser.keys([Key.Enter]);
  }
}

export default new SearchPage();
