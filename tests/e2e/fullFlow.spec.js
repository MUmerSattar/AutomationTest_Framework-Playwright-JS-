import { test, expect } from '../../fixtures/baseTest.js';
import SignupPage from '../../pages/SignupPage.js';
import LoginPage from '../../pages/LoginPage.js';
import DashboardPage from '../../pages/DashboardPage.js';
import data from '../../utils/testData.js';
import { waitForToast } from '../../utils/helper.js';


test('Full user journey: Signup → Login → Logout', async ({ signupPage, loginPage, dashboardPage,page }) => {
const user = data.getUser();

  // Signup
  await signupPage.goto();
  await signupPage.signup(user);
  console.log(user.email);

  const RegToast = await waitForToast(page);
  await expect(RegToast).toContain('Registered Successfully');

  // await page.waitForLoadState('networkidle');
  
  const LoginBtn = page.locator('//button[normalize-space()="Login"]');
  await expect(LoginBtn).toBeVisible();
  await expect(LoginBtn).toBeEnabled();
  await LoginBtn.click();
  
  await expect(page).toHaveURL(/login/);

  // Login
  await loginPage.login(user.email,user.password);
  const loginToast = await waitForToast(page,RegToast);
  await expect(loginToast).toContain('Login Successfully');

  await expect(page).toHaveURL(/dashboard/);

  // Logout
  await dashboardPage.logout();
  const logoutToast = await waitForToast(page,loginToast);
  await expect(logoutToast).toContain('Logout Successfully');
  await expect(page).toHaveURL(/login/);
});