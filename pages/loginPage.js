

export class loginPage {
    constructor(page) {
        this.page = page;
        this.bankproject = '//*[text()="Bank Project"]';
        this.userID = 'input[name="uid"]';
        this.password = 'input[name="password"]';
        this.loginbtn = '//input[@name="btnLogin"]';
        this.successmsg='//marquee[@class="heading3"]';
        this.logout = 'a[href="Logout.php"]';

    }
    async clickonbankproject() {
        // await setTimeout(50000);
        await this.page.locator(this.bankproject).click();
    }
    async launchUrl() {

        await this.page.goto('/');
    }

    async enterUserID(uid) {
        await this.page.locator(this.userID).fill(uid);
    }
    async enterPassword(password) {
        await this.page.locator(this.password).fill(password);
    }
    async submitcredentials() {
        await this.page.locator(this.loginbtn).click();
    }
    verifyloginpage() {
        // Directly return the Locator object
        return this.page.locator(this.successmsg);
    }
    async clickonlogout() {
        this.page.locator(this.logout).click();
    }
}