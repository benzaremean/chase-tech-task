import { ChainablePromiseElement } from 'webdriverio';

export async function waitUntilActionable(
  element: ChainablePromiseElement<WebdriverIO.Element>
): Promise<ChainablePromiseElement<WebdriverIO.Element>> {
  const timeout = 10000;
  await element.waitForExist({ timeout });
  await element.waitForDisplayed({ timeout });
  await element.waitForClickable({ timeout });
  return element;
}
