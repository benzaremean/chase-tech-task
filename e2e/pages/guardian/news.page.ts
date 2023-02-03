class NewsPage {
  private selectors = {
    article: '[data-test-id="facia-card"]',
    cookies: {
      container: '[title="The Guardian consent message"]',
      yesIamHappy: 'button[title="Yes, I’m happy"]',
    },
  };

  public async acceptCookies() {
    const frame = await $(this.selectors.cookies.container);
    await browser.switchToFrame(frame);
    const myButton = await $(this.selectors.cookies.yesIamHappy);
    await myButton.waitForClickable();
    await myButton.click();
    await browser.switchToParentFrame();
  }

  public async openArticle(index: number): Promise<void> {
    await $(this.selectors.article);
    const articles = await $$(this.selectors.article);
    await articles[index].waitForClickable();
    await articles[index].click();
  }
}

export default new NewsPage();
