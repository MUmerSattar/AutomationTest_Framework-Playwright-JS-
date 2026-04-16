import { test, expect } from '../../fixtures/baseTest.js';
import LoginPage from '../../pages/LoginPage.js';
import data from '../../utils/testData.js';
import { waitForToast } from '../../utils/helper.js';


test('User should login successfully', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(data.validUser.email, data.validUser.password);
  //Validate toast
  const message = await waitForToast(page);
  await expect(message).toContain('Login Successfully')

  await expect(page).toHaveURL(/dashboard/);
});