import { test, expect } from '../../fixtures/baseTest.js';
import data from '../../utils/testData.js';
import { waitForToast, waitForToastToDisappear } from '../../utils/helper.js';


test('User should logout successfully', async ({ loginPage, dashboardPage, page }) => {
  
  // Login first
  await loginPage.goto();
  await loginPage.login(data.validUser.email, data.validUser.password);

  const LoginToast = await waitForToast(page);
  await expect(LoginToast).toContain('Login Successfully');
  await waitForToastToDisappear(page);

  // Validate login success
  await expect(dashboardPage.page).toHaveURL(/dashboard/);

  // Logout
  await dashboardPage.logout();
    const logoutToast = await waitForToast(page,LoginToast);
    await expect(logoutToast).toContain('Logout Successfully');

  // Validate logout
  await expect(dashboardPage.page).toHaveURL(/login/);
});