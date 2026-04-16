import { test, expect } from '../../fixtures/baseTest.js';
import LoginPage from '../../pages/LoginPage.js';
import data from '../../utils/testData.js';
import { waitForToast } from '../../utils/helper.js';

//  --------------------------------------------------

test('Incorrect email in login should show error', async ({ loginPage,page }) => {

  await loginPage.goto();
  await loginPage.login(data.invalidUser.email, data.validUser.password);

//Toast Validation

  const error = await waitForToast(page);
  await expect(error).toContain('Incorrect email or password');
});

//  --------------------------------------------------

test('Incorrect password in login should show error', async ({ loginPage,page }) => {

  await loginPage.goto();
  await loginPage.login(data.validUser.email, data.invalidUser.password);

//Toast Validation

  const error = await waitForToast(page);
  await expect(error).toContain('Incorrect email or password');
});

//  --------------------------------------------------

test('Invalid email in login should show error', async ({ loginPage,page }) => {

  await loginPage.goto();
  await loginPage.login('test@', data.validUser.password);
  const errorMessage = page.locator('#userEmail + .invalid-feedback');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Enter Valid Email');
});

//  --------------------------------------------------

test('Empty Email field in login should show error', async ({ loginPage,page }) => {

  await loginPage.goto();
  await loginPage.login('', data.invalidUser.password);
  const errorMessage = page.locator('#userEmail + .invalid-feedback');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Email is required');
});

//  --------------------------------------------------

test('Empty Password field in login should show error', async ({ loginPage,page }) => {

  await loginPage.goto();
  await loginPage.login(data.validUser.email,'');
  const errorMessage = page.locator('#userPassword + .invalid-feedback');;
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Password is required');
});

//  --------------------------------------------------

test('Should show error for empty Email & Password', async ({ loginPage,page }) => {

  await loginPage.goto();
  await page.click('#login'); 

  const PassworderrorMessage = page.locator('#userPassword + .invalid-feedback');;
  await expect(PassworderrorMessage).toBeVisible();
  await expect(PassworderrorMessage).toContainText('Password is required');


  const EmailerrorMessage = page.locator('#userEmail + .invalid-feedback');
  await expect(EmailerrorMessage).toBeVisible();
  await expect(EmailerrorMessage).toContainText('Email is required');
  
});