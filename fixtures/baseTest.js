import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import SignupPage from '../pages/SignupPage.js';
import DashboardPage from '../pages/DashboardPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export { expect };