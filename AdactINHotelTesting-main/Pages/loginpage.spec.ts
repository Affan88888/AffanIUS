// LoginPage.ts
import { Page } from '@playwright/test';

class LoginPage {
  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto('https://adactinhotelapp.com/index.php');
  }

  async fillLoginForm(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
  }

  async clickLoginButton() {
    await this.page.click('#login');
  }
}

export default LoginPage;