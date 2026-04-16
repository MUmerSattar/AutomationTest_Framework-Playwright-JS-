import { expect } from '@playwright/test';
export default class DashboardPage {
  constructor(page) {
    this.page = page;
    this.logoutBtn = page.getByRole('button', { name: 'Sign Out' });
  }

  async logout() {
    const btn = this.logoutBtn;

    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toBeVisible();
    await expect(btn).toBeEnabled();
    await btn.click();
  }
}