export default class SignupPage {
  constructor(page) {
    this.page = page;

    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.phone = '#userMobile';
    this.password = '#userPassword';
    this.confirmPassword = '#confirmPassword';
    this.occupation = 'select.custom-select';
    this.genderMale = 'input[value="Male"]';
    this.genderFemale = 'input[value="Female"]';
    this.ageCheckBox = 'input[type="checkbox"]';
    this.registerBtn = '#login';
  }

  async goto() {
    await this.page.goto('client/#/auth/register',
    {waitUntil:'domcontentloaded'}
    );
  }

  async signup(user, gender = 'Male',checkbox=true,occupation='Engineer') 
  {
    await this.page.fill(this.firstName, user.firstName);
    await this.page.fill(this.lastName, user.lastName);
    await this.page.fill(this.email, user.email);
    await this.page.fill(this.phone, user.phone);
    await this.page.fill(this.password, user.password);
    await this.page.fill(this.confirmPassword, user.password);

    if (occupation) 
      {
        await this.page.selectOption(this.occupation, { label: occupation });
      }

    const selectedGender=(gender==='Male'?this.genderMale:this.genderFemale);
    await this.page.locator(selectedGender).click();

    const ageCheckbox = this.page.locator(this.ageCheckBox);
    await ageCheckbox.waitFor({ state: 'visible' });
      if (checkbox) {
    await ageCheckbox.check({ force: true });
  }
    await this.page.click(this.registerBtn);
  }


get firstNameError() {
  return this.page.locator('#firstName + .invalid-feedback');
}

get emailError() {
  return this.page.locator('#userEmail + .invalid-feedback');
}

get phoneError() {
  return this.page.locator('#userMobile + .invalid-feedback');
}

get passwordError() {
  return this.page.locator('#userPassword + .invalid-feedback');
}

get confirmPasswordError() {
  return this.page.locator('#confirmPassword + .invalid-feedback');
}

get checkboxError() {
  return this.page.locator('text=*Please check above checkbox');
}


}