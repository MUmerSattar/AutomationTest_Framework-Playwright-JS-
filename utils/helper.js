export async function waitForToast(page, previousText = '') {
  const toast = page.locator('div[aria-label]').last();

  await page.waitForFunction(
    ([selector, prev]) => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return false;

      const latest = elements[elements.length - 1];
      const text = latest.getAttribute('aria-label') || latest.textContent;

      return text && text !== prev;
    },
    ['div[aria-label]', previousText],
    { timeout: 10000 }
  );

  const latestToast = page.locator('div[aria-label]').last();
  return await latestToast.getAttribute('aria-label');
}

export async function waitForToastToDisappear(page) {
  const toast = page.locator('div[aria-label]');
  
  if (await toast.count() > 0) {
    await toast.last().waitFor({ state: 'visible', timeout: 5000 });
  }

  await toast.last().waitFor({ state: 'hidden', timeout: 10000 });
}