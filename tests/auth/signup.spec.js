import { test, expect } from '../../fixtures/baseTest.js';
import SignupPage from '../../pages/SignupPage.js';
import data from '../../utils/testData.js';
import { waitForToast } from '../../utils/helper.js';

//  --------------------------------------------------

test('User should signup successfully with Male Gender', async ({ signupPage, page }) => {
  await signupPage.goto();

  await signupPage.signup(data.getUser(),'Male',true,'Student');


  //Toast Validation

  const text = await waitForToast(page);
  await expect(text).toContain('Registered Successfully');

  const successMessage = page.locator('.headcolor');
  await expect(successMessage).toContainText('Account Created Successfully');

});

//  --------------------------------------------------

test('User should signup successfully with Female Gender', async ({ signupPage, page }) => {
  await signupPage.goto();

  await signupPage.signup(data.getUser(),'Female',true,'Doctor');


  //Toast Validation

  const text = await waitForToast(page);
  await expect(text).toContain('Registered Successfully');

  const successMessage = page.locator('.headcolor');
  await expect(successMessage).toContainText('Account Created Successfully');

});