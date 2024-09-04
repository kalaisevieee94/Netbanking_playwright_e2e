import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { Logindata } from "../fixtures/TestData"
 
test('login', async ({ page }) => {
    const ln = new loginPage(page);
   let TestData=new Logindata();
    await ln.launchUrl();
    await ln.clickonbankproject();
    await ln.enterUserID(TestData.getuserid());
    await ln.enterPassword(TestData.getpassword());
    await ln.submitcredentials();
    await expect(ln.verifyloginpage()).toHaveText("Welcome To Manager's Page of GTPL Bank");;
})