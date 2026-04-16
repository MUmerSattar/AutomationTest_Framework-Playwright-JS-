import { test, expect } from '../../fixtures/baseTest.js';
import data from '../../utils/testData.js';
import { waitForToast } from '../../utils/helper.js';

test.describe('Invalid Signup Tests', () => {

//  --------------------------------------------------
  test('Should show error for empty form', async ({ signupPage, page }) => {

    await signupPage.goto();

    await page.click('#login'); 


    await expect(signupPage.firstNameError).toBeVisible();
    await expect(signupPage.emailError).toBeVisible();  
    await expect(signupPage.phoneError).toBeVisible();
    await expect(signupPage.passwordError).toBeVisible();
    await expect(signupPage.confirmPasswordError).toBeVisible();
    await expect(signupPage.checkboxError).toBeVisible();
  });

//  --------------------------------------------------
  test('Should show error for invalid email', async ({ signupPage, page }) => {

    await signupPage.goto();

    const invalidData = {
      ...data.getUser(),
      email: 'invalidemail'
    };

    await signupPage.signup(invalidData);
    await expect(signupPage.emailError).toBeVisible();  
    const errorMessage = signupPage.emailError;
    await expect(errorMessage).toContainText('Enter Valid Email');
  });

//  --------------------------------------------------
  test('Should show error for signup firstname is required', async ({ signupPage, page }) => {

    await signupPage.goto();

    const invalidData = {
      ...data.getUser(),
      firstName: ''
    };

    await signupPage.signup(invalidData);
    await expect(signupPage.firstNameError).toBeVisible();  
    const errorMessage = signupPage.firstNameError;
    await expect(errorMessage).toContainText('First Name is required');
  });
  
//  --------------------------------------------------
  test('Should show error for signup email is required', async ({ signupPage, page }) => {

    await signupPage.goto();

    const invalidData = {
      ...data.getUser(),
      email: ''
    };

    await signupPage.signup(invalidData);
    await expect(signupPage.emailError).toBeVisible();  
    const errorMessage = signupPage.emailError;
    await expect(errorMessage).toContainText('Email is required');
  });
  //  --------------------------------------------------
  test('Should show error for signup password is required', async ({ signupPage, page }) => {

    await signupPage.goto();

    const invalidData = {
      ...data.getUser(),
      password: ''
    };

    await signupPage.signup(invalidData);
    await expect(signupPage.passwordError).toBeVisible();  
    const PassworderrorMessage = signupPage.passwordError;
    await expect(PassworderrorMessage).toContainText('Password is required');
    
    await expect(signupPage.confirmPasswordError).toBeVisible();  
    const CPerrorMessage = signupPage.confirmPasswordError;
    await expect(CPerrorMessage).toContainText('Confirm Password is required');
  });
//  --------------------------------------------------
  test('Should show error for password mismatch', async ({ signupPage, page }) => {

        const user = {
      ...data.getUser(),
    };
    await signupPage.goto();

    await page.fill('#firstName', user.firstName);
    await page.fill('#lastName', user.lastName);
    await page.fill('#userEmail', user.email);
    await page.fill('#userMobile', user.phone);
    await page.fill('#userPassword', user.password);
    await page.fill('#confirmPassword', 'Wrong@123');
    await page.locator('input[value="Male"]').click();
    await page.locator('input[type="checkbox"]').check();

    await page.click('#login');

    await expect(signupPage.confirmPasswordError).toBeVisible();
    const errorMessage = signupPage.confirmPasswordError;
    await expect(errorMessage).toContainText('Password and Confirm Password must match with each other.');
  });

  // --------------------------------------------------
  test('Should show error for already registered email', async ({ signupPage, page }) => {

    await signupPage.goto();

    const existingUser = {
      ...data.getUser(),
      email: data.validUser.email
    };

    await signupPage.signup(existingUser);

    const error = await waitForToast(page);
    await expect(error).toContain('User already exisits with this Email Id!');
  });

  // --------------------------------------------------
  test('Should not allow signup without age checkbox', async ({ signupPage,page }) => {

    await signupPage.goto();
    await signupPage.signup(data.getUser(),'Male',false);

    await expect(signupPage.checkboxError).toBeVisible();
    const errorMessage = signupPage.checkboxError;
    await expect(errorMessage).toContainText('Please check above checkbox');
  });

  //  --------------------------------------------------
  test('Should show error when phone number is less than 10 digits', async ({ signupPage, page }) => {
  const user = data.getUser();

  await signupPage.goto();

  await page.fill('#firstName', user.firstName);
  await page.fill('#lastName', user.lastName);
  await page.fill('#userEmail', user.email);

  await page.fill('#userMobile', '4854');

  await page.fill('#userPassword', user.password);
  await page.fill('#confirmPassword', user.password);
  await page.locator('input[value="Male"]').click();
  await page.locator('input[type="checkbox"]').check();
  await page.click('#login');

  const phoneError = signupPage.phoneError;
  await expect(phoneError).toBeVisible();
  await expect(phoneError).toContainText('Phone Number must be 10 digit');
});

  //  --------------------------------------------------

test('Should show error when last name is missing', async ({ signupPage, page }) => {

  const user = data.getUser();

  await signupPage.goto();

  // Fill all fields EXCEPT last name
  await page.fill('#firstName', user.firstName);
  await page.fill('#userEmail', user.email);
  await page.fill('#userMobile', user.phone);
  await page.fill('#userPassword', user.password);
  await page.fill('#confirmPassword', user.password);

  await page.locator('input[value="Male"]').click();
  await page.locator('input[type="checkbox"]').check();

  await page.click('#login');

  const error = await waitForToast(page);
  await expect(error).toContain('Last Name is required!');

});

});