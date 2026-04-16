export default class LoginPage {
  constructor(page) {
    this.page = page;

    this.email = '#userEmail';
    this.password = '#userPassword';
    this.loginBtn = '#login';
    this.Msg = '.toast-title';
  }

  async goto() {
    await this.page.goto('client/#/auth/login');
    await this.page.waitForLoadState('domcontentloaded');

  }

  async login(email, password) {
    await this.page.fill(this.email, email);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }


}